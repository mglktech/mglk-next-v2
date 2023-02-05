import { Menu, Header, Dropdown } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { SpotifyNavAlert } from '@/components/spotify';
const NavMenu_md = () => {
	return (
		<Menu
			inverted
			style={{
				background: 'linear-gradient(#1b1c1d,#000)',
				overflow: 'hidden',
				margin: 0,
				borderRadius: 0,
			}}
		>
			<Menu.Item>
				<Header
					inverted
					style={{
						fontFamily: 'Segoe UI',
						fontWeight: '600',
					}}
					as="h2"
				>
					mglk.tech
				</Header>
			</Menu.Item>
			<Link
				activeClass="active"
				to="home"
				spy={true}
				smooth={true}
				offset={0}
				duration={300}
			>
				<Menu.Item className="link" as="li">
					Home
				</Menu.Item>
			</Link>
			<Link
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				offset={-50}
				duration={300}
			>
				<Menu.Item className="link" as="li">
					About
				</Menu.Item>
			</Link>
			<Link
				activeClass="active"
				to="media"
				spy={true}
				smooth={true}
				offset={-50}
				duration={300}
			>
				<Menu.Item className="link" as="li">
					Media
				</Menu.Item>
			</Link>
		</Menu>
	);
};

const NavMenu_sm = () => {
	return (
		<Menu
			inverted
			style={{
				background: 'linear-gradient(#1b1c1d,#000)',

				// overflow: 'hidden',

				margin: 0,

				borderRadius: 0,
			}}
		>
			<Menu.Item>
				<Header
					inverted
					style={{ fontFamily: 'Segoe UI', fontWeight: '600' }}
					as="h2"
				>
					mglk.tech
				</Header>
			</Menu.Item>
			<Menu.Item>
				<Dropdown icon="sidebar">
					<Dropdown.Menu>
						<Dropdown.Item>
							<Link
								style={{ color: 'black' }}
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={0}
								duration={300}
							>
								Home
							</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link
								style={{ color: 'black' }}
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-50}
								duration={300}
							>
								About
							</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link
								style={{ color: 'black' }}
								activeClass="active"
								to="media"
								spy={true}
								smooth={true}
								offset={-50}
								duration={300}
							>
								Media
							</Link>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Menu.Item>
		</Menu>
	);
};

export const NavMenu = () => {
	const [screenWidth, setScreenWidth] = useState<number>(0);

	useEffect(() => {
		const updateScreen = () => setScreenWidth(window.innerWidth);
		updateScreen();
		window.addEventListener('resize', updateScreen);
		return () => window.removeEventListener('resize', updateScreen);
	}, []);

	const isMobile = screenWidth < 768;
	return (
		<div style={{ position: 'fixed', top: 0, zIndex: 10, width: '100%' }}>
			{isMobile ? <NavMenu_sm /> : <NavMenu_md />}
			<SpotifyNavAlert />
		</div>
	);
};
