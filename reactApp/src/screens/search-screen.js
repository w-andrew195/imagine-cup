import React, { Component } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { SearchBar, Card, Button } from 'react-native-elements';
//import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import HeaderMain from '../components/HeaderMain';
import HeaderSub from '../components/HeaderSub';

class SearchScreen extends Component {

    render() {
        return (
            <View>

                <HeaderMain text='Search' />

                <SearchBar
                    lightTheme
                    // value={this.state.term}
                    //onChangeText={term => this.setState({ term })}
                    cancelButtonTitle="Cancel"
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Search your recipes...' />
                <HeaderSub text='Categories' />
                <ScrollView>
                    <View style={{
                        flexDirection: 'row',
                    }}>

                        <Card title='Dessert'
                            containerStyle={{ borderRadius: 10, height: 260, width: 175, flex:1}}

                            imageStyle={{ height: 130 }}
                            image={require('../assets/Search01.jpg')}

                        >

                            < Button
                                onPress={() => Alert.alert(
                                    'Alert',
                                    'Not Available',
                                    [
                                        { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                    ]
                                )}
                                backgroundColor='hsl(88,  50%, 53%)'
                                fontFamily='Lato'
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    borderRadius: 20
                                }}
                                title='More' />
                        </Card>
                        <Card title='Meat Lover'
                            containerStyle={{ borderRadius: 10, height: 260, width: 175, flex:1}}

                            imageStyle={{ height: 130 }}
                            image={require('../assets/Search02.jpg')}

                        >

                            < Button
                                onPress={() => Alert.alert(
                                    'Alert',
                                    'Not Available',
                                    [
                                        { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                    ]
                                )}
                                backgroundColor='hsl(88,  50%, 53%)'
                                fontFamily='Lato'
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    borderRadius: 20
                                }}
                                title='More' />
                        </Card>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 50
                    }}>

                        <Card title='Vegetarian'
                            containerStyle={{ borderRadius: 10, height: 260, width: 175, flex:1}}

                            imageStyle={{ height: 130 }}
                            image={require('../assets/Search03.jpg')}

                        >

                            < Button
                                onPress={() => Alert.alert(
                                    'Alert',
                                    'Not Available',
                                    [
                                        { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                    ]
                                )}
                                backgroundColor='hsl(88,  50%, 53%)'
                                fontFamily='Lato'
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    borderRadius: 20
                                }}
                                title='More' />
                        </Card>
                        <Card title='Seafood Lover'
                            containerStyle={{ borderRadius: 10, height: 260, width: 175, flex:1}}

                            imageStyle={{ height: 130 }}
                            image={require('../assets/Search04.jpg')}

                        >

                            < Button
                                onPress={() => Alert.alert(
                                    'Alert',
                                    'Not Available',
                                    [
                                        { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                    ]
                                )}
                                backgroundColor='hsl(88,  50%, 53%)'
                                fontFamily='Lato'
                                buttonStyle={{
                                    borderRadius: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                    borderRadius: 20
                                }}
                                title='More' />
                        </Card>
                    </View>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>




                </ScrollView >
            </View>
        );
    }
}

export default SearchScreen;
