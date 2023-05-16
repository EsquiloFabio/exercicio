import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import padrao from "../estilo/padrao";

export default (props: any) => {
    const [peso, setpeso] = useState('0');
    const [altura, setaltura] = useState('0.0');
    const [resultado, setresultado] = useState(0); 
    let pesov
    let alturav

    function calcular(){
        pesov = Number(peso)
        alturav = Number(altura)
        setresultado(pesov/(alturav*alturav))
    }
    return(
        <>
            <TextInput
                style={padrao.input}
                placeholder="Digite o peso(KG)"
                keyboardType="numeric"
                onChangeText={peso => setpeso(peso)}
            />
            <TextInput
                style={padrao.input}
                placeholder="Digite o altura(m)"
                keyboardType="numeric"
                onChangeText={altura => setaltura(altura)}
            />
            <Button
                title="Calcular"
                onPress={calcular}
            />
            <Text>IMC = {resultado}</Text>
        </>
    )

}