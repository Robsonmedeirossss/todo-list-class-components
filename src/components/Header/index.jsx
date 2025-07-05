import React, { Component } from "react";
import styles from './style.module.css';
import { ThemeContext } from '../contexts/ThemeProvider'; 
import Button from "../Button";

class Header extends Component{
    
    constructor(props){
        super(props);
    }
    
    render() {
        const { title } = this.props;
        return(
            <ThemeContext.Consumer>
                {({theme, handleToggleTheme}) => (
                    <div className={styles.header}>
                        <h1>{title}</h1>
                        <Button
                            onClick={handleToggleTheme}
                        >
                            {theme === 'dark'?
                            '🔦'
                            :
                            '🌙'
                            }
                        </Button>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Header;