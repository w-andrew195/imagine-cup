import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HeaderSub extends Component {

    render() {
        return (
            <View>
                <Text style={{
                    color: 'hsl(0, 0%, 32%)',
                    fontWeight: 'bold',
                    fontSize: 30,
                    fontFamily: "sans-serif",
                    marginTop: 10,
                    marginLeft: 8
                }}>
                    {this.props.text}
                </Text>

                <View
                    style={{
                        borderBottomColor: 'hsl(0, 0%, 70%)',
                        borderBottomWidth: 0.6,
                    }}
                />
            </View>
        );
    }
}
