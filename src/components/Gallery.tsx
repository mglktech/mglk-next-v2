import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import useSWR from 'swr';
import { Grid, Divider, Header, Segment, Container } from 'semantic-ui-react';

const fetcher = async (args: RequestInfo) => {
	const json = await fetch(args).then((res) => res.json());
	//console.dir(json);
	return json;
};

const ImagesGallery = () => {
	const { data, error } = useSWR('/api/data/photos', fetcher);

	return data ? (
		<Grid>
			<Grid.Row>
				<Grid.Column width={16}>
					<Segment vertical inverted basic>
						<Container>
							<Header inverted as="h2">
								Some photos from my Google Album
							</Header>
							<Divider />
							<ImageGallery
								autoPlay={true}
								showPlayButton={true}
								showFullscreenButton={true}
								disableSwipe={false}
								showThumbnails={false}
								items={data}
								slideInterval={10000}
								slideDuration={400}
							/>
						</Container>
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	) : null;
};
export default ImagesGallery;
