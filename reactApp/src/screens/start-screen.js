import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class StartScreen extends Component {
   constructor(props) {
       super(props);

       // auth state checking will go here

       // redirect to Auth stack for now
       this.props.navigation.navigate('Auth');
   }

    render() {
        return (
            <View>
                <Text>I am a placeholder StartScreen</Text>
            </View>
        );
    }
}

export default StartScreen;
