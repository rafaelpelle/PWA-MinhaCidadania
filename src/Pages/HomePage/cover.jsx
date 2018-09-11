import React, { Component } from 'react'
import { Button, Container, Header, Icon, Responsive, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const isMobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
const segmentStyle = { marginTop: '0em', padding: '3em 1em' }
const subHeaderStyle = {
	fontSize: isMobile ? '1.2em' : '1.7em',
	fontWeight: 'bold',
	marginTop: isMobile ? '1em' : '2em',
	marginBottom: isMobile ? '3em' : '5em',
}
const headerStyle = {
	fontSize: '4em',
	fontWeight: 'bold',
	marginBottom: '0.5em',
	textTransform: 'uppercase'
}

class ContactCover extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {

		return (
			<Segment className='segment-image' basic inverted textAlign='center' style={ segmentStyle } >
				<Container >
					<Header
						as='h1'
						content='MINHA CIDADANIA'
						inverted
						style={ headerStyle }
					/>
					<Header
						content='Assessoria completa para o reconhecimento de cidadania italiana e portuguesa.'
						inverted
						style={ subHeaderStyle }
					/>
					<Button as={ Link } to='/contato' animated='fade' color='red' size='huge' >
						<Button.Content visible>Entre em contato</Button.Content>
						<Button.Content hidden>
							<Icon name='phone' />
						</Button.Content>
					</Button>
				</Container>
			</Segment>
		)
	}
}

export default ContactCover
