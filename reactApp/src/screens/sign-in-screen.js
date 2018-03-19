import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Sign In',
    };

    navi = this.props.navigation.navigate;

    render() {
        return (
            <View>
                <Text>I am a placeholder SignInScreen</Text>
                <Button
                    title="Go to Start"
                    onPress={() => this.navi('Start')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.navi('Home')}
                />
            </View>
        );
    }
}

export default SignInScreen;
