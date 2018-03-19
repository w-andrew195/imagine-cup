import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class HomeScreen extends Component {
    nav = this.props.navigation;

    render() {
        return (
            <View>
                <Text>I am a placeholder HomeScreen</Text>
                <Button
                    title="Go to Start"
                    onPress={() => this.nav.navigate('Start')}
                />
            </View>
        );
    }
}

export default HomeScreen;
