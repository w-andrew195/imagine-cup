import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ProfileMainScreen extends Component {
    render() {
        return (
            <View>
            <Text>{"\n"}</Text>
            <Text style={{ color: 'hsl(0, 0%, 32%)',
                         fontWeight: 'bold', 
                         fontSize: 30 ,
                         fontFamily: "sans-serif"}}>
                My Profile
            </Text>
            <View
                style={{
                    borderBottomColor: 'hsl(0, 0%, 70%)',
                    borderBottomWidth: 0.6,
                }}
            />
            <ScrollView>
            
           
            </ScrollView >
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
