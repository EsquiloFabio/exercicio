import React from "react";
import { View, Button } from "react-native";
import padrao from "../../estilo/padrao";

const Home = ({ navigation}) => {
    return(
        <View style={padrao.center}>
            <Button 
                title="Ir para  a tela About"
                onPress={() => navigation.navigate("About") }
            />
        
        </View>
    );
}; 

export default Home;