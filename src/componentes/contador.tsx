import React, { useState } from "react";
import { Text, Button } from "react-native";
import padrao from "../estilo/padrao";


export default (props: any) => {

    let [numero, useNumero] = useState(props.valorInicial)

    const somar = () => useNumero(numero++)
    const diminuir = () => useNumero(numero--)

    function executar() {
        console.warn(numero)
    }

    return(
        <>
            <Text style={padrao.txtG} > {numero} </Text>
            <Button title="+" onPress={somar} />
            <Button title="-" onPress={diminuir} />
            
        </>
    )
    
}