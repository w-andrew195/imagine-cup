import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ProfileMainScreen extends Component {
    render() {
        return (
            <View>
                <Text>Profile main screen</Text>
            </View>
        );
    }
}

const ProfileStack = StackNavigator(
    { // Route config object open
        Profile : {
            screen: ProfileMainScreen
        },
    },
);

export default ProfileStack;
