import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import mapImage from '../../assets/images/map.png'

const mapURL = 'https://www.google.com.br/maps/place/R.+Gen.+Bittencourt,+386+-+Centro,+Florian%C3%B3polis+-+SC,+88020-100/@-27.5969192,-48.5474544,17z/data=!3m1!4b1!4m5!3m4!1s0x9527383a467cadf9:0xb0c292af34032285!8m2!3d-27.5969192!4d-48.5452604'

export default class Map extends Component {
	render() {
		return(
			<Image
				as='a'
				href={mapURL}
				target='_blank'
				src={mapImage}
				size='large'
				centered
				circular
			/>
		)
	}
}