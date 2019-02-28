import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, TouchableHighlight, Alert, Picker } from 'react-native';

export default class RegistroDiscipulo extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(){
    super();
    this.state={
      PickerFase:'',
      PickerComponente:'',
      PickerEstado:''
    }
  }

  onPressButton(){
    Alert.alert('¡Registro exitoso!'),
    this.props.navigation.navigate('Inicio')
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <Text style={[styles.azulProfundoCru, styles.textTitle]}>Nuevo registro</Text>
          <TextInput style={[styles.grisCru, styles.input]}
            placeholder= "Nombre Completo"
          />
          <TextInput style={[styles.grisCru, styles.input]}
            placeholder= "Correo"
          />
          <TextInput style={[styles.grisCru, styles.input]}
            placeholder= "Edad"
          />
          <TextInput style={[styles.grisCru, styles.input]}
            placeholder= "Cédula"
          />
          <TextInput style={[styles.grisCru, styles.input]}
            placeholder= "País"
          />
          <TextInput style={[styles.grisCru, styles.input]}
            placeholder= "Ciudad"
          />
          <Text style={[styles.grisCru, styles.textBody]}>Fase en la que se encuentra</Text>
          <Picker
            selectedValue={this.state.PickerFase}
            style={styles.picker, styles.grisCru}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerFase: itemValue})}>
            <Picker.Item label="Amigo" value="amigo" />
            <Picker.Item label="Creyente en crecimiento" value="creyentecrec" />
            <Picker.Item label="Discipulo comprometido" value="discipulocomp" />
            <Picker.Item label="Discipulo multiplicador" value="discipulomult" />
          </Picker>
          <Text style={[styles.grisCru, styles.textBody]}>Componente</Text>
          <Picker
            selectedValue={this.state.PickerComponente}
            style={styles.picker, styles.grisCru}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerComponente: itemValue})}>
            <Picker.Item label="Movimiento Dirigido por Estudiantes" value="mde" />
            <Picker.Item label="Student Venture" value="studentven" />
            <Picker.Item label="Atletas en acción" value="atletas" />
            <Picker.Item label="Leader Impact" value="leader" />
            <Picker.Item label="Estrategias Digitales" value="estrategiasdig" />
            <Picker.Item label="Movimiento Global de Iglesias" value="mgi" />
            <Picker.Item label="Vida en Familia" value="familia" />
            <Picker.Item label="Mujeres de hoy" value="mujeres" />
          </Picker>
          <Text style={[styles.grisCru, styles.textBody]}>Estado actual en Cru</Text>
          <Picker
            selectedValue={this.state.PickerEstado}
            style={styles.picker, styles.grisCru}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerEstado: itemValue})}>
            <Picker.Item label="Activo" value="activo" />
            <Picker.Item label="Inactivo" value="inactivo" />
          </Picker>
          <TouchableHighlight onPress={this.onPressButton} underlayColor="white" style={{alignItems:'center'}}>
            <View style={styles.buttonContainer}>
              <Text style={[styles.textButton]}>GUARDAR</Text>
            </View>
          </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: '#007398',
    borderRadius: 10,
    width: 200
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 20
  },
  textBody: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
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
  input: {
    fontSize: 20,
    padding: 10
  },
  picker: {
    height: 50,
    width: 100
  },
});
