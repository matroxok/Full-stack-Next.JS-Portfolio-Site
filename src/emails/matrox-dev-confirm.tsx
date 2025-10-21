import { Body, Column, Container, Head, Heading, Html, Img, Preview, Row, Section, Text } from '@react-email/components'

interface YelpRecentLoginEmailProps {
	userFirstName: string
	userEmail: string
	messageDate: string
	userMessage: string
}

const baseUrl = process.env.MATROX_DEV_URL ? `https://${process.env.MATROX_DEV_URL}` : ''

export const YelpRecentLoginEmail = ({
	userFirstName,
	userEmail,
	messageDate,
	userMessage,
}: YelpRecentLoginEmailProps) => {
	const date = new Date().getFullYear()

	return (
		<Html>
			<Head />
			<Body style={main}>
				<Preview>Yelp recent login</Preview>
				<Container>
					<Section style={logo_section}>
						<Img style={logo} src={`${baseUrl}/static/email_logo.png`} alt="matrox.dev logo" />
					</Section>

					<Section style={content}>
						<Row>
							<Img style={image} width={620} src={`${baseUrl}/static/email_hero.png`} alt="Yelp header illustration" />
						</Row>

						<Row style={{ ...boxInfos, paddingBottom: '0' }}>
							<Column>
								<Heading
									style={{
										fontSize: 32,
										fontWeight: 'bold',
										textAlign: 'start',
									}}>
									Hi {userFirstName},
								</Heading>

								<Text style={paragraph}>Thanks for your message!</Text>
								<Text style={{ ...paragraph, marginTop: -5 }}>I&apos;ll get back to you as soon as possible :)</Text>
								<Text style={{ ...paragraph, marginTop: 50, fontWeight: 'bold', textAlign: 'start' }}>
									Your message details:
								</Text>
								<Text style={{ ...paragraph, marginTop: 5, textAlign: 'start' }}>
									Date: <span style={{ color: 'gray' }}>{messageDate}</span>{' '}
								</Text>
								<Text style={{ ...paragraph, marginTop: 5, textAlign: 'start' }}>
									Email: <span style={{ color: 'gray' }}>{userEmail}</span>{' '}
								</Text>
								<Text style={{ ...paragraph, marginTop: 5, textAlign: 'start' }}>
									Message: <br /> <span style={{ color: 'gray' }}>{userMessage}</span>{' '}
								</Text>
							</Column>
						</Row>
					</Section>
					<Text
						style={{
							marginTop: 20,
							textAlign: 'center',
							fontSize: 12,
							color: 'rgb(0,0,0, 0.7)',
						}}>
						© {date} | matrox.dev ™
					</Text>
				</Container>
			</Body>
		</Html>
	)
}

YelpRecentLoginEmail.PreviewProps = {
	userFirstName: 'Mateusz',
	userEmail: 'mateusz.kozera@matrox.dev',
	messageDate: new Date().toISOString().replace('T', ' ').split('.')[0],
	userMessage:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam eaque in quam modi neque, cumque sapiente quibusdam id impedit dolorem accusamus corrupti adipisci ea illo dolores ad? Unde commodi, perspiciatis maxime facere harum sapiente quia blanditiis fuga temporibus debitis est eveniet. Dignissimos amet officiis exercitationem voluptate! Quidem sint laborum temporibus accusantium nemo, vero, optio omnis doloremque cum possimus error odio aspernatur excepturi. Obcaecati.',
} as YelpRecentLoginEmailProps

export default YelpRecentLoginEmail

const main = {
	backgroundColor: '#fff',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const paragraph = {
	fontSize: 16,
}

const logo_section = {
	padding: '30px 20px',
}

const logo = {
	width: '30%',
}

const content = {
	border: '1px solid rgb(0,0,0, 0.1)',
	borderRadius: '3px',
	overflow: 'hidden',
}

const image = {
	maxWidth: '100%',
}

const boxInfos = {
	padding: '20px',
}
