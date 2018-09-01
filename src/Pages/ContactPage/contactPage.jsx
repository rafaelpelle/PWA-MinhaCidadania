import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ContactPageCover from './cover'
import ContactPageContent from './content'

class ContactPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Container fluid >
				<ContactPageCover />
				<ContactPageContent />
			</Container>
		)
	}
}

export default ContactPage
