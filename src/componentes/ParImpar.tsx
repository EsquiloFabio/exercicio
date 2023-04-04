import React from "react";
import { Text } from "react-native";
import padrao from "../estilo/padrao";


function getParImpar(num: any){
    
    
    const resultado= num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={padrao.ex} >{resultado}</Text>
    /*if (num % 2 == 0) {
        return <Text style={padrao.ex} >Par</Text>
    }else{
        return <Text style={padrao.ex} >Impar</Text>
    }*/
}


export default (props: any) =>(
    <>
        {
            getParImpar(props.numero)

            /*prop.numero % 2 ==0
                ? <Text>Par</Text>
                : <Text>Impar</Text>*/
        }

    </>
)
