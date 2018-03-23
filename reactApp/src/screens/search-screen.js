import React, { Component } from 'react';
import { Button, Text, View,ScrollView } from 'react-native';

class SearchScreen extends Component {

    render() {
        return (

            <View>
            <Text>{"\n"}</Text>
            <Text style={{ color: 'hsl(0, 0%, 32%)',
                         fontWeight: 'bold', 
                         fontSize: 30 ,
                         fontFamily: "sans-serif"}}>
                Search
            </Text>
            <View
                style={{
                    borderBottomColor: 'hsl(0, 0%, 70%)',
                    borderBottomWidth: 0.6,
                }}
            />
            <ScrollView>
            
           
            </ScrollView >
        </View>
        );
    }
}

export default SearchScreen;
