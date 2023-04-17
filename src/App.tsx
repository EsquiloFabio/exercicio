import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";
import UsuarioLogado from "./componentes/UsuarioLogado";
import Botao from "./componentes/Botao";
import contador from "./componentes/contador";
import Contador from "./componentes/contador";
import DigiteSeuNome from "./componentes/DigiteSeuNome";

export default class app extends Component{


  render() {

    
    return (
      <View style = {estilos.container}>
        {/*<Simples texto="Fabio" />
        <Frag titulo="Cadastro" 
        subTitulo="Tela de cadastro de Prooduto"  />
        <ParImpar numero = {10} />

        <Familia>
          <Membro nome="Ana" sobrenome="Silva" />
          <Membro nome="Jose" sobrenome="Silva" />
        </Familia>
        <UsuarioLogado usuario={ {nome:'Fabio', email:'fgg15@email.com'}} />
        <UsuarioLogado usuario={{nome:'Henrique'}} />
        <UsuarioLogado usuario={{email:'hh23@email.com'}}/>
        <UsuarioLogado usuario={ null} />
        <UsuarioLogado usuario={{}} />
        <Contador valorInicial= {50} />*/}
        <DigiteSeuNome />


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

