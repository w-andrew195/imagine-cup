import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class RecommendationScreen extends Component {

    render() {
        return (

            <View>
                <Text>{"\n"}</Text>
                <Text style={{ color: 'hsl(0, 0%, 32%)',
                             fontWeight: 'bold', 
                             fontSize: 30 ,
                             fontFamily: "sans-serif"}}>
                    Today's Recommendation
                </Text>
                <View
                    style={{
                        borderBottomColor: 'hsl(0, 0%, 70%)',
                        borderBottomWidth: 0.6,
                    }}
                />
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
                            title='Show Recipe' />
                    </Card>
                    
                    <Text>{"\n"}</Text>
                    <Text style={{ color: 'hsl(0, 0%, 32%)',
                             fontWeight: 'bold', 
                             fontSize: 20 ,
                             fontFamily: "sans-serif"}}>
                    New Recipes
                </Text>
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
