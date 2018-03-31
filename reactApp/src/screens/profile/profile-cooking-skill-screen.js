import React, { Component } from 'react';
import { Button, Text, View, CheckBox } from 'react-native';
import StarRating from 'react-native-star-rating';

class CookSkillScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <View style={{ alignItems: 'center', width: 300, margin: 'auto', marginTop: 40 }}>
                <Text style={{
                    fontSize: 16,
                    marginBottom: 10,
                    fontFamily: "sans-serif",
                }}>My Cooking Skill:</Text>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                    fullStarColor={"hsl(88,  50%, 53%)"}
                />
                <Text style={{
                    fontSize: 16,
                    marginBottom: 10,
                    fontFamily: "sans-serif",
                    marginTop: 20
                }}>My Favourite Food:</Text>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.checked}
                            onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={{ marginTop: 5 }}> Kiwi Food </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.checked2}
                            onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
                        />
                        <Text style={{ marginTop: 5 }}> American Food </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.checked3}
                            onValueChange={() => this.setState({ checked3: !this.state.checked3 })}
                        />
                        <Text style={{ marginTop: 5 }}> Asian Food </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.checked4}
                            onValueChange={() => this.setState({ checked4: !this.state.checked4 })}
                        />
                        <Text style={{ marginTop: 5 }}> Indian Food </Text>
                    </View>
                </View>

            </View>

        );
    }
}

export default CookSkillScreen;
