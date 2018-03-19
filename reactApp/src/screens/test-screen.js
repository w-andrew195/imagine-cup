import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class RegisterScreen extends Component {
    nav = this.props.navigation;

    render() {
        const { params } = this.props.navigation.state;
        const testParam = params ? params.testParam : null;

        return (
            <View>
                <Text style={{color: 'red', fontWeight: 'bold', fontSize: 48}}>
                   testParam: {JSON.stringify(testParam)}
                </Text>
            </View>
        );
    }
}

export default RegisterScreen;
