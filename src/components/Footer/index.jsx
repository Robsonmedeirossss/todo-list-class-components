import React, { Component } from 'react';
import styles from './style.module.css';
import { Framer } from 'lucide-react';

class Footer extends Component{
    render() {
        return(
            <div className={styles.containerFooter}>
                <p>Todos os direitos reservados</p>
                <Framer />
            </div>
        );
    }
}

export default Footer;