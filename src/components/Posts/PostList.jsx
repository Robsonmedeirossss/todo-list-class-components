import React, { Component } from "react";
import posts from './mocks/MockPosts';
import Post from './Post'; 

class PostList extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts,
        }
    }

    handleRead = (id) => {
        this.setState(prevState => {
            const postsUpdated = prevState.posts.map(post => (
                post.id === id ? {...post, read: !post.read} : post
            ))

            return { posts: postsUpdated }
        })
    }

    handleRemove = (id) => {
        this.setState(prevState => {
            const postsUpdateds = prevState.posts.filter(post =>(
                post.id !== id
            ))

            return { posts: postsUpdateds }
        })
    }

        handleLike = (id) => {
            this.setState(prevState => {
                const postsUpdated = prevState.posts.map(post => (
                    post.id === id ? 
                    {...post, likes: post.likes + 1}
                    :
                    post
                ))
    
                return { posts: postsUpdated }
            })
        }

    render(){
        const { posts } = this.state;

        return(
            posts.map(post => (
                <Post 
                    key={post.id}
                    post={post}
                    onRead={this.handleRead}
                    onRemove={this.handleRemove}
                    onLike={this.handleLike}
                />
            ))
        );
    }
}

export default PostList;