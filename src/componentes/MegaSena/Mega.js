import React, {Component} from "react";
import { Button, Text, TextInput } from "react-native";
import padrao from "../../estilo/padrao";

export default class Mega extends Component{

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    constructor(props){
        super(props)
        
        
        this.alteraQtde = this.alteraQtde.bind(this)
        
    }
    alteraQtde = (qtde) => {
        this.setstate({qtdeNumeros: +qtde})
    }
    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60)+1
        return nums.incledes(novo) ? this.gerarNumerosNaoContido(nums) : novo
    }
    
    gerarNumeros = () =>{
        const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(n => [...n, this.gerarNumerosNaoContido(n)], [])
        .sort((a,b) => a-b)
        this.setState({numeros})
    }
    
    

    render(){
        return(
            <>
                <Text style={padrao.txtG}>
                    Gerador de Numero da Mega {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    placeholder="Qtde de números"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alteraQtde}
                    keyboardType='number-pad'
                    style={{borderBottomWidth: 1}}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(' - ')}

                </Text>
            </>
        )
    }
}