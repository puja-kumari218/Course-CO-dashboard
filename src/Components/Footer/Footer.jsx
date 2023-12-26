import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import styles from './Footer.module.css'; // Import your stylesheet

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.centerContent}>
          <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
          <h2>Join The Community</h2>
          <p style={{fontSize:'20px'}}>
            At CourseCo, we believe that learning is a <br/>collaborative process.
          </p>
          </div>
          
          <div className={styles.subscribeContainer}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Enter your email" className={styles.emailInput} />
              <button className={styles.subscribeBtn}>
                Subscribe <FaArrowCircleRight className={styles.arrowIcon} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <div>
          <img src="CourseCologo.png" alt="Corseco Logo" className={styles.logo} />
          <h1>CourseCo</h1>
          </div>
          <div>
          <nav className={styles.footerNav}>
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>Community</li>
              <li>About</li>
            </ul>
          </nav>
          </div>
            <div className={styles.copyRight}>
        &copy; 2024 CourseCo.All rights reserved.
      </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
