import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import padrao from '../../estilo/padrao';

export default props => {
    return (
        <View style={displayNumero.Container}>
            <Text key={1} style={[padrao.txtG, padrao.center, displayNumero.Numero]}>  
                {props.num}
            </Text>
        </View>        
    )
}

const displayNumero = StyleSheet.create({
    Container:{
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Numero: {
        color: '#FFF'
    }
})