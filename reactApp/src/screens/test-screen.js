import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class TestScreen extends Component {

    render() {
        return (

            <View>
                <Text style={{color: 'red', fontWeight: 'bold', fontSize: 48}}>
                   Test page loaded
                </Text>
            </View>
        );
    }
}

export default TestScreen;
