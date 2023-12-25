import React from 'react';
import { FaSearch, FaUser, FaStar,FaArrowRight } from 'react-icons/fa';
import styles from './PopularCourses.module.css'; 

const PopularCourses = () => {
  return (
    <div className={styles.popularCoursesContainer}>
      {/* 1st Section */}
      <div className={styles.searchSection}>
  <h2>Popular Courses</h2>
  <div className={styles.searchBar}>
    <FaSearch className={styles.searchIcon} />
    <input type="text" placeholder="Course Name" className={styles.searchInput} />
    <div className={styles.verticalLine} />
    <FaUser className={styles.userIcon} />
    <span className={styles.userInfo}>Instructor</span>
    <FaSearch className={styles.searchIcon} />
    <span className={styles.searchText}>searches</span>
    <button className={styles.searchButton}>
      <FaSearch className={styles.buttonIcon} />
      Search
    </button>
  </div>
        
      </div>

      {/* 2nd Section */}
      <div className={styles.cardSection}>
        {/* Card 1 */}
        {/* <div className={styles.card}>
          <img src="image1.jpg" alt="Course 1" />
          <h3>Course Title 1</h3>
          <p>Course description goes here...</p>
          <div className={styles.ratingSection}>
            <FaStar className={styles.starIcon} />
            <span>4.5</span>
          </div>
          <div className={styles.actionSection}>
            <span>Left Text</span>
            <button>Right Button</button>
          </div>
        </div> */}

        {/* Card 2 (Similar structure as Card 1) */}
        {/* ... */}

        {/* Card 3 (Similar structure as Card 1) */}
        {/* ... */}
      </div>

      {/* Button Section */}
      <button className={styles.viewAllButton}>View All Courses</button>
    </div>
  );
};

export default PopularCourses;
