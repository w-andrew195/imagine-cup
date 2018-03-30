const RECIPES = {
    1: {
        recipeId: 1,
        name: 'Chickpea Masala',
        description: 'The pressure cooker is an amazing device for making flavor-packed stews in very short order. In this version, canned chickpeas, roasted tomatoes, smoked paprika, and chorizo come together to form a flavorful base for fall-off-the-bone tender chicken legs. It all cooks in under half an hour start to finish.',
        instructions: 'Step 1.\nHeat oil in a pressure cooker over medium-high heat until shimmering. Add chorizo and cook, stirring, until just starting to crisp around the edges, about 2 minutes.\n\n Step 2.\nAdd onions and cook, stirring, until softened, about 3 minutes. Add paprika, chickpeas, tomatoes, chicken pieces, and broth. Season gently with salt and pepper.\n\n Step 3.\nSeal pressure cooker and bring to high pressure. Cook for 15 minutes. Cool pressure cooker under a cold running tap (if using an electric cooker, use the quick release valve), and open. Return to high heat and cook, stirring gently, until it achieves a thick, stew-like consistency, about 5 minutes.\n\n Step 4.\nStir in vinegar and season to taste with salt and pepper. Stir in parsley and serve, drizzling with more extra-virgin olive oil at the table.',
        ingredients: [
            {
                ingredient_id : 1,
                name: 'Chicken Leg',
                description: 'Lean chicken Leg',
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
