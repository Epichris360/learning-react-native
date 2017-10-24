import React, { Component } from 'react'
import store from './stores'
import { Provider } from 'react-redux'
import { StyleSheet, Text,KeyboardAvoidingView, View, Image, ScrollView, TextInput } from 'react-native';
import { Button, PricingCard,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { TurboClient } from './utils'
import constants from './constants'
import turbo from 'turbo360'
const APP_ID = '59ef7d00faf4920012e2aa51'

class Entrance extends Component{
	constructor(props){
		super(props)
		this.state = {
			name:'', username:'', password:'',passwordConfirm:'', email:'', sent:false
		}
	}
	print(){
		const { name, last } = this.state
		console.log(`fullname: ${name} ${last}`)
	}
	submiter(){
		const { name, username, password, passwordConfirm, email } = this.state
		if( password == passwordConfirm ){
			const user = { name,username,password,email }
			turbo({site_id:APP_ID}).create('user', user)
			.then(data => console.log('data',data))
			.catch(err => console.log('err',err.message))
			this.setState({sent:true})
		}else{
			console.log('error')
		}

	}
	render(){
		return(
			<Provider store={store.configure(null)}>
				<ScrollView>
					<KeyboardAvoidingView behavior="padding" style={styles.container}>
						<Text style={styles.h1}>Sign Up</Text>
						{
							this.state.sent ? <Text>Good to Go!</Text> : <Text>Not Signed Up</Text>
						}
						<FormLabel>Name:</FormLabel>
						<FormInput containerStyle={styles.textInput} onChangeText = { text => this.setState({name: text})} />
						<FormValidationMessage>This Field is Required!</FormValidationMessage>

						<FormLabel>UserName:</FormLabel>
						<FormInput containerStyle={styles.textInput} onChangeText = { text => this.setState({username: text})} />
						<FormValidationMessage>This Field is Required!</FormValidationMessage>

						<FormLabel>Email:</FormLabel>
						<FormInput keyboardType="email-address" containerStyle={styles.textInput} onChangeText = { text => this.setState({email: text})} />
						<FormValidationMessage>This Field is Required!</FormValidationMessage>

						<FormLabel style={{marginTop:15}}>Password:</FormLabel>
						<FormInput containerStyle={styles.textInput} secureTextEntry={true} onChangeText = { text => this.setState({password: text})} />
						<FormValidationMessage>This Field is Required!</FormValidationMessage>

						<FormLabel style={{marginTop:15}}>Password Confirm:</FormLabel>
						<FormInput containerStyle={styles.textInput} secureTextEntry={true} onChangeText = { text => this.setState({passwordConfirm: text})} />
						<FormValidationMessage>This Field is Required!</FormValidationMessage>


						<Button containerViewStyle={{marginTop:20, marginBottom:20}} 
							onPress={ this.submiter.bind(this) } 
							title='Submit' />
					</KeyboardAvoidingView>
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
  },
  textInput: {
	width:250
  },
  h1:{
	  fontSize:30
  }
})


export default Entrance