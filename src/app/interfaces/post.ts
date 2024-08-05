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
      description: string,
      check?: boolean
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
      user: {
        avatar: string,
        firstName: string,
        id: string,
        lastName: string,
        middleName: string,
        username: string
      },
      text: string,
      createdOn: any,
      updatedOn: any
    }
  ],
  createdOn: any,
  updatedOn: any

}
