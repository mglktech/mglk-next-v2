import * as GooglePhotosAlbum from 'google-photos-album-image-url-fetch';
const main = async () => {
	try {
		const re = await GooglePhotosAlbum.fetchImageUrls(
			'https://photos.app.goo.gl/e4ieegmgkLaMC7Wc6'
		);
		return re;
	} catch (err) {
		console.error(err);
	}
};

export default main;
