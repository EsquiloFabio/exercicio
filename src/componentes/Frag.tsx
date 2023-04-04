import React from "react";
import { View, Text } from "react-native";
import padrao from "../estilo/padrao";

export default (props: any) => (
    <>
        <Text style={padrao.txtG} > {props.titulo} </Text>
        <Text>{props.subTitulo} </Text>

    </>
)