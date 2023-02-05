import { useState, useEffect } from 'react';
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Segment,
	Sidebar,
	Visibility,
	Label,
	Input,
	Checkbox,
	Form,
	Dropdown,
	Message,
} from 'semantic-ui-react';
import Marquee from 'react-fast-marquee';
import useSWR from 'swr';

const fetcher = async (args: RequestInfo) => {
	const json = await fetch(args).then((res) => res.json());
	//console.dir(json);
	return json;
};

const SpotifyNavAlert = () => {
	const { data, error } = useSWR('/api/data/spotify', fetcher);
	switch (data?.isPlaying) {
		case true:
			return (
				<a target="_blank" rel="noreferrer" href={data?.songUrl}>
					<Marquee
						style={{
							color: 'white',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: 'green',
						}}
						gradient={false}
					>
						<Icon
							fitted
							name="spotify"
							size="big"
							style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem' }}
						/>
						{/* This container here should scroll it's contents from left to right */}
						{`Spotify - Michael is Listening to `}
						<div
							style={{
								marginLeft: `0.5rem`,
								marginRight: `0.5rem`,
								background: `url('${data?.albumImageUrl}') center / cover no-repeat`,
								height: '30px',
								aspectRatio: '1/1',
							}}
						/>
						{` ` +
							data?.title +
							` - ` +
							data?.artist +
							` - (Album: ` +
							data?.album +
							`)`}
					</Marquee>
				</a>
			);
		case false:
			return <></>;
		default:
			return <></>;
	}
};

export { SpotifyNavAlert };
