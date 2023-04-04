import React from "react";
import { Text } from "react-native";
import padrao from "../../estilo/padrao";

export default (props: any) =>(
    <Text style={padrao.txtG} >
        {props.nome} {props.sobrenome}
    </Text>
)
