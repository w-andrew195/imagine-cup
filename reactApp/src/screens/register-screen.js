import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
    };


    render() {
        navi = this.props.navigation;
        return (
            <View>
                <Text>I am a placeholder RegisterScreen</Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Email Address' keyboardType='email-address' />
                <TextInput placeholder='Date of Birth' keyboardType='numeric' />
                <TextInput placeholder='Password' secureTextEntry={true} />
                <TextInput placeholder='Re-enter Password' secureTextEntry={true} />
                <Button
                    title="Finish"
                    onPress={() => navi.navigate('App')}
                />
            </View>
        );
    }
}

export default RegisterScreen;
