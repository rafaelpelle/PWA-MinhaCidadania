import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './Main/App';
import reducers from './Main/reducers'
import registerServiceWorker from './registerServiceWorker'
import './dist/semantic.min.css'

const devTools = (window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__()

export const store = (createStore)(reducers, devTools)
ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>
	, document.getElementById('root'))

registerServiceWorker()
