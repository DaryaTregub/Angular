export interface CreateRecipe {

    body: string,
    title: string,
    tags: string[
      
    ],
    image: string,
    timeCooking: number | null,
    foodValue: {
        calories: number | null,
        fats: number | null,
        carbohydrates: number | null,
        proteins: number | null
    },
    cookingSteps: [
        {
            title: string,
            description: string
        }
    ],
    ingredients: [
        {
            title: string,
            description: string
        }
    ]

}
