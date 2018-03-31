import React, { Component } from 'react';
import {
    Button,
    Picker,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HeaderSub from '../../components/HeaderSub';
import SporklyButton from '../../components/SporklyButton';

class CalorieCalculatorScreen extends Component {
    state = {
        age: null,
        weight: null,
        height: null,
        sex: 'f',
        activity: '1.2',
        goal: '0',
        bmr: null,
    }

    constructor(props) {
        super(props);
        this.calculateBMR = this.calculateBMR.bind(this);
    }

    calculateBMR() {
        var bmr = 0;
        var h = this.state.height;
        var w = this.state.weight;
        var a = this.state.age;

        if (this.state.sex === 'f') {
            bmr = 447.6 + 9.2*w + 3.1*h - 4.3*a;
        }
        else if (this.state.sex === 'm') {
            bmr = 88.3 + 13.4*w + 4.8*h - 5.7*a;
        }

        bmr = bmr * this.state.activity;
        bmr = bmr + parseInt(this.state.goal);

        this.setState({bmr : bmr.toFixed(0)});
    }

    render() {
        return (
            <ScrollView>
                <View style={{ marginLeft: 8, marginRight: 8}} >
                    <View style={{ flexDirection: 'row' }} >
                    <Text style={{ marginTop: 18, fontSize: 18 }} >Age:      </Text>
                    <TextInput style={{ flex: 12 }}
                               onChangeText={ (age) => this.setState({age})}
                               value={this.state.age}
                               placeholder='please enter your age'
                               keyboardType='numeric' />
                    <Text style={{ marginTop: 18, fontSize: 18 }}> years</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                    <Text style={{ marginTop: 18, fontSize: 18 }}>Weight: </Text>
                    <TextInput style={{ flex: 12 }}
                               onChangeText={ (weight) => this.setState({weight})}
                               value={this.state.weight}
                               placeholder='please enter your weight'
                               keyboardType='numeric' />
                    <Text style={{ marginTop: 18, fontSize: 18 }}>     kg</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }} >
                    <Text style={{ marginTop: 18, fontSize: 18 }}>Height: </Text>
                    <TextInput style={{ flex: 12 }}
                               onChangeText={ (height) => this.setState({height})}
                               value={this.state.height}
                               placeholder='please enter your height'
                               keyboardType='numeric' />
                    <Text style={{ marginTop: 18, fontSize: 18 }}>    cm</Text>
                    </View>

                    <Picker
                        selectedValue={this.state.sex}
                        onValueChange={(val, index) => this.setState({sex: val})} >

                        <Picker.Item label='Female' value='f' />
                        <Picker.Item label='Male' value='m' />
                    </Picker>

                    <Picker
                        selectedValue={this.state.activity}
                        onValueChange={(val, index) => this.setState({activity: val})} >

                        <Picker.Item label='Sedentary' value='1.2' />
                        <Picker.Item label='Lightly Active' value='1.375' />
                        <Picker.Item label='Moderately Active' value='1.55' />
                        <Picker.Item label='Very Active' value='1.725' />
                        <Picker.Item label='Extremely Active' value='1.9' />
                    </Picker>

                    <Picker
                        selectedValue={this.state.goal}
                        onValueChange={(val, index) => this.setState({goal: val})} >

                        <Picker.Item label='Lose 0.5 kgs a week' value='-551' />
                        <Picker.Item label='Lose 0.25 kgs a week' value='-276' />
                        <Picker.Item label='Maintain my weight' value='0' />
                        <Picker.Item label='Gain 0.25 kgs a week' value='276' />
                        <Picker.Item label='Gain 0.5 kgs a week' value='551' />
                    </Picker>

                    <Button title='Calculate'
                            onPress={this.calculateBMR}
                            color='#E8AAAA' />
                </View>

                <View style={{ backgroundColor: '#E55B5B', marginTop: 12, alignItems: 'center' }} >
                    <LinearGradient colors={['#B24747', '#E55B5B']} style={{ height: 8 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'hsl(360, 24%, 91%)' }} >
                        Your Daily Calorie Budget is: 
                    </Text>
                    <Text style={{ color: 'white' }} >
                        { this.state.bmr ? this.state.bmr + ' calories per day' : 'press calculate to continue' }
                    </Text>
                   <LinearGradient colors={['#E55B5B', '#B24747']} style={{ height: 4 }} /> 
                </View>

                { this.state.bmr != null &&
                    <View>

                    </View>
                }
            </ScrollView>
        );
    }
}

export default CalorieCalculatorScreen;
