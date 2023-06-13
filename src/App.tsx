import React, {Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./componentes/Menu/StackNavigator";
import { View, Button, Text, StyleSheet, TextInput, Dimensions } from "react-native";


export default class App extends Component {
  render() {
   return(
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );
  }
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  fonte: {
    fontSize: 50,
  },
  CALCULADORA:{
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

