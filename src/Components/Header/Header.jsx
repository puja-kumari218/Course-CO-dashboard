import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <nav className={styles.navbar}>
                <img src="CourseCologo.png" alt="Description of the image" />
                <h1>CourseCo</h1>
            </nav>
            <div className={styles.navLinks}>
                <Link to="/">Home</Link>
                <Link to="/">Course</Link>
                <Link to="/">Community</Link>
                <Link to="/">About</Link>
            </div>
            <button id={styles.signInBtn}>Sign In</button>

        </div>


    )
}

export default Header
