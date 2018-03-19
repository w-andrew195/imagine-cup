import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class StartScreen extends Component {
    static navigationOptions = { // Configures the header bar per-screen
        // title: 'Home', // Used elsewhere to set the header title
    };
    nav = this.props.navigation;

    render() {
        return (
            <View>
                <Text>I am a placeholder StartScreen</Text>
                <Button
                    title="Go to SignIn"
                    onPress={() => this.nav.navigate('SignIn')}
                />
                <Button
                    title="Go to Register"
                    onPress={() => this.nav.navigate('Register')}
                />
            </View>
        );
    }
}

export default StartScreen;
