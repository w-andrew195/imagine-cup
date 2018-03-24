import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
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
                <View style={{ alignItems: 'center', width: 300, margin: 'auto', marginTop: 40}}>
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
                        }}>My Favourate Food:</Text>
                  
                </View>

        );
    }
}

export default CookSkillScreen;
