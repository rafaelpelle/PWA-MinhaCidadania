import React, { Component } from 'react'
import { Button, Container, Header, Icon, Responsive, Segment } from 'semantic-ui-react'

const mobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
const segmentStyle = { marginTop: '0em', padding: '1em' }
const headerStyle = { fontSize: mobile ? '2em' : '4em', fontWeight: 'bold', marginBottom: 0, marginTop: '1em' }
const subHeaderStyle = { fontSize: mobile ? '1.2em' : '1.7em', fontWeight: 'bold', marginTop: '1em', marginBottom: '3em' }
const marginBottom1 = { marginBottom: '1em' }

class HomePageCover extends Component {
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
						content='Minha Cidadania'
						inverted
						style={ headerStyle }
					/>
					<Header
						content='Assesoria completa para o reconhecimento de cidadania italiana e portuguesa.'
						inverted
						style={ subHeaderStyle }
					/>
					<Button color='red' size='huge' style={ marginBottom1 }>
						Entre em contato
						<Icon name='right arrow' />
					</Button>
				</Container>
			</Segment>
		)
	}
}

export default HomePageCover
