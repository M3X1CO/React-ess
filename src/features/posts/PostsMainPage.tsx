
import React from 'react'
import { AddPostForm } from './AddPostForm'
import { PostsList } from './PostsList'

export const PostsMainPage: React.FC = () => {
    return (
        <>
            <AddPostForm />
            <PostsList />
        </>
    )
}
