import React, { Component } from 'react'
import {   StyleSheet, Text,KeyboardAvoidingView, ScrollView, View } from 'react-native'
import { Button } from 'react-native-elements'

class MainScreen extends Component{
    constructor(props){
        super(props)
    }
    redirectTo(route){
        this.props.history.push(`${route}`)
    }
    render(){
        return(
            <View style={styles.container} >

                <Text style={styles.text} >Welcome to the App</Text>
                
                <View>
                    <Button  
                        backgroundColor="#ff0000"
                        containerViewStyle={styles.signin} 
                        onPress={ () => this.redirectTo('/signin') }
                        title="SignIn" />
                    <Button title="SignUp" 
                        containerViewStyle={styles.signup} 
                        backgroundColor='#ff0000'
                        onPress={ () => this.redirectTo('/signup') } />
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        marginBottom: 20,
        fontSize:30
    },
    signin:{
        marginBottom:30,
        width: 250
    },
    signup:{
        width: 250
    }
})

export default MainScreen