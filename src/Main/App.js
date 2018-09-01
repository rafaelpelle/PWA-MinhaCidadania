import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from '../Utils/history'
import ResponsiveContainer from '../Components/ResponsiveContainer/responsiveContainer'
import HomePage from '../Pages/HomePage/homePage'
import ContactPage from '../Pages/ContactPage/contactPage'
import './App.css'


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		history.listen((location, action) => {
			document.body.scrollTop = 0 // For Safari
			document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
		})
	}

	render() {
		return (
			<Router history={ history } >
				<ResponsiveContainer style={{ height: '100%', width: '100%' }} >
					<Switch >
						<Route exact={ true } path='/' component={ HomePage } />
						<Route exact={ true } path='/contato' component={ ContactPage } />
					</Switch>
				</ResponsiveContainer>
			</Router>
		)
	}
}
export default App
