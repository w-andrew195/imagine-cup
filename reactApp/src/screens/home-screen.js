import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class HomeScreen extends Component {

    render() {
        navi = this.props.navigation;
        return (
            <View>
                <Text>I am a placeholder HomeScreen</Text>
                <Button
                    title="Go to Test"
                    onPress={() => navi.navigate('Test')}
                />
            </View>
        );
    }
}

export default HomeScreen;
