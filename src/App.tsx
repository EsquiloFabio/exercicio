import React, {Component} from "react";
import { View, Button, Text, StyleSheet, TextInput, Dimensions } from "react-native";
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
import CalculoIMC from "./componentes/CalculoIMC";
import DimensoesFixas from "./componentes/DimensoesFixas";
import Mega from "./componentes/MegaSena/Mega";
import Botau from "./componentes/Caalculadora/Botau";
import Display from "./componentes/Caalculadora/Display";

export default class app extends Component{
  state = {
    displayValue: '0'
  }
  clearDisplay = () => {
    this.setState({displayValue: '0'})
  }
  setDigit = (digito: any) =>{
    this.setState({displayValue: digito})
  }
  setOperation = (op: any) => {
    
  }
  render() {
             

        return (
      <View style={estilos.CALCULADORA}>
        <Display value={this.state.displayValue} /> 
       
        <View style={estilos.buttons}>
  <Botau label='AC' triple onClick={() => this.clearDisplay()} />
  <Botau label='/' Op onClick={this.setOperation} />
  <Botau label='7' onClick={this.setDigit}/>
  <Botau label='8' onClick={this.setDigit}/>
  <Botau label='9' onClick={this.setDigit}/>
  <Botau label='*' Op onClick={this.setOperation} />
  <Botau label='4' onClick={this.setDigit}/>
  <Botau label='5' onClick={this.setDigit}/>
  <Botau label='6' onClick={this.setDigit}/>
  <Botau label='-' Op onClick={this.setOperation}  />
  <Botau label='1' onClick={this.setDigit}/>
  <Botau label='2' onClick={this.setDigit}/>
  <Botau label='3' onClick={this.setDigit}/>
  <Botau label='+' Op onClick={this.setOperation}  />
  <Botau label='0' double onClick={this.setDigit}/>
  <Botau label='.' />
  
  <Botau label='=' Op onClick={() => this.setOperation('=')}  />
</View>
       
            {/*<View style = {estilos.container}>
        <Simples texto="Fabio" />
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
        <Contador valorInicial= {50} />
        <DigiteSeuNome />
        <CalculoIMC/>
        <DimensoesFixas/>
        <Mega qtdeNumeros={7}/>




      </View>*/}
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
  CALCULADORA:{
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

