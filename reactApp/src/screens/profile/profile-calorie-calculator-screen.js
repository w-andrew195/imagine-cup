import React, { Component } from 'react';
import { Button, Text, View,ScrollView, TextInput } from 'react-native';

import HeaderSub from '../../components/HeaderSub';

class CalorieCalculatorScreen extends Component {

    render() {
        return (
            <View>
            <TextInput placeholder='Age' />
            <Text></Text>
            <TextInput placeholder='Current Weight (kg)' keyboardType='numeric' />
            <TextInput placeholder='Height (cm)' secureTextEntry={true} />
            <TextInput placeholder='Re-enter Password' secureTextEntry={true} />
            </View>
        );
    }
}

export default CalorieCalculatorScreen;
