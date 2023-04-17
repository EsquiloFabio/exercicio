import React, {useState} from "react";
import { Text, View,TextInput } from "react-native";
import padrao from "../estilo/padrao";

export default (props: any) => {

    let [nome, setNome] = useState('Teste')

    return(
        <>
            <Text> {nome}</Text>
            <TextInput 
                placeholder="Digite seu nome"
                style={padrao.input}
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </>
    )
}