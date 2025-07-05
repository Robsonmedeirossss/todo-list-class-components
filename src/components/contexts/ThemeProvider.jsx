import { DockIcon } from 'lucide-react';
import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            theme: localStorage.getItem('theme') || 'light',
        }
    }  

    componentDidMount = () => {
        document.body.setAttribute('data-theme', this.state.theme);
    }

    handleToggleTheme = () => {
        this.setState(prevState => {
            const newTema = prevState.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTema);
            document.body.setAttribute('data-theme', newTema);

            return {theme: newTema}
        })
    }

    render(){
        const { theme } = this.state;
        const { children } = this.props;
        const handleToggleTheme = this.handleToggleTheme;
        return(
            <ThemeContext.Provider value={{theme, handleToggleTheme}}> 
                {children}
            </ThemeContext.Provider> 
        );
    }
}

export default ThemeProvider;