import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, TouchableHighlight, Alert, Picker } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      PickerCargo:'',
      PickerComponente:'',
      PickerNacional:'',
      PickerCiudad:'',
      PickerEstado:''
    }
  }

  onPressButton(){
    Alert.alert('¡Registro exitoso!')
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
          <Text style={[styles.grisCru, styles.textBody]}>Rol o Cargo</Text>
          <Picker
            selectedValue={this.state.PickerCargo}
            style={styles.picker, styles.grisCru}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerCargo: itemValue})}>
            <Picker.Item label="Lider de componente" value="lidercomp" />
            <Picker.Item label="Coordinador" value="coordinador" />
            <Picker.Item label="Misionero tiempo completo" value="misionerotc" />
            <Picker.Item label="Misionero medio tiempo" value="misioneromt" />
            <Picker.Item label="Misionero enviado" value="misioneroenv" />
            <Picker.Item label="Voluntario" value="voluntario" />
            <Picker.Item label="Asistente" value="asistente" />
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
          <Text style={[styles.grisCru, styles.textBody]}>Hace parte del liderazgo nacional</Text>
          <Picker
            selectedValue={this.state.PickerNacional}
            style={styles.picker, styles.grisCru}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerNacional: itemValue})}>
            <Picker.Item label="Si" value="si" />
            <Picker.Item label="No" value="no" />
          </Picker>
          <Text style={[styles.grisCru, styles.textBody]}>Hace parte del liderazgo de ciudad</Text>
          <Picker
            selectedValue={this.state.PickerCiudad}
            style={styles.picker, styles.grisCru}
            onValueChange={(itemValue, itemIndex) => this.setState({PickerCiudad: itemValue})}>
            <Picker.Item label="Si" value="si2" />
            <Picker.Item label="No" value="no2" />
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
