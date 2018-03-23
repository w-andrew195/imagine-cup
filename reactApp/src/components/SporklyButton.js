import React, { Component } from 'react';
import { AppRegistry, Button, TouchableOpacity, Text, TouchableHighlight,View } from 'react-native';

export default class SporklyButton extends Component {

    render() {
        return (
             <View style = {{
                
                    //flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  
             }}>
            <TouchableHighlight underlayColor="hsl(88, 50%, 53%)" activeOpacity={0.8} onPress={this.props.onPress} 
            style={{
                alignItems: 'center',
                backgroundColor: '#hsl(125, 24%, 39%)',
              
                borderRadius: 20,
                paddingTop: 10,
                paddingBottom: 10,
                width: 400,

            }}>
            <View style={{}}>
                <Text style={{
                    color: 'white',
                    //alignItems: 'center',
                    fontSize: 15,
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>{this.props.title}</Text>
                </View>
            </TouchableHighlight >
            </View>
        );
    }
}
