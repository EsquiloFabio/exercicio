import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";

export default class app extends Component{
  render() {
    return (
      <View style = {estilos.container}>
        {/*<Simples texto="Fabio" />*/}
        {/*<Frag titulo="Cadastro" 
        subTitulo="Tela de cadastro de Prooduto"  />*/}
        {/*<ParImpar numero = {10} />*/}
        <Familia>
          <Membro nome="Ana" sobrenome="Silva" />
          <Membro nome="Jose" sobrenome="Silva" />
        </Familia>
        
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

