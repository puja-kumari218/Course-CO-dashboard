import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <nav className={styles.navbar}>
                <img src="https://static-00.iconduck.com/assets.00/google-icon-1024x1024-hv1t7wtt.png" alt="Description of the image" />
                <h1>CourseCo</h1>
            </nav>
            <div className={styles.navLinks}>
                <Link to="/home">Home</Link>
                <Link to="/course">Course</Link>
                <Link to="/community">Community</Link>
                <Link to="/about">About</Link>
            </div>
            <button id={styles.signInBtn}>Sign In</button>

        </div>


    )
}

export default Header
