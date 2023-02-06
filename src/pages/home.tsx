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
					top: '50vh',
					//transform: 'translate(0%,125%)',
					textAlign: 'center',
				}}
			>
				<Container>
					<Header
						inverted
						content={`"I Like to Dance with Fire...`}
						style={{
							fontSize: 'clamp(2rem, 3vw + 1rem, 8rem)',
							fontWeight: 'normal',
							textShadow: '0 0 10px black',
							marginBottom: 0,
						}}
					/>
					<Header
						content={`... and Build things for the Internet."`}
						inverted
						style={{
							fontSize: 'clamp(0.1rem, 1vw + 1rem, 5rem)',
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
				priority
				fill
				style={{ objectFit: 'cover' }}
				alt="Landing Page Photo"
				src={homepagePic}
			/>
		</div>
	);
};

export default Homepage;
