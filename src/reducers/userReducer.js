import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/
const initialState = {
	
}
export default (state = {}, action) => {
	console.log('hi from the reducer')
	switch (action.type) {

		case constants.CURRENT_USER_RECEIVED:
			console.log('reducer',action.data)
			return action.data.user

		case constants.USER_CREATED:
			return action.data

		case constants.LOGOUT_USER:
			return {}

		default:
			return state
	}
}