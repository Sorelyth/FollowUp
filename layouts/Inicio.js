import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';

export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  buttonDiscipulo(){
    this.props.navigation.navigate('RegDiscipulo')
  }

  buttonMiembro(){
    this.props.navigation.navigate('RegMiembro')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.azulProfundoCru, styles.textTitle]}>¡Hola! ¿Hora de registrar a alquien nuevo? Adelante.</Text>
        <TouchableHighlight onPress={this.buttonDiscipulo} underlayColor="white">
          <View style={styles.buttonContainer}>
            <Text style={[styles.textButton]}>DISCIPULO</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.buttonMiembro} underlayColor="white">
          <View style={styles.buttonContainer}>
            <Text style={[styles.textButton]}>MIEMBRO</Text>
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
    fontSize: 20,
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
});
