import React, { Component } from 'react';
import { Button, Image, Slider, Text, View,ScrollView } from 'react-native';

import HeaderMain from '../components/HeaderMain';
import HeaderSub from '../components/HeaderSub';

class RecipeScreen extends Component {
    state = {
        baseCals : 0,
        protein : 0,
        carbohydrates : 0,
        fat : 0,
        scaleFactor : 0,
        personalCals : 600,
        recipe: null,
        scaledIngredients: null,
        recipes: {
            1: {
                recipeId: 1,
                name: 'Chickpea Masala',
                description: 'Use your pressure cooker to make short work of an Indian-inspired chicken and chickpea curry.',
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
    };


    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;
        this.state.recipe = this.state.recipes[id];

        for (var i = 0; i < this.state.recipe.ingredients.length; i++){
            var ing = this.state.recipe.ingredients[i];
            this.state.baseCals += ing.amount * ing.calories / 100;
        };

        this.state.scaledIngredients = []
        for (var i = 0; i < this.state.recipe.ingredients.length; i++) {
            var ing = JSON.parse( JSON.stringify(this.state.recipe.ingredients[i]));
            this.state.scaledIngredients.push(ing);
        }

    }

    updatePersonalCals(value) {
        var scaleFactor = value / this.state.baseCals;
        var protein = 0;
        var carbohydrates = 0;
        var fat = 0;

        for (var i = 0; i < this.state.scaledIngredients.length; i++){
            var ing = this.state.scaledIngredients[i];
            ing.amount = this.state.recipe.ingredients[i].amount * scaleFactor;
            if (ing.amount < 20) {
                ing.amount = ing.amount.toFixed(1);
            } else {
                ing.amount = ing.amount.toFixed(0);
            };
        };

        for (var i = 0; i < this.state.scaledIngredients.length; i++){
            var ing = this.state.scaledIngredients[i];
            protein += ing.protein * ing.amount / 100;
            carbohydrates += ing.carbohydrates * ing.amount / 100;
            fat += ing.fat * ing.amount / 100;
        };

        this.setState({
            personalCals    : value,
            protein         : protein.toFixed(1),
            carbohydrates   : carbohydrates.toFixed(1),
            fat             : fat.toFixed(1)
        });

    }

    componentWillMount() {
        this.updatePersonalCals(this.state.personalCals);
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <HeaderMain text={this.state.recipe.name} />

                <ScrollView style={{marginLeft: 10, marginRight: 10}}>
                    <Image source={require('../assets/recipe01.jpg')}
                           style={{width: 300,
                                   height: 300,
                                   alignSelf: 'center',
                                   borderRadius: 20,
                                   marginTop: 12}} />
                    <Text>
                        {this.state.recipe.description}
                    </Text>
                    <View>

                        <HeaderSub text='Nutrition' />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{ fontWeight : 'bold' }}>
                                Calories
                            </Text>
                            <Slider minimumValue={300} maximumValue={1200} style={{width: 200}} value={this.state.personalCals} onValueChange={value => this.updatePersonalCals(value)} step={1}/>
                            <Text style={{ color: 'hsl(88, 50%, 53%)' }}>
                                {this.state.personalCals}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{ fontWeight : 'bold' }}>
                                Carbs
                            </Text>{}
                            <Text style={{ color: 'hsl(88, 50%, 53%)' }}>
                                {this.state.carbohydrates}
                            </Text>
                            <Text style={{ fontWeight : 'bold' }}>
                                Protein
                            </Text>{}
                            <Text style={{ color: 'hsl(88, 50%, 53%)' }}>
                                {this.state.protein}
                            </Text>
                            <Text style={{ fontWeight : 'bold' }}>
                                Fat
                            </Text>{}
                            <Text style={{ color: 'hsl(88, 50%, 53%)' }}>
                                {this.state.fat}
                            </Text>
                        </View>

                    </View>
                    <View>

                        <HeaderSub text='Ingredients' />

                        {this.state.scaledIngredients.map((item, index) => (
                            <View key={index} style={{ flexDirection: 'row',
                                                       justifyContent: 'space-between',
                                                       marginLeft: 10,
                                                       marginRight: 10 }}>
                                <Text style={{color: 'hsl(125, 24%, 39%)', fontWeight: 'bold'}}>• {item.name}</Text>
                                <Text>{item.amount + (item.unitType == 'SOLID' ? 'g' : 'ml')}</Text>
                            </View>
                            )
                        )}

                        <HeaderSub text='Instructions' />

                        <Text>
                            {this.state.recipe.instructions}
                        </Text>

                    </View>
                </ScrollView>
        </View>
        );
    }
}

export default RecipeScreen;
