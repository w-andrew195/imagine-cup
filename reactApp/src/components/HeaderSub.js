import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HeaderSub extends Component {

    render() {
        return (
            <Text style={{
                color: 'hsl(0, 0%, 32%)',
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: "sans-serif",
                marginLeft: 4
            }}>
                {this.props.text}
            </Text>
        );
    }
}
