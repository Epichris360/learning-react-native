import React, { Component } from 'react'
import store from './stores'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { Button, PricingCard,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class Entrance extends Component{
	constructor(props){
		super(props)
		this.state = {
			name:'', last:''
		}
	}
	print(){
		const { name, last } = this.state
		console.log(`fullname: ${name} ${last}`)
	}
	render(){
		return(
			<Provider store={store.configure(null)}>
				<ScrollView >
					<View style={styles.container}>
						<Text>Sign Up</Text>
						<FormLabel>Name:</FormLabel>
						<FormInput onChangeText = { text => this.setState({name: text})} />
						<FormValidationMessage>This Field is Required!</FormValidationMessage>
					</View>
				</ScrollView>
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
  container: {
		marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})


export default Entrance