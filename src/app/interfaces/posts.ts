export interface Posts {
    id: string,
    body: string,
    title: string,
    tags: [
        string
    ],
    image: string,
    timeCooking: 0,
    author: {
        id: string,
        avatar: string,
        firstName: string,
        lastName: string,
        middleName: string
    },
    createdOn: any,
    updatedOn: any
}
