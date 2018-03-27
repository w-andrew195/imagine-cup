import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderSub from '../components/HeaderSub';
import HeaderMain from '../components/HeaderMain';

class RecommendationScreen extends Component {

    render() {
        return (

            <View>

                <HeaderMain text="Today's Recommendation" />

                <ScrollView
                //horizontal={true}>
                >
                    <Card title='Chickpea Masala'
                        titleStyle = {{fontFamily: "monospace"}}
                        containerStyle={{ borderRadius: 25 }}
                        imageStyle={{ height: 300 }}
                        image={require('../assets/recipe01.jpg')} >
                        <Text style={{ marginBottom: 10,
                            fontFamily: "monospace" }}>
                            Use the pressure cooker to make short work of an Indian-inspired chicken and chickpea curry.
                        </Text>
                        <Button
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='Show Recipe'
                            onPress={() => this.props.navigation.navigate('Recipe', { id: 1 })} />
                    </Card>
                    
                    <Text>{"\n"}</Text>

                    <HeaderSub text='New Recipes' />

                <ScrollView horizontal={true}>
                <Card title='Carrot and Lentil Soup'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/recipe02.jpg')} >
                       
                        <Button
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>
                    <Card title='Asian Noddle Salad'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/recipe03.jpeg')} >
                       
                        <Button
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>
                    <Card title='Strawberry Salsa'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/recipe04.jpg')} >
                       
                        <Button
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>
                    
                    
                    </ScrollView >
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                </ScrollView >
            </View>


        );




    }
}

export default RecommendationScreen;
