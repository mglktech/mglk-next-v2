import {
	Header,
	Button,
	Card,
	Container,
	Image,
	Icon,
	Grid,
	Rail,
	Segment,
	List,
	Label,
	Input,
	Form,
	Placeholder,
	Table,
	Dropdown,
	Select,
	Modal,
	Divider,
	Message,
} from 'semantic-ui-react';

const AboutPage = () => {
	return (
		<div id="about" style={{ width: '100vw' }}>
			<Segment
				inverted
				vertical
				style={{
					background: 'linear-gradient(#000,#1b1c1d)',
					padding: '5em 0em',
				}}
			>
				<Grid container stackable>
					<Grid.Row verticalAlign="middle">
						<Grid.Column
							width={8}
							style={{
								textAlign: 'center',
								lineHeight: '2.5rem',
								fontSize: '2.25rem',
								letterSpacing: '0.025rem',
							}}
						>
							<Header inverted>{`Hello,`}</Header>
							<Header inverted>
								{`I'm`} <b>Michael</b>
							</Header>
							<span>
								Welcome to <b>My Domain.</b>
							</span>
						</Grid.Column>
						<Grid.Column floated="right" width={8}>
							<Image
								bordered
								circular
								alt="about_photo"
								src="/about_photo_lg_unflip_bw.jpeg"
								style={{ padding: '1.5rem' }}
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={1}>
						<Grid.Column>
							<div
								className="tracking-wide text-center"
								style={{
									color: 'white',
									fontSize: '1.75rem',
									backgroundColor: 'rgba(0,0,0,0)',
									textAlign: 'center',
									letterSpacing: '0.025rem',
									lineHeight: '2.25rem',
								}}
							>
								I Created This Space to help me <b>Learn</b>
								{` `}and Showcase My Experience in <b>Web Development</b>
								<br /> <br />
								<div>
									I am a <b>Maker</b>
								</div>
								I <b>Like</b>
								{` `}to Invent.
							</div>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row stretched columns={2}>
						<Grid.Column color="blue">
							<List inverted>
								<List.Item>
									<List.Icon name="code" size="huge"></List.Icon>
									<List.Content>
										<List.Header as="h2">Ambitious Web Developer</List.Header>
										<List.Description>
											Self-Motivated, Self-Driven, 10+ Years of Experience
											working with HTML, CSS, JS, React, Node, Express, MongoDB,
											MySQL, and more.
										</List.Description>
									</List.Content>
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column color="orange">
							<List inverted>
								<List.Item>
									<List.Icon name="fire" size="huge"></List.Icon>
									<List.Content>
										<List.Header as="h2">
											Professional Fire Performer
										</List.Header>
										<List.Description>
											I have always had a strange fascination with burning
											things, What better way to harness this feeling than by
											taking it up as a profession? :)
										</List.Description>
									</List.Content>
								</List.Item>
							</List>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={16} color="violet">
							<List inverted>
								<List.Item>
									<List.Icon name="computer" size="huge"></List.Icon>
									<List.Content>
										<List.Header as="h2">
											Experienced Computer Hardware Technician
										</List.Header>
										<List.Description>
											Specialist in PC Hardware, Networking, and IT Support.
											Also proficient with <b>Internet of Things (IoT)450</b>{' '}
											devices.
										</List.Description>
									</List.Content>
								</List.Item>
							</List>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</div>
	);
};

export default AboutPage;
