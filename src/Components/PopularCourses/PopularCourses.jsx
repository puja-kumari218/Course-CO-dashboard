import React from 'react';
import { FaSearch, FaUser, FaStar, FaArrowRight } from 'react-icons/fa';
import styles from './PopularCourses.module.css';
import Card from 'react-bootstrap/Card';
import coursesData from '../../PopularCourse.json';
import { FaMagnifyingGlass } from "react-icons/fa6";

const PopularCourses = () => {
  return (
    <div className={styles.popularCoursesContainer}>
      {/* 1st Section */}
      <div className={styles.searchSection}>
        <h2>Popular Courses</h2>
        <div className={styles.searchBar}>
          <div className={styles.searchCourse}>
          <FaMagnifyingGlass className={styles.searchIcon}  style={{fontSize: "40px"}}/>

            {/* <FaSearch className={styles.searchIcon}  style={{fontSize: "50px"}} /> */}
          <input type="text" placeholder="Course Name" className={styles.searchInput} />
          <div className={styles.verticalLine} />
          <FaUser className={styles.userIcon} />
          <span className={styles.userInfo}>Instructor</span>
          </div>
          <button className={styles.searchButton}>
            <FaSearch className={styles.buttonIcon} />
            Search
          </button>
        </div>
      </div>

      {/* 2nd Section */}
      <div style={{ display: "flex" }} 
       className={styles.courseContainer}>
        {coursesData.courseArray.map((data, index) => (
          <Card key={index} className={styles.coursesCard} style={{ backgroundColor: data.courseBgColor }}>

            <div className={styles.courseHeader}>
            <Card.Img className={styles.courseCardImg} variant="top" src={data.courseIcon} />
           
              <div className={styles.cardTopSection}>
                <button className={styles.topBtn}>UI/UX</button>
                <Card.Title className={styles.courseCardTitle}>{data.courseTitle}</Card.Title>
              </div>
              </div>
              <Card.Body className={styles.courseDetailContainer}>
              <Card.Text className={styles.courseCardText}>{data.courseDescription}</Card.Text>
              <div className={styles.cardBottomSection}>
               <div>
               <button className={styles.bottomBtn}>
                  <FaUser className={styles.btnIcon} />
                  User
                </button>
                <button className={styles.bottomBtn}>
                  <FaStar className={styles.btnIcon} />
                  4.8
                </button>
               </div>
               <div>
               <span className={styles.leftText}>$135.00</span>
                <button className={styles.joinNowBtn}>
                  Join Now <FaArrowRight className={styles.btnIcon} />
                </button>

               </div>
              </div>

            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Button Section */}
      <button className={styles.viewAllButton}>View All Courses</button>
    </div>
  );
};

export default PopularCourses;
