import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import firebase from 'react-native-firebase';



export default class FormSignUp extends Component {

  state = { email: '', password: '', errorMessage: null }

  signUpButtonPress = () =>{
    firebase.analytics().logEvent('SignUp')
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    firebase.analytics().logEvent('openAppSignUp');
    return (
      <View style={styles.container}>
        <Image style={{marginBottom:50, width:70, height:70}} source={require('./asset/icon-app.png')} />
          {/* <TextInput 
            style={styles.textInput}
            placeholder='Nama'
            placeholderTextColor='#ffffff'
            onChangeText={(nama)=>this.state({nama})}
          /> */}
          {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TextInput 
            style={styles.textInput}
            placeholder='Email'
            autoCapitalize="none"
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
        
        <TouchableOpacity style={styles.buttonStyle} onPress={this.signUpButtonPress}>
          <Text style={styles.textSignup}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
        <Text style={styles.instructions}>Have  account? Login</Text>
        </TouchableOpacity>
        
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
