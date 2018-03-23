import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TextInput , View, KeyboardAvoidingView } from 'react-native';
import SporklyButton from '../../components/SporklyButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Sign In',
        header: null
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="position">
                
                <View style={styles.logo}>
                    <Image
                        source={ require( '../../assets/sporkly_logo_485.png') }
                        style={{width: 220, height: 220}}
                    />
                </View>

                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' secureTextEntry={true} />

                <Text>{"\n"}</Text>
                <View style={styles.button}>
                    <SporklyButton
                        title='Sign In'
                        icon={
                            <Icon
                              name='home'
                              size={15}
                              color='white'
                            />
                          }
                        onPress={this._signInAsync}
                        
                    />
                    <Text>{"\n"}</Text>
                    <SporklyButton
                        title='Register'
                        onPress={() => this.props.navigation.navigate('Register')}
                      
                    />
                </View >
            </KeyboardAvoidingView>
        );
    }

    _signInAsync = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

var styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    marginBottom: 18,
  }
});

export default WelcomeScreen;
