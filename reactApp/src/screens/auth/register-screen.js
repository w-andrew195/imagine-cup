import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
    };


    render() {
        return (
            <View>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Email Address' keyboardType='email-address' />
                <TextInput placeholder='Date of Birth' keyboardType='numeric' />
                <TextInput placeholder='Password' secureTextEntry={true} />
                <TextInput placeholder='Re-enter Password' secureTextEntry={true} />
                <Text>{"\n"}</Text>
                <Button
                    title="Finish"
                    color='hsl(88, 50%, 53%)'
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
