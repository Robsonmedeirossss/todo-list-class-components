import React, { Component } from "react";
import ThemeProvider from "../contexts/ThemeProvider";
import Header from '../Header';
import PostList from "../Posts/PostList";
import Footer from '../Footer';
import styles from './style.module.css';

class Layout extends Component{
    render(){
        return(
            <ThemeProvider>
                <div className={styles.layoutContainer}>
                    <Header title="Logo Header" />
                    <PostList />
                    <Footer />
                </div>
            </ThemeProvider>
        );
    }
}

export default Layout;