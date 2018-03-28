import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import HeaderMain from '../../components/HeaderMain';

import CookingSkillScreen from '../profile/profile-cooking-skill-screen';
import AllergyManagementScreen from '../profile/profile-allergy-management-screen';
import CalorieCalculatorScreen from '../profile/profile-calorie-calculator-screen';



const ProfileTabs = TabNavigator(
    {
        CookingSkill: {
            screen: CookingSkillScreen
        },
        AllergyManagement: {
            screen: AllergyManagementScreen
        },
        CalorieCalculator: {
            screen: CalorieCalculatorScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: () => {
                const { routeName } = navigation.state;
                let titlename;
                if (routeName === 'CookingSkill') {
                    titlename = 'Skill';
                } else if (routeName === 'AllergyManagement') {
                    titlename = 'Allergies';
                } else if (routeName === 'CalorieCalculator') {
                    titlename = 'Calculator';
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return titlename;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'hsl(340, 60%, 100%)',
            inactiveTintColor: 'hsl(360, 40%, 90%)',
            upperCaseLabel: false,
            labelStyle: {
              fontSize: 15,
              fontFamily: "sans-serif",
              fontWeight: 'bold'
            },
            style: {
                
              backgroundColor: '#hsl(360, 60%, 60%)',
            },
        },
        //tabBarComponent: TabBarBottom,
        //tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: true,
        
    }
);

const ProfileStack = StackNavigator({
    
        MyProfile:
            { screen: ProfileTabs }
    },
    {
        navigationOptions:
            {
                header: headerProps => {
                    return (
                            <HeaderMain text='My Profile' />
                    )
                }
            }
    }
);

class MyProfileScreen extends Component {

    render() {
        return (

            <ProfileStack />

        );
    }
}

export default MyProfileScreen;
