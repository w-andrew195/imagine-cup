import React, { Component } from 'react';
import { Button, Image, Slider, Text, View,ScrollView } from 'react-native';

import HeaderMain from '../components/HeaderMain';
import HeaderSub from '../components/HeaderSub';

import RECIPES from '../data/recipes';

class IngredientRow extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row',
                           justifyContent: 'space-between',
                           marginLeft: 10,
                           marginRight: 10 }}>
                <Text style={{color: 'hsl(125, 24%, 39%)', fontWeight: 'bold'}}>
                    • {this.props.name}
                </Text>
                <Text>
                    {this.props.amount + (this.props.unitType == 'SOLID' ? 'g' : 'ml')}
                </Text>
            </View>
        );
    }
}

class NutritionData extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{ fontWeight : 'bold', marginRight: 6 }}>
                    {this.props.label}
                </Text>
                <Text style={{ color: 'hsl(88, 50%, 53%)' }}>
                    {this.props.value}g
                </Text>
            </View>
        );
    }
}

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
        recipes: RECIPES };


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

                    <HeaderSub text='Nutrition' />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{ fontWeight : 'bold' }}>
                            Calories
                        </Text>
                        <Slider style={{width: 200}}
                                minimumValue={300}
                                maximumValue={1200}
                                step={10}
                                value={this.state.personalCals}
                                onValueChange={value => this.updatePersonalCals(value)}
                        />

                        <Text style={{ color: 'hsl(88, 50%, 53%)' }}>
                            {this.state.personalCals}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <NutritionData label='Carbs' value={this.state.carbohydrates} />
                        <NutritionData label='Protein' value={this.state.protein} />
                        <NutritionData label='Fat' value={this.state.fat} />
                    </View>

                    <HeaderSub text='Ingredients' />
                    {this.state.scaledIngredients.map((item, index) => (
                        <IngredientRow key={index}
                                       name={item.name}
                                       amount={item.amount}
                                       unitType={item.unitType} />
                        )
                    )}

                    <HeaderSub text='Instructions' />
                    <Text>
                        {this.state.recipe.instructions}
                    </Text>
                </ScrollView>
        </View>
        );
    }
}

export default RecipeScreen;
