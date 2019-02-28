import React from 'react';
import { createStackNavigator } from 'react-navigation';

import NameAuthentication from './login/NameAuthentication';
import IdAuthentication from './login/IdAuthentication';
import PasswordAuthentication from './login/PasswordAuthentication';
import RegistroMiembro from './layouts/RegistroMiembro';
import RegistroDiscipulo from './layouts/RegistroDiscipulo';
import InicioScreen from './layouts/InicioScreen';

export default class App extends React.Component {
  render(){
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator ({
  LoginName: NameAuthentication,
  LoginId: IdAuthentication,
  LoginPass: PasswordAuthentication,
  Inicio: InicioScreen,
  RegMiembro: RegistroMiembro,
  RegDiscipulo: RegistroDiscipulo
});
