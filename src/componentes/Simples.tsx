import React from "react";
import { Text } from "react-native";
import padrao from "../estilo/padrao";


export default (props: any) =>
    <Text style={padrao.ex} > Arrow1 : {props.texto}</Text>

