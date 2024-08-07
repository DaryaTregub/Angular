export interface User {    
        username: string,
        role: string,
        firstName: string,
        lastName: string,
        middleName: string,
        avatar: string,
        userAgent: string,
        createdOn:any,
        updatedOn:any,
        lastEntry:any,
        isActive:boolean,
        posts: [
          {
            id: string,
            body: string,
            title: string,
            createdOn:any,
            updatedOn:any
          }
        ],
        comments: [
          {
            id: string,
            postId: string,
            text: string,
            createdOn:any,
            updatedOn:any
          }
        ],
        id: string
      
}
