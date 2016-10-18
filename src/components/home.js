import React, { Component } from 'react';
import styles from './home.css'
import Helmet from 'react-helmet';

const Home = React.createClass({
    getInitialState() {
        return {
            results: [
                {
                    id: 1,
                    img: 'https://i1.sndcdn.com/artworks-000064322474-h8q92y-t500x500.jpg',
                    title: 'Daft Punk - Get Lucky (DJ Pretentious Oriental Chillout Remix)',
                    artist: 'DJ Pretentious',
                    duration: '5:25'

                },
                {
                    id: 2,
                    img: 'https://i1.sndcdn.com/artworks-000073771952-zn5qxy-t500x500.jpg',
                    title: 'Café Del Mar Chillout Mix October 2013',
                    artist: 'Café del Mar',
                    duration: '53:43'

                }
            ],
            query: 'Chillout'
        }
    },
    render() {

        let content = <div className={styles.centered}><p className={styles.empty}>No results</p></div>
        if (this.state.results && this.state.results.length) {
            content = (<ul className={styles.queue}>
                {this.state.results.map(function (item) {
                    return <li className={styles.item} key={item.id}>
                        <img src={item.img} className={styles.thumb}/>
                        <div className={styles.textContainer}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.info}>from {item.artist} {item.duration}</p>
                        </div>
                        <a href="#" className={styles.btnPlay}><i className='material-icons'>play_arrow</i></a>
                        <a href="#" className={styles.btnAdd}><i className='material-icons'>playlist_add</i></a>
                    </li>;
                })}
            </ul>)
        }

        return (
            <div className={styles.container}>
                <Helmet
                    title='Queue'
                    titleTemplate='SoundCloud Audiense Player - %s'
                    meta={[
                        {'char-set': 'utf-8'},
                        {'name': 'description', 'content': 'Audience Test by Miguel San Segundo'}
                    ]}
                />
                <input type="text" className={styles.searchBox} defaultValue={this.state.query} placeholder="Search songs in SoundCloud"/>
                {content}
            </div>
        );
    }
})

export default Home