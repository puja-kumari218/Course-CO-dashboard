import React from 'react';
import styles from "./LearnCourseCo.module.css";
import { FaCheckCircle } from 'react-icons/fa';

const LearnCourseCo = () => {
    return (
        
        <div className={styles.learnCourseCoContainer}>
            <div className={styles.learnCourseCoLeftSection}>
                <img src="CourseCoImg.png" alt="Learn CourseCo" />
            </div>
            <div className={styles.learnCourseCoRightSection}>
                <h2>Why We Learn<br /> From CourseCo
                </h2>
                <p>
                    Looking to expand your skills and explore your creativity? Our hands-on creative classes are the perfect way to learn at your own pace and discover new talents.

                </p>
                <div className={styles.checkIcons}>
                    <div className={styles.checkIcon}>
                        <FaCheckCircle className={styles.checkCircleIcon} />
                        <p>Expert Instructors
                        </p>
                    </div>
                    <div className={styles.checkIcon}>
                        <FaCheckCircle className={styles.checkCircleIcon} />
                        <p>Collaborative Learning
                        </p>
                    </div>
                    <div className={styles.checkIcon}>
                        <FaCheckCircle className={styles.checkCircleIcon} />
                        <p>Innovative Curriculum
                        </p>
                    </div>
                </div>
                <img src="additionalImage.png" alt="Additional Image" />
            </div>
        </div>
    );
};


export default LearnCourseCo;
