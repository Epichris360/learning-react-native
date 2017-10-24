import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text,KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import actions from '../../actions'
import { Link } from 'react-router-native'

class SignUp extends Component{
    constructor(props){
		super(props)
		this.state = {
			firstName:'', lastName:'', username:'', password:'',passwordConfirm:'', email:'', sent:false
		}
    }
    redirectTo(route){
        this.props.history.push(`${route}`)
    }
	submiter(){
		const { firstName, lastName, username, password, passwordConfirm, email } = this.state
		if( password == passwordConfirm ){
			const user = { firstName, lastName ,username,password,email }
            this.props.signUp(user)
            .then( data => {
                console.log('data',data)
            })
		}else{
			console.log('error')
		}
	}
    render(){
        return(
            <ScrollView>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <Text style={styles.h1}>Sign Up</Text>
                    {
                        this.state.sent ? <Text>Good to Go!</Text> : <Text>Not Signed Up</Text>
                    }
                    <FormLabel>First Name:</FormLabel>
                    <FormInput containerStyle={styles.textInput} onChangeText = { text => this.setState({firstName: text})} />
                    <FormValidationMessage>This Field is Required!</FormValidationMessage>

                    <FormLabel>Last Name:</FormLabel>
                    <FormInput containerStyle={styles.textInput} onChangeText = { text => this.setState({lastName: text})} />
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
                    <Button onPress={() => this.redirectTo('/')} title="Back" />
                </KeyboardAvoidingView>
            </ScrollView>
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

const dispatchToProps = dispatch => {
    return{
        signUp: params => dispatch(actions.register(params))
    }
}

export default connect(null,dispatchToProps)(SignUp)