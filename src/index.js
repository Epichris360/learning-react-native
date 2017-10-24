import React, { Component } from 'react'
import store from './stores'
import { Provider } from 'react-redux'
import { SignUp, SignIn, MainScreen } from './components/containers'
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import { View } from 'react-native';


class Entrance extends Component{
	
	render(){
		return(
			<Provider store={store.configure(null)}>
				<NativeRouter>
					<Switch>
						<Route exact path="/" component={MainScreen}/>
						<Route path="/signin" component={SignIn}/>
						<Route path="/signup" component={SignUp}/>
					</Switch>
				</NativeRouter>
			</Provider>
		)
	}
}



export default Entrance