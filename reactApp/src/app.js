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
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import StartScreen from './screens/start-screen';
import WelcomeScreen from './screens/welcome-screen';

import RegisterScreen from './screens/register-screen';
import HomeScreen from './screens/home-screen';
import TestScreen from './screens/test-screen';

const AppStack = StackNavigator(
    { // Route config object open
        Home : {
            screen: HomeScreen
        },
        Test : {
            screen: TestScreen
        },
    },
);

const AuthStack = StackNavigator(
    {
        Welcome: {
            screen: WelcomeScreen
        },
        Register: {
            screen: RegisterScreen
        },
    }
);

export default SwitchNavigator(
    {
        AuthLoading: StartScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRoutName: 'AuthLoading',
    }
);
