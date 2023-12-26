// MainContainer.js
import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import styles from './MainContainer.module.css';
import Curriculum from '../Curriculum/Curriculum';
import PopularCourses from '../PopularCourses/PopularCourses';
import LearnCourseCo from '../LearnCourseCo/LearnCourseCo';
import SkillBuildingSection from '../SkillBuildingSection/SkillBuildingSection';
import Footer from '../Footer/Footer';
const MainContainer = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div>
            <h1 className={styles.heading}>Master New Skills<br />
              with CourseCo
            </h1>
            <p className={styles.introText}>
              Are you tired of pulling all-nighters ans still struggling <br />to keep up with your coursework?
            </p>
          </div>
          <div className={styles.getStartedSection}>
            <button className={styles.button}>
              Get Started <FaArrowCircleRight className={styles.arrowIcon} />
            </button>

            <div className={styles.imageContainer}>
              <img className={styles.image} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQW1gsN0RcxAf_tyiRr1PSZC4V-FH-3-b_9A5QoNYCXYYxOFxl3" alt="Image 1" />
              <img className={styles.image} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRk2g9_ByWb3Wmh_2kZ6wQjpZixGTxrbdWMy4nLTCmO8EM4fn0p" alt="Image 2" />
              <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rgPbEqKDYIY_m4ehfoE2gtprKilgD2rEBh_dpwYyaLNfFkOm" alt="Image 3" />
            </div>
            <div>
              <span className={styles.sectionHeading}>42k +</span><br />
              <span className={styles.sectionText}>
                Using this app
              </span>
            </div>
          </div>
          <div className={styles.magazineContainer} >
            <img className={styles.magazineImg} src="img1.png" alt="Image 3" />
            <img className={styles.magazineImg} src="img2.png" alt="Image 3" style={{ width: "110px", height: "50px", position: "relative", bottom: "14px" }} />
            <img className={styles.magazineImg} src="img3.png" alt="Image 3" style={{ width: "110px", height: "100px", position: "relative", top: "8px" }} />

          </div>

        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <img className={styles.bigImage} src="home.png" alt="Big Image" />
        </div>
      </div>
      {/* Curriculum Container */}
      <Curriculum />
      <PopularCourses/>
      <LearnCourseCo/>
      <SkillBuildingSection/>
      <Footer/>
    </>
  );
};

export default MainContainer;
