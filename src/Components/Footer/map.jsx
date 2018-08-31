import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import mapImage from '../../assets/images/map.png'

export default class Map extends Component {
	render() {
		return(
			<Image src={mapImage} size='large' centered circular />
		)
	}
}