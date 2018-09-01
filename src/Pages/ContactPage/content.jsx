import React, { Component } from 'react'
import {Container, Header, Segment, Grid, Responsive} from 'semantic-ui-react'
import Map from '../../Components/Map/map'

const isMobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
const containerStyle = { padding: isMobile ? '2em 1em' : '5em 1em' }
const fontStyle = {
	fontSize: isMobile ? '1.33em' : '2em',
	fontWeight: isMobile ? 'bold' : 'bold',
	textTransform: 'uppercase'
}
const subHeaderStyle = {
	marginTop: isMobile ? '1em' : '1.5em',
	fontSize: '1em',
	textTransform: 'none'
}
const headerStyle = { marginBottom: '1.5em' }


class ContactContent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Segment style={ containerStyle } vertical>
				<Responsive minWidth={Responsive.onlyTablet.minWidth} >
					<Header
						as='h1'
						textAlign='center'
						content='Para mais informações detalhadas, entre em contato.'
						style={ {...fontStyle, marginBottom: isMobile ? '2em' : '4em'} }
					/>
				</Responsive>
				<Grid columns={ 2 } stackable verticalAlign='middle' >
					<Grid.Column textAlign='center' >
						<Container >
							<Header as='h1' content={'CONTATO'} style={ headerStyle } />
							<Header sub content={'RUA GENERAL BITTENCOURT, 386 - CENTRO'} style={ subHeaderStyle } />
							<Header sub content={'FLORIANÓPOLIS - SC - BRASIL'} style={ subHeaderStyle } />
							<Header sub content='TEL: (48) 99912-9455' style={ subHeaderStyle } />
							<Header sub content={'E-MAIL: minhacidadania.contato@gmail.com'} style={ subHeaderStyle } />
						</Container>
					</Grid.Column>
					<Grid.Column float='right' textAlign='center' >
						<Map />
					</Grid.Column>
				</Grid>
			</Segment>
		)
	}
}

export default ContactContent
