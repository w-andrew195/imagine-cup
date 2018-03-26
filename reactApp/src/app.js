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

import StartScreen from './screens/auth/start-screen';
import WelcomeScreen from './screens/auth/welcome-screen';
import RegisterScreen from './screens/auth/register-screen';
import RecipeScreen from './screens/recipe';

import HomeTabs from './screens/home-navigator';

const AppStack = StackNavigator(
    {
        Home : {
            screen: HomeTabs
        },
        Recipe : {
            screen: RecipeScreen
        },
    },
    { navigationOptions: { header : null } },
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
