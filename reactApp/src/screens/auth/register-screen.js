import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
    };


    render() {
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
                    onPress={this._registerAsync}
                />
            </View>
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
