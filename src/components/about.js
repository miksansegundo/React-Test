import React, { Component } from 'react';
import styles from './about.css'
import Helmet from 'react-helmet';

class About extends Component {

    render() {
        return (
            <section className={styles.container}>
                <Helmet
                    title='About'
                    titleTemplate='SoundCloud Audiense Player - %s'
                    meta={[
                        {'char-set': 'utf-8'},
                        {'name': 'description', 'content': 'Audience Test by Miguel San Segundo'}
                    ]}
                />
                <header>
                    <h1 className={styles.header}>Miguel San Segundo</h1>
                </header>

                <p>Hello there! I am a <strong>Web Developer</strong> with passion for JavaScript. I am able to develop both sides of web applications, <strong>client/browser side and server side</strong>. I enjoy enhancing the user experience with JavaScript and creating digital experiences. I love to work as a team to bring designers’ creations to life, turning mock-ups and wire-frames into living cross-browser and cross-device applications.</p>
                <p>I am a perpetual learner who loves to share knowledge and learn new things. I really like to work in <strong>Innovation>Innovation, Research & Development</strong> with Web technologies.</p>
                <p>Please contact me for remote collaborations only because I am living happily in Thailand.</p>

                <a href="https://th.linkedin.com/in/fullstackjavascriptdev/en" className={styles.link}>
                    Hire me
                </a>
            </section>
        );
    }
}

export default About;