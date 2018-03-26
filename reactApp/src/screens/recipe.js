import React, { Component } from 'react';
import { Button, Image, Text, View,ScrollView } from 'react-native';

class RecipeScreen extends Component {
    state = {
        1: {
            recipeId: 1,
            name: 'Chickpea Masala',
            description: 'Use the pressure cooker to make short work of an Indian-inspired chicken and chickpea curry.',
            instructions: 'Step 1.\n lalalalal\n\n Step 2.\n blah blah blah\n\n Step 3.\n ?????\n\n Step 4.\n Profit!',
            ingredients: [
                {
                    ingredient_id : 1,
                    name: 'Chicken breast',
                    description: 'Lean chicken breast',
                    unitType: 'SOLID',
                    protein: 23,
                    carbohydrates: 0,
                    fat: 1.2,
                    calories: 110,
                    amount: 175
                },
                {
                    ingredient_id : 2,
                    name: 'Chickpeas',
                    description: 'Canned chickpeas',
                    unitType: 'SOLID',
                    protein: 4.9,
                    carbohydrates: 13,
                    fat: 2,
                    calories: 88,
                    amount: 150
                },
                {
                    ingredient_id : 3,
                    name: 'Canned Tomatos',
                    description: 'Canned tomatos',
                    unitType: 'SOLID',
                    protein: 2.9,
                    carbohydrates: 6.7,
                    fat: 0.7,
                    calories: 51,
                    amount: 100
                },
                {
                    ingredient_id : 3,
                    name: 'Olive oil',
                    description: 'Olive oil',
                    unitType: 'LIQUID',
                    protein: 0,
                    carbohydrates: 0,
                    fat: 100,
                    calories: 884,
                    amount: 14
                },
                {
                    ingredient_id : 4,
                    name: 'Curry powder',
                    description: 'Curry Powder',
                    unitType: 'SOLID',
                    protein: 14,
                    carbohydrates: 56,
                    fat: 14,
                    calories: 325,
                    amount: 8
                },
            ]
        }
    }

    render() {
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;
        const recipe = this.state[id];
 
        var baseCals = 0;
        var scaleFactor = 0
        var personalCals = 600;

        for (var i = 0; i < recipe.ingredients.length; i++){
            var ing = recipe.ingredients[i];
            baseCals += ing.amount * ing.calories / 100;
        };

        scaleFactor = personalCals / baseCals;

        for (var i = 0; i < recipe.ingredients.length; i++){
            var ing = recipe.ingredients[i];
            ing.amount = ing.amount * scaleFactor;
            if (ing.amount < 10) {
                ing.amount = ing.amount.toFixed(1);
            } else {
                ing.amount = parseInt(ing.amount);
            };
        };

        return (
            <View style={{flex: 1}}>
                <Text>{"\n"}</Text>
                <Text style={{ color: 'hsl(0, 0%, 32%)',
                             fontWeight: 'bold', 
                             fontSize: 30 ,
                             fontFamily: "sans-serif"}}>
                {
                    recipe.name
                }
                </Text>
                <View
                    style={{
                        borderBottomColor: 'hsl(0, 0%, 70%)',
                        borderBottomWidth: 0.6,
                    }}
                />
                <ScrollView>
                    <Image source={require('../assets/recipe01.jpg')}
                           style={{width: 300,
                                   height: 300,
                                   alignSelf: 'center',
                                   borderRadius: 20,
                                   marginTop: 12}} />
                    <Text>
                        {recipe.description}
                    </Text>
                    <View>
                        <Text style={{ color: 'hsl(0, 0%, 32%)',
                                 fontWeight: 'bold', 
                                 fontSize: 20 ,
                                 fontFamily: "sans-serif"}}>
                            Nutrition
                        </Text>

                    </View>
                    <View>
                        <Text style={{ color: 'hsl(0, 0%, 32%)',
                                 fontWeight: 'bold', 
                                 fontSize: 20 ,
                                 fontFamily: "sans-serif"}}>
                            Ingredients
                        </Text>
                        {recipe.ingredients.map((item, index) => (
                            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}> 
                                <Text style={{color: 'hsl(125, 24%, 39%)', fontWeight: 'bold'}}>• {item.name}</Text>
                                <Text>{item.amount + (item.unitType == 'SOLID' ? 'g' : 'ml')}</Text>
                            </View>
                            )
                        )}
                        <Text style={{ color: 'hsl(0, 0%, 32%)',
                                 fontWeight: 'bold', 
                                 fontSize: 20 ,
                                 fontFamily: "sans-serif"}}>
                            Instructions
                        </Text>
                        <Text>
                            {recipe.instructions}
                        </Text>

                    </View>
                </ScrollView>
        </View>
        );
    }
}

export default RecipeScreen;
