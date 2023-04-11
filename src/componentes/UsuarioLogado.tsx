import React from "react";
import { Text } from "react-native";
import padrao from "../estilo/padrao";
import If from "./If";

export default (props: any) =>{
    const usuario = props.usuario || {}

    return (
        <>
            <If valido={usuario  && usuario.nome && usuario.email} >
                    
                <Text style={padrao.txtG}>
                    Usuário Logado
                </Text>
                <Text style={padrao.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
        
            </If>
        </>
    )

}