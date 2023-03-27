import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";

export default class app extends Component{
  render() {
    return (
      <View style = {estilos.container}>
        <Simples/>
      </View>
    );
    
  };
  
};

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  fonte: {
    fontSize: 50,
  },
});

