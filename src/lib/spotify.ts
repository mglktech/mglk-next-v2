import querystring from 'querystring';
import { EnumType } from 'typescript';

const {
	SPOTIFY_CLIENT_ID: client_id,
	SPOTIFY_CLIENT_SECRET: client_secret,
	SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const refreshRate = 3; // Number of seconds between each request to the endpoint for new data

/*
switch-based response type, based on a timer called RefreshRate,
Store a variable in the main thread for the Spotify class
The Spotify class contains two objects: lastResponse, and a timestamp.
- lastResponse stores the Spotify API's last query response,
- timestamp stores the date and time that the lastResponse was updated.

CASE 1: Timestamp is less than RefreshRate Seconds in the past ->
  return lastResponse;
CASE 2: Timestamp is More than or Equal To RefreshRate Seconds in the past -> 
  update the variable,
  return the new variable.
*/

let cached = global.spotify;
if (!cached) {
	cached = global.spotify = {
		conn: null,
		promise: null,
		timestamp: Date.now(),
	};
	//console.log('Spotify: Class Initialized.');
}
async function spotifyConnect() {
	const expired =
		Date.now() >= cached.timestamp + cached?.conn?.expires_in * 1000;
	if (expired) {
		//console.log('Spotify: Token Expired. Refreshing...');
		cached.promise = null;
	}

	if (!cached.promise) {
		cached.promise = await getAccessToken();
		cached.timestamp = Date.now();
		cached.conn = null;
	}

	if (cached.conn) {
		return cached.conn;
	}

	cached.conn = await cached.promise;
	//console.log('Spotify: Connection Established.');
	return cached.conn;
}

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify({
			grant_type: 'refresh_token',
			refresh_token,
		}),
	});

	const jsonResponse = await response.json();
	//console.log(`Spotify: Token Retrieved.`);
	return jsonResponse;
};

async function getNowPlaying() {
	await spotifyConnect();
	const { access_token } = cached.conn;
	const response = await fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
	let { status, statusText } = response;
	//status = 401;
	switch (status) {
		case 201 || 202 || 204:
			return { isPlaying: false, error: false, status, statusText };
		case 400 || 403 || 404 || 500 || 502 || 503:
			return { isPlaying: false, error: true, status, statusText };
		case 401:
			//re-do verification automatically before redeploying
			return { isPlaying: false, error: true, status, statusText };
		default:
			try {
				const song = await response.json();
				const isPlaying = song.is_playing;
				const title = song?.item?.name;
				const artist = song?.item?.artists
					.map((_artist: any) => _artist.name)
					.join(', ');
				const album = song?.item?.album?.name;
				const albumImageUrl = song?.item?.album?.images[0]?.url;
				const songUrl = song?.item?.external_urls?.spotify;

				return {
					album,
					albumImageUrl,
					artist,
					isPlaying,
					songUrl,
					title,
				};
			} catch {
				return {
					album: '',
					albumImageUrl: '',
					artist: '',
					isPlaying: false,
					songUrl: '',
					title: '',
				};
			}
	}
}
interface apiData {
	timestamp: number;
	response: object;
}
let apiData = {
	timestamp: 0,
	response: {},
};
export const nowPlaying = async () => {
	const timestamp = Date.now();
	const expired = timestamp >= apiData?.timestamp + refreshRate * 1000;
	if (expired) {
		const response = await getNowPlaying();
		apiData = { response, timestamp };
		return response;
	}
	const { response } = apiData;
	return response;
};
