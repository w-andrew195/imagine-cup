import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native';

import SporklyButton from '../../components/SporklyButton';

class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
    };


    render() {
        return (
            <KeyboardAvoidingView behaviour='position' >
                <TextInput placeholder='Username' />
                <TextInput placeholder='Email Address' keyboardType='email-address' />
                <TextInput placeholder='Password' secureTextEntry={true} />
                <TextInput placeholder='Re-enter Password' secureTextEntry={true} />
                <Text>{"\n"}</Text>
                <SporklyButton
                    title="Finish"
                    onPress={this._registerAsync}
                />
            </KeyboardAvoidingView>
        );
    }

    _registerAsync = async () => {
        // Call to azure goes here

        //await AsyncStorage.setItem('userToken', 'abc');

        // Send straight to app stack for now
        this.props.navigation.navigate('Profile');
    }
}

export default RegisterScreen;
