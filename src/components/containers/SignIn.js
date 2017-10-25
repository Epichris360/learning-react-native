import React, { Component }                  from 'react'
import { connect }                           from 'react-redux'
import {  StyleSheet, Text,
    KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, FormLabel, 
    FormInput, FormValidationMessage }       from 'react-native-elements'
import actions                               from '../../actions'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'', password:''
        }
    }
    redirectTo(route){
        this.props.history.push(`${route}`)
    }
    signin(){
        const { username, password } = this.state
        const user = {username, password}

        this.props.signin(user)
        .then(data => {
            console.log('data data!!!!',data)
            return data
        })
        .catch(err => {
            console.log('err',err.message)
        })
    }
    render(){
        return(
            <View style={styles.container} >
                <Text style={styles.text}>SignIn</Text>

                <FormLabel>username:</FormLabel>
                <FormInput keyboardType="email-address" containerStyle={styles.textInput} onChangeText = { text => this.setState({username: text})} />
                <FormValidationMessage>This Field is Required!</FormValidationMessage>

                <FormLabel style={{marginTop:15}}>Password:</FormLabel>
                <FormInput containerStyle={styles.textInput} secureTextEntry={true} onChangeText = { text => this.setState({password: text})} />
                <FormValidationMessage>This Field is Required!</FormValidationMessage>
                
                <Button containerViewStyle={{marginTop:20, marginBottom:20, width:250}} 
                        onPress={ () => this.signin() } 
                        title='Sign In' />

                <Button containerViewStyle={{marginTop:20, marginBottom:20, width:250}} 
                        onPress={ () => console.log('this.props.user', this.props.user) } 
                        title='this.props.user' />
            </View>
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
    text:{
        fontSize: 30,
        marginBottom:15
    },
    textInput: {
        width:250
    }
})

const stateToProps = state => {
    const { user } = state
    return{
        user
    }
}

const dispatchToProps = dispatch => {
    return{
        signin: user => dispatch( actions.loginUser(user) )
    }
}


export default connect(stateToProps,dispatchToProps)(SignIn)