interface User {
    username:string
  }
  interface Post {
    id: number,
    createdAt: string,
    updatedAt: string,
    content: string,
    title: string,
    authorId: number
  }

export type {User, Post}