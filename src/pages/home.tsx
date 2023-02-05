import { Link } from 'react-scroll';
import { Header, Container, Button } from 'semantic-ui-react';
import Image from 'next/image';
import homepagePic from '../../public/landing2.jpg';

const Homepage = () => {
	return (
		<div
			id="home"
			style={{ width: '100vw', height: '100vh', position: 'relative' }}
		>
			<div
				style={{
					color: 'rgba(255,255,255,255)',
					zIndex: 5,
					position: 'relative',

					transform: 'translate(0%,150%)',
					textAlign: 'center',
				}}
			>
				<Container text>
					<Header
						inverted
						as="h1"
						content={`"I Like to Dance with Fire...`}
						style={{
							fontSize: '4em',
							fontWeight: 'normal',
							textShadow: '0 0 2px black',
							marginBottom: 0,
						}}
					/>
					<Header
						as="h2"
						content={`... and Build things for the Internet."`}
						inverted
						style={{
							fontSize: '1.7em',
							fontWeight: 'normal',
							marginTop: '1.5em',
						}}
					/>

					<Link
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						offset={0}
						duration={300}
					>
						<Button size="large" inverted>
							Learn More
						</Button>
					</Link>
				</Container>
			</div>

			<Image
				fill
				style={{ objectFit: 'cover' }}
				alt="Landing Page Photo"
				src={homepagePic}
			/>
		</div>
	);
};

export default Homepage;
