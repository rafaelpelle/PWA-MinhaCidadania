const INITIAL_STATE = {
	author: 'Rafael Pelle',
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOGIN_MODAL_OPENED':
			return { ...state, loginModalIsOpen: true }
		default:
			return state
	}
}