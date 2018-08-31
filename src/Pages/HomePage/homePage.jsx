import React, { Component } from 'react'
import { Button, Container, Header, Icon, Responsive, Segment } from 'semantic-ui-react'

const segmentStyle = { marginTop: '0em', padding: '1em' }

class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const mobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
		return (
			<Segment className='segment-image' basic inverted textAlign='center' style={ segmentStyle } >
				<Container >
					<Header
						as='h1'
						content='Minha cidadania'
						inverted
						style={{
							fontSize: mobile ? '2em' : '4em',
							fontWeight: 'bold',
							marginBottom: 0,
							marginTop: '1.5em',
						}}
					/>
					<Header
						as='h2'
						content='Assesoria completa para o reconhecimento de cidadania italiana e portuguesa.'
						inverted
						style={{
							fontSize: mobile ? '1.2em' : '1.5em',
							fontWeight: 'normal',
							marginTop: mobile ? '1em' : '1.5em',
							marginBottom: mobile ? '3em' : '5em',
						}}
					/>
					<Button color='red' size='huge' style={{ marginBottom: '2em' }}>
						Entre em contato
						<Icon name='right arrow' />
					</Button>
				</Container>
			</Segment>
		)
	}
}

export default HomePage
