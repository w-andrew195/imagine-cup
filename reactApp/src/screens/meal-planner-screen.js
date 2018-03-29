import React, { Component } from 'react';
import {Text, View, ScrollView, Alert} from 'react-native';
import {Card, Button} from 'react-native-elements';

import HeaderMain from '../components/HeaderMain';
import HeaderSub from '../components/HeaderSub';

class MealPlannerScreen extends Component {

    render() {
        return (
            <View>

            <HeaderMain text='My Meal Planner' />

            <ScrollView>
            <HeaderSub text='Breakfast' />  
            <ScrollView horizontal={true}>
                <Card title='Best Sweetcorn Fritters'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner01.jpg')} >

                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>

                    <Card title='Scrambled Pita Pockets'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner02.jpg')} >
                       
                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>

                    <Card title='Brekkie Baskets'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner03.jpg')} >
                       
                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
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
                    <HeaderSub text='Lunch' />
                    <ScrollView horizontal={true}>
                    <Card title='One Dish Spicy Meatballs'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner04.jpg')} >
                       
                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>

                    <Card title='Tuna Tortilla Bake'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner05.jpg')} >
                       
                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>


                    <Card title='Tomato and caper linguine'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner06.jpg')} >
                       
                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>

                    </ScrollView>

                    <Text>{"\n"}</Text>
                    <HeaderSub text='Dinner' />
                    <ScrollView horizontal={true}>
                    <Card title='Asian-steamed sea bass'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner07.jpg')} >
                       
                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>

                    <Card title='Grilled salmon'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner08.jpg')} >
                       
                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>


                    <Card title='Dab and asparagus bake'
                        containerStyle={{ borderRadius: 10 ,height: 230, width: 200}}
                        imageStyle={{ height: 100 }}
                        image={require('../assets/Planner09.jpg')} >
                       
                        <Button
                            onPress={() => Alert.alert(
                                'Alert',
                                'Not Available',
                                [
                                    { text: 'OK', onPress: () => console.log('OK Pressed!') }
                                ]
                            )}
                            backgroundColor='hsl(88,  50%, 53%)'
                            fontFamily='Lato'
                            buttonStyle={{ borderRadius: 0,
                                             marginLeft: 0,
                                              marginRight: 0, 
                                              marginBottom: 0,
                                              borderRadius:20 }}
                            title='More' />
                    </Card>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>

                    </ScrollView>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>

                  
            </ScrollView >
        </View>
        );
    }
}

export default MealPlannerScreen;
