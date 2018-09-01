import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import HomePageCover from './cover'
import HomePageContent from './content'
import Footer from "../../Components/Footer/footer";

class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Container fluid >
				<HomePageCover />
				<HomePageContent />
				<Footer />
			</Container>
		)
	}
}

export default HomePage
