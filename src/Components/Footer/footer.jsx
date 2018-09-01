import React from 'react'
import { Header, Grid, Responsive } from 'semantic-ui-react'
import { darkGrey } from "../../Utils/defaultColors";
import Map from '../Map/map'

const isMobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
const headerStyle = { marginBottom: '1em' }
const containerStyle = {
	marginTop: '2em',
	padding: isMobile ? '1em' : '2em',
	backgroundColor: darkGrey
}
const subHeaderStyle = {
	marginTop: isMobile ? '1em' : '1.5em',
	fontSize: '1em',
	textTransform: 'none'
}

export default class Footer extends React.Component {
	render() {
		return (
			<div>
				<DesktopFooter />
				<MobileFooter />
			</div>
		)
	}
}

const DesktopFooter = () => (
	<Responsive minWidth={Responsive.onlyTablet.minWidth} >
		<Grid style={containerStyle} stackable >
			<Grid.Column width={ 5 } floated='left' style={{ marginLeft: '7em' }} >
				<Map />
			</Grid.Column>
			<Grid.Column  width={ 6 } floated='right' verticalAlign='middle' >
				<Header as='h1' inverted content={'ONDE ESTAMOS'} />
				<Header sub inverted content={'RUA GENERAL BITTENCOURT, 386 - CENTRO'} style={ subHeaderStyle } />
				<Header sub inverted content={'FLORIANÓPOLIS - SC - BRASIL'} style={ subHeaderStyle } />
				<Header sub inverted content='TEL: (48) 99912-9455' style={ subHeaderStyle } />
				<Header sub inverted content={'E-MAIL: minhacidadania.contato@gmail.com'} style={ subHeaderStyle } />
			</Grid.Column>
		</Grid>
	</Responsive>
)

const MobileFooter = () => (
	<Responsive maxWidth={Responsive.onlyMobile.maxWidth} >
		<Grid columns={ 2}  stackable style={ containerStyle }  >
			<Grid.Column floated='right' verticalAlign='middle' >
				<Header as='h1' inverted content={'ONDE ESTAMOS'} textAlign='center' style={ headerStyle } />
				<Header sub inverted content={'Rua General Bittencourt, 386 - Centro'} style={ subHeaderStyle } />
				<Header sub inverted content={'Florianópolis - SC - Brasil'} style={ subHeaderStyle } />
				<Header sub inverted content='TEL: (48) 99912-9455' style={ subHeaderStyle } />
				<Header sub inverted content={'E-MAIL: minhacidadania.contato@gmail.com'} style={ subHeaderStyle } />
			</Grid.Column>
			<Grid.Column floated='left' style={{ marginLeft: '7em' }} >
				<Map />
			</Grid.Column>
		</Grid>
	</Responsive>
)
