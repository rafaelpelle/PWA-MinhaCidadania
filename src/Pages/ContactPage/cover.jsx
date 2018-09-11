import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

const segmentStyle = { marginTop: '0em', padding: '3em 1em' }
const headerStyle = {
	fontSize: '4em',
	fontWeight: 'bold',
	marginBottom: '0.5em',
	textTransform: 'uppercase'
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
						content='CONTATO'
						inverted
						style={ headerStyle }
					/>
				</Container>
			</Segment>
		)
	}
}

export default HomePageCover
