import { combineReducers } from 'redux'
import RootReducer from './rootReducer'

const rootReducer = combineReducers ({
	root: RootReducer
})

export default rootReducer
