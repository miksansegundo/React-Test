const React = require('react')
import { Link } from 'react-router';
import styles from './menu.css';

const Menu = () => (
    <nav>
        <ul className={styles.menu}>
            <li className={styles.item}><Link to='/' className={styles.link} activeClassName={styles.linkActive}><i className='material-icons'>search</i>Search</Link></li>
            <li className={styles.item}><Link to='/queue' className={styles.link} activeClassName={styles.linkActive}><i className='material-icons'>list</i>Queue</Link></li>
            <li className={styles.item}><Link to='/about' className={styles.link} activeClassName={styles.linkActive}><i className='material-icons'>business</i>About</Link></li>
        </ul>
    </nav>
)

export default Menu