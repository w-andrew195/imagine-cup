import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { TabNavigator, TabBarBottom } from 'react-navigation';

import MealPlannerScreen from './meal-planner-screen';
import ProfileScreen from './profile/profile-navigator';
import RecommendationScreen from './recommendation-screen';
import SearchScreen from './search-screen';

const HomeTabs = TabNavigator(
    {
        Recommendations: {
            screen: RecommendationScreen
        },
        Search: {
            screen: SearchScreen
        },
        MealPlanner: {
            screen: MealPlannerScreen
        },
        Profile: {
            screen: ProfileScreen
        },
    },
    {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Recommendations') {
          iconName = "home";
        } else if (routeName === 'Search') {
          iconName = "search";
        } else if (routeName === 'MealPlanner') {
          iconName = "schedule";
        } else if (routeName === 'Profile') {
          iconName = "face";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default HomeTabs;
