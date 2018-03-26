import React, { Component } from 'react';
import { Button, Text, View,ScrollView } from 'react-native';

class AllergyManagementScreen extends Component {

    render() {
        return (

            <View>
            <Text>{"\n"}</Text>
            <Text style={{ color: 'hsl(0, 0%, 32%)',
                         fontWeight: 'bold', 
                         fontSize: 30 ,
                         fontFamily: "sans-serif"}}>
                allergy
            </Text>
           
           
           
        </View>
        );
    }
}

export default AllergyManagementScreen;
