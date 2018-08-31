import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'
import Map from './map'

const containerStyle = {
	marginTop: '2em',
	padding: '2em',
	backgroundColor: '#1b1c1d'
}

export default class Footer extends Component {
	render() {
		return(
			<Grid style={containerStyle} >
				<Grid.Column width={ 5 } floated='left' >
					<Map />
				</Grid.Column>
				<Grid.Column  width={ 6 } floated='right' verticalAlign='middle' >
					<Header as='h2' inverted content={'Onde estamos'} />
					<Header sub inverted content={'Rua General Bittencourt, 386 - Centro'} />
					<Header sub inverted content={'Florianópolis - SC - Brasil'} />
					<Header sub inverted content={'Tel: (48)1234-5678'} />
					<Header sub inverted content={'E-mail: minhacidadania.contato@gmail.com'} />

				</Grid.Column>
			</Grid>
		)
	}
}