import styles from './app.css';
import React, { Component } from 'react';
import Menu from '../components/menu';


class App extends Component {

    render() {
        return (
            <section className={styles.section}>
                <header className={styles.header}>Audience player</header>
                <Menu/>
                {this.props.children}
            </section>
        );
    }
}

export default App;