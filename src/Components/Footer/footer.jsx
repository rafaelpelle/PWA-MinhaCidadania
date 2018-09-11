import React from 'react'
import { Header, Grid, Responsive } from 'semantic-ui-react'
import { darkGrey, white } from '../../Utils/defaultColors'
import Map from '../Map/map'
import { history } from '../../Utils/history'
import { contactHeader, contactAddress, contactCity, contactEmail, contactPhone, contactWhatsApp } from '../../Utils/contactInfo'

const isMobile = window.innerWidth <= Responsive.onlyMobile.maxWidth
const headerStyle = { marginBottom: '1.5em' }
const subHeaderStyle = { marginTop: isMobile ? '1em' : '1.5em', fontSize: '1em', textTransform: 'none' }

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
						<Header as='h1' inverted={ isInverted } content={contactHeader} style={ headerStyle } />
						<Header sub inverted={ isInverted } content={contactAddress} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={contactCity} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={contactEmail} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={contactPhone} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={contactWhatsApp} style={ subHeaderStyle } />
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
						<Header as='h1' inverted={ isInverted } content={contactHeader} textAlign='center' style={ headerStyle } />
						<Header sub inverted={ isInverted } content={contactAddress} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={contactCity} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={contactEmail} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={contactPhone} style={ subHeaderStyle } />
						<Header sub inverted={ isInverted } content={contactWhatsApp} style={ subHeaderStyle } />
					</Grid.Column>
					<Grid.Column floated='left' style={{ marginLeft: '7em' }} >
						<Map />
					</Grid.Column>
				</Grid>
			</Responsive>
		)
	}
}
