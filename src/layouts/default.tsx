import { ReactNode } from 'react';
import { Grid, Menu, Segment, Header, Icon } from 'semantic-ui-react';
import { NavMenu } from '@/components/nav/menu';
import { SpotifyNavAlert } from '@/components/spotify';
const PageFooter = () => (
	<Menu
		size="large"
		inverted
		style={{ margin: 0, borderRadius: 0 }}>
		<Menu.Menu
			icon="labeled"
			position="right">
			<Menu.Item size="mini">© 2023 mglk.tech™</Menu.Item>
			<Menu.Item
				as="a"
				onClick={() => window.open('https://open.spotify.com/user/113348091')}>
				<Icon name="spotify" />
			</Menu.Item>
			<Menu.Item
				as="a"
				onClick={() => window.open('https://discord.gg/bcUZnhdQPY')}>
				<Icon name="discord" />
			</Menu.Item>
			<Menu.Item
				as="a"
				onClick={() => window.open('https://github.com/mglktech/')}>
				<Icon name="github" />
			</Menu.Item>
			<Menu.Item
				as="a"
				onClick={() => window.open('https://www.facebook.com/mikeykendallxd')}>
				<Icon name="facebook" />
			</Menu.Item>
		</Menu.Menu>
	</Menu>
);

const DefaultLayout = ({ children }: { children: ReactNode }) => {
	// Return a 100% height container with all props
	return (
		<div
			style={{
				position: 'absolute',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<NavMenu />

			<div
				style={{
					position: 'relative',
					width: '100%',
					flex: '1 0 auto',
				}}>
				{children}
			</div>
			<div style={{ flexShrink: '0' }}>
				<PageFooter />
			</div>
		</div>
	);
};

export default DefaultLayout;
