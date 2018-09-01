import React, { Component } from 'react'
import {Container, Header, Divider, Segment, Icon, Button} from 'semantic-ui-react'

const containerStyle = { padding: '5em 1em' }
const headerStyle = { fontSize: '2em', textTransform: 'uppercase' }
const fontStyle = { fontSize: '1.33em', fontWeight: '300' }
const marginBottom5Top5 = { marginBottom: '5em', marginTop: '5em' }
const buttonStyle = { marginBottom: '1em', marginTop: '2em', backgroundColor: '#009900'  }

class HomePageContent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Segment style={ containerStyle } vertical>
				<Container text textAlign='center'>
					<Header as='h3' content='Acompanhamento do início ao fim' style={ headerStyle } />
					<Header style={ fontStyle } textAlign='left' >
						Acompanhamos o processo desde o início, realizando pesquisas genealógicas, busca de documentos,
						montagem e agendamento do processo, tradução de documentos...
					</Header>
					<Divider style={ marginBottom5Top5 } />
					<Header as='h3' content='Documentos necessários' style={ headerStyle } />
					<Header style={ fontStyle } textAlign='left'>
						Nossa página ainda está em construção. Para saber todos os documentos necessários e outras
						informações detalhadas, entre em contato.
					</Header>
					<Button animated='fade' color='green' size='huge' style={ buttonStyle } >
						<Button.Content visible>Entre em contato</Button.Content>
						<Button.Content hidden>
							<Icon name='phone' />
						</Button.Content>
					</Button>
				</Container>
			</Segment>
		)
	}
}

export default HomePageContent
