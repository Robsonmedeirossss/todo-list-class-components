import React, { Component } from 'react';
import styles from './style.module.css';

class Button extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { onClick, children } = this.props;

        return(
            <button 
                onClick={onClick}
                className={styles.button}
            >
                {children}
            </button>
        );
    }
}

export default Button;