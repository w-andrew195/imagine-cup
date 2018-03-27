const RECIPES = {
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

export default RECIPES;
