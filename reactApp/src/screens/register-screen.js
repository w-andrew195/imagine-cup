import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class RegisterScreen extends Component {
    nav = this.props.navigation;

    render() {
        return (
            <View>
                <Text>I am a placeholder RegisterScreen</Text>
                <Button
                    title="Go to Start"
                    onPress={() => this.nav.navigate('Start')}
                />
                <Button
                    title="Go to Self"
                    onPress={() => this.nav.navigate('Register')}
                />
            </View>
        );
    }
}

export default RegisterScreen;
