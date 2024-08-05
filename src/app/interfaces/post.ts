export interface Post {    
          id: string,
          body: string,
          title: string,
          tags: [
            string
          ],
          image: string,
          timeCooking: number,
          foodValue: {
            calories: number,
            fats: number,
            carbohydrates: number,
            proteins: number
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
          ],
          author: {
            id: string,
            avatar: string,
            firstName: string,
            lastName: string,
            middleName: string
          },
          comments: [
            {
              id: string,
              postId: string,
              user: {},
              text: string,
              createdOn: any,
              updatedOn: any
            }
          ],
          createdOn: any,
          updatedOn: any
    
}
