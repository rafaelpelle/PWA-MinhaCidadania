import React, { Component } from 'react'
import { Container, Header, Responsive, Segment } from 'semantic-ui-react'

const isMobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
const segmentStyle = { marginTop: '0em', padding: '1em' }
const headerStyle = {
	fontSize: isMobile ? '2.5em' : '4em',
	fontWeight: 'bold',
	marginBottom: isMobile ? '2em' : '3em',
	marginTop: '1em'
}

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
						content='Entre em Contato'
						inverted
						style={ headerStyle }
					/>
				</Container>
			</Segment>
		)
	}
}

export default HomePageCover
