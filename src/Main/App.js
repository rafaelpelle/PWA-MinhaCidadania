import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { history } from '../Utils/history'
import HomePage from '../Pages/HomePage/homePage'
import './App.css'


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Router history={ history }>
				<Container fluid style={ { height: '100%' } }>
					<Switch >
						<Route exact={ true } path='/' component={ HomePage } />
					</Switch>
				</Container>
			</Router>
		)
	}
}
const mapStateToProps = (state) => ({ })
const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
