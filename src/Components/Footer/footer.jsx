import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import { darkGrey } from "../../Utils/defaultColors";
import Map from '../Map/map'

const containerStyle = { marginTop: '2em', padding: '2em', backgroundColor: darkGrey }
const subHeaderStyle = { marginTop: '1.5em', fontSize: '1em' }
const lowerCase = { textTransform: 'none' }

export default class Footer extends Component {
	render() {
		return(
			<Grid style={containerStyle} stackable >
				<Grid.Column width={ 5 } floated='left' style={{ marginLeft: '7em' }} >
					<Map />
				</Grid.Column>
				<Grid.Column  width={ 6 } floated='right' verticalAlign='middle' >
					<Header as='h1' inverted content={'Onde estamos'} />
					<Header sub inverted content={'Rua General Bittencourt, 386 - Centro'} style={ subHeaderStyle } />
					<Header sub inverted content={'Florianópolis - SC - Brasil'} style={ subHeaderStyle } />
					<Header sub inverted content='TEL: (48) 99912-9455' style={ subHeaderStyle } />
					<Header sub inverted content={'E-MAIL: minhacidadania.contato@gmail.com'} style={{ ...subHeaderStyle, ...lowerCase }} />
				</Grid.Column>
			</Grid>
		)
	}
}