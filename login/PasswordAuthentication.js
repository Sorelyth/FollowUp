import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Image } from 'react-native';
import logo from './assets/images/icon.png';

export default class PasswordAuthentication extends React.Component {


  onPressButton(){
    Alert.alert('Nueva pagina')
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <Text style={[styles.azulProfundoCru, styles.textTitle]}>Finalicemos con el acceso.</Text>
        <TextInput style={[styles.grisCru, styles.input]}
          placeholder= "Ingresa una contraseña"
        />
        <TextInput style={[styles.grisCru, styles.input]}
          placeholder= "Confirma la nueva contraseña"
        />
        <Text style={[styles.azulProfundoCru, styles.textBody]}>Recuerda que ahora esta será tu contraseña para el acceso.</Text>
        <TouchableHighlight onPress={this.onPressButton} underlayColor="white">
          <View style={styles.buttonContainer}>
            <Text style={[styles.textButton]}>INGRESA</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 40,
    backgroundColor: '#007398',
    borderRadius: 10,
    width: 200
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    margin: 20
  },
  textBody: {
    fontSize: 25,
    padding: 20
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10
  },
  grisCru: {
    color: '#666062'
  },
  oroCru: {
    color: '#f9b625'
  },
  naranjaCru: {
    color: '#dd7d1b'
  },
  azulProfundoCru: {
    color: '#007398'
  },
  azulBrillanteCru: {
    color: '#3eb1c8'
  },
  logo: {
    width: 100,
    height: 100
  },
  input: {
    fontSize: 25,
    marginBottom: 30
  },
});
