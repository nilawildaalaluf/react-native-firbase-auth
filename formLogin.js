import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import firebase from 'react-native-firebase';


export default class FormLogin extends Component {
  state = { email: '', password: '', errorMessage: null }
  loginPress = () =>{
    firebase.analytics().logEvent('pressLogin')
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    firebase.analytics().logEvent('openAppLogin');
    return (
      <View style={styles.container}>
        <Image style={{marginBottom:50, width:70, height:70}} source={require('./asset/icon-app.png')} />
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TextInput 
            style={styles.textInput}
            placeholder='Email'
            utoCapitalize="none"
            placeholderTextColor='#ffffff'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput 
            secureTextEntry
            style={[styles.textInput]}
            placeholder='Password'
            placeholderTextColor='#ffffff'
            onChangeText={password =>this.setState({password})}
            value={this.state.password}
          />
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.loginPress}>
          <Text style={styles.textSignup}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>Don’t have account? Register</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ABC9C',
    flexDirection: 'column'
  },
  textInput:{
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    color:'#ffffff',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10,
    width:350
  },
  buttonStyle:{
    backgroundColor:'#ffffff',
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,
    width:350
  },
  textSignup: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color:'#1ABC9C'
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
    marginTop:10
  },
});
