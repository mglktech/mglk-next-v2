import Head from 'next/head';
import DefaultLayout from '../layouts/default';
import Image from 'next/image';
import homepagePic from '../../public/landing2.jpg';

import { NavMenu } from '@/components/nav/menu';
import { Header, Container, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import Homepage from '@/pages/home';
import AboutPage from '@/pages/about';
import Gallery from '@/components/Gallery';

export default function Home() {
	return (
		<>
			<Head>
				<title>mglk.tech</title>
				<meta name="description" content="Michael's Domain" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="App">
				<DefaultLayout>
					<Homepage />
					<AboutPage />
					<div id="media">
						<Gallery />
					</div>
				</DefaultLayout>
			</main>
		</>
	);
}
