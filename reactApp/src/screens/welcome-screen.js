import React, { Component } from 'react';
import { Button, Text, TextInput , View } from 'react-native';

class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Sign In',
        header: null
    };


    render() {
        return (
            <View>
                <Text>LOGO GOES HERE</Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />

                <Button
                    title='Sign In'
                    onPress={this._signInAsync}
                />
                <Button
                    title='Register'
                    onPress={() => this.props.navigation.navigate('Register')}
                />
            </View>
        );
    }

    _signInAsync = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

export default WelcomeScreen;
