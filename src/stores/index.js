import { createStore, applyMiddleware, 
	combineReducers, compose } from 'redux'
import thunk 				   from 'redux-thunk'
import { userReducer } 		   from '../reducers'

var store 
export default {
	configure: (initialState) => { // initialState can be null
		
		const reducers = combineReducers({ // insert reducers here
			user: userReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
				initialState,
				applyMiddleware(thunk)
			)
			if (module.hot) {
				module.hot.accept(() => {
					const nextRootReducer = reducers
					store.replaceReducer(nextRootReducer)
				})
			}
			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)
		if (module.hot) {
			module.hot.accept(() => {
				const nextRootReducer = reducers
				store.replaceReducer(nextRootReducer)
			})
		}
		return store
	},

	currentStore: () => {
		return store
	}
}