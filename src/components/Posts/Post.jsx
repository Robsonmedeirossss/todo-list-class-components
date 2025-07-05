import React, { Component } from 'react';
import styles from './style.module.css';
import Button from '../Button';

class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            likes: this.props.post.likes
        }
    }

    
    render(){
        const {
            post: {
                id,
                title,
                subtitle,
                likes,
                read
            },
            onRead,
            onRemove,
            onLike
                } = this.props;
        return(
          <article className={read? styles.containerPostRead : styles.containerPost}>
            <div className={styles.containerContent}>
                <strong>{read ? <s>{title}</s> : title }</strong>
                <p>{subtitle}</p>
                <button onClick={() => onLike(id)}>
                    <p>{likes}</p>
                    ❤️
                </button>
            </div>
            <div className={styles.containerButtons}>
                <Button onClick={() => onRead(id)}>Visualizar</Button>
                <Button onClick={() => onRemove(id)}>Deletar</Button>
            </div>

          </article>  
        );
    }
}

export default Post;