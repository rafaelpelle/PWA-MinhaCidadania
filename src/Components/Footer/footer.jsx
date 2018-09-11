import React from 'react'
import { Header, Grid, Responsive } from 'semantic-ui-react'
import { darkGrey, white } from '../../Utils/defaultColors'
import Map from '../Map/map'
import {history} from "../../Utils/history";

const isMobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
const subHeaderStyle = {
	marginTop: isMobile ? '1em' : '1.5em',
	fontSize: '1em',
	textTransform: 'none'
}
const headerStyle = { marginBottom: '1.5em' }

export default class Footer extends React.Component {
	render() {
		const location = history.location.pathname
		const inverted = location !== '/contato'
		const containerStyle = {
			marginTop: '2em',
			padding: isMobile ? '1em' : '2em',
			backgroundColor: inverted ? darkGrey : white
		}
		return (
			<div>
				<DesktopFooter isInverted={inverted} containerStyle={containerStyle} />
				<MobileFooter isInverted={inverted} containerStyle={containerStyle} />
			</div>
		)
	}
}

export class DesktopFooter extends React.Component {
	render() {
		const { isInverted, containerStyle } = this.props
		console.log(isInverted, containerStyle)
		return (
			<Responsive minWidth={Responsive.onlyTablet.minWidth} >
				<Grid style={containerStyle} stackable >
					<Grid.Column width={ 5 } floated='left' style={{ marginLeft: '7em' }} >
						<Map />
					</Grid.Column>
					<Grid.Column  width={ 6 } floated='right' verticalAlign='middle' >
						<Header as='h1' inverted={ isInverted } content='ONDE ESTAMOS' style={ headerStyle } />
						<Header sub inverted={ isInverted } content={'RUA GENERAL BITTENCOURT, 386 - CENTRO'} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={'FLORIANÓPOLIS - SC - BRASIL'} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={'E-MAIL: minhacidadania.contato@gmail.com'} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content='TEL: (48) 99912-9455' style={ subHeaderStyle } />
					</Grid.Column>
				</Grid>
			</Responsive>
		)
	}
}

export class MobileFooter extends React.Component {
	render() {
		const { isInverted, containerStyle } = this.props
		return (
			<Responsive maxWidth={Responsive.onlyMobile.maxWidth} >
				<Grid columns={ 2 }  stackable style={ containerStyle }  >
					<Grid.Column floated='right' verticalAlign='middle' >
						<Header as='h1' inverted={ isInverted } content={'ONDE ESTAMOS'} textAlign='center' style={ headerStyle } />
						<Header sub inverted={ isInverted } content={'Rua General Bittencourt, 386 - Centro'} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={'Florianópolis - SC - Brasil'} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content='TEL: (48) 99912-9455' style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={'E-MAIL: minhacidadania.contato@gmail.com'} style={ subHeaderStyle } />
					</Grid.Column>
					<Grid.Column floated='left' style={{ marginLeft: '7em' }} >
						<Map />
					</Grid.Column>
				</Grid>
			</Responsive>
		)
	}
}
