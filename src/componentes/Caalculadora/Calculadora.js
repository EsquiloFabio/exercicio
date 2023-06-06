import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Botau from "./Botau";
import Display from "./Display";

const initialStete = {
    displayValue: '0',
    clearDisplay: false,
    op: null,
    Values: [0, 0],
    indice: 0,
}

export default class Calculadora extends Component {
    
    state = {... initialStete}

      clearDisplay = () => {
        this.setState({displayValue: '0'})
      }
      setDigit = digito =>{
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        if(digito === '.' && !clearDisplay && this.state.displayValue.includes('.')){
            return
        }
        const currentValue = clearDisplay ? '': this.state.displayValue
        const displayValue = currentValue + digito


        this.setState({displayValue, clearDisplay: false })

        if(digito !== '.'){
          const newValue = parseFloat(displayValue)
          const Values = [... this.state.Values]
          Values[this.state.indice] = newValue
          this.setState({Values})
        }
      }
      setOperation = op => {
        if(this.state.indice === 0 ){
          this.setState({op, indice: 1, clearDisplay: true})
        }else{
          const equals = op === '='
          const Values = [... this.state.Values]
          try{
            Values[0] = eval(`${Values[0]} ${this.state.op} ${Values[1]}`)
          }catch{
            Values[0] = this.state.Values[0]
          }

          Values[1] = 0
          this.setState({
            displayValue: `${Values[0]}`,
            op: equals ? null : op,
            clearDisplay: true,
            indice: equals ? 0: 1,
            Values,
          })

        }
        
      }   
        render(){
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
            <Botau label='.' onClick={this.setDigit}/>
            
            <Botau label='=' Op onClick={this.setOperation}  />
            </View>
            
            </View>
        )
    }   
}

const estilos = StyleSheet.create({
    CALCULADORA:{
        flex: 1,
      },
      buttons:{
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
});