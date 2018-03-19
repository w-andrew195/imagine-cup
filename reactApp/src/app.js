/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import StartScreen from './screens/start-screen';
import RegisterScreen from './screens/register-screen';
import SignInScreen from './screens/sign-in-screen';
import HomeScreen from './screens/home-screen';

const RootStack = StackNavigator(
    { // Route config object open
        Start: {
            screen: StartScreen
        },
        SignIn: {
            screen: SignInScreen
        },
        Register: {
            screen: RegisterScreen
        },
        Home : {
            screen: HomeScreen
        },
    },
    { // Options object
        initialRouteName: 'Start',
    }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <RootStack />
    );
  }
}
