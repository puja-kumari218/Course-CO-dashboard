// SkillBuildingSection.jsx

import React, { useState, useEffect } from 'react';
import styles from "./SkillBuildingSection.module.css";
import skillBuildingData from "../../SkillBuildingSection.json";
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const SkillBuildingSection = () => {
  const [skillBuilding, setSkillBuilding] = useState([]);

  useEffect(() => {
    setSkillBuilding(skillBuildingData.skillBuildingArray);
  }, []);

  return (
    <div className={styles.skillBuildingContainer}>
      <div className={styles.skillBuildingHeaderContainer}>
        <h1>A Skill-Building Journey
          <br/>
          With CourseCo
        </h1>
        <p>How CourseCo's Courses Helped You Master New Skills <br/>
        and Advanced in your career
         </p>
      </div>
      <div className={styles.skillBuildingCardContainer}>
        {skillBuilding.map((skill, index) => (
          <Card key={index} className={styles.skillCard} style={{ backgroundColor: skill.skillBuildingBgColor }}>
           <div className={styles.skillCardHeader}>
            <Card.Img className={styles.skillCardIcon} variant="top" src={skill.skillBuildingIcon} />
            <div>
            <Card.Title className={styles.skillCardTitle}>{skill.skillBuildingTitle}</Card.Title>
            <Card.Text className={styles.skillCardText1}>{skill.skillBuildingText}</Card.Text>
            </div>
           </div>
            <Card.Body>
              
              {/* <Card.Title className={styles.skillCardTitle}>{skill.skillBuildingTitle}</Card.Title> */}
              {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={styles.starIcon} style={{position: "relative", right: "80px",marginBottom:"10px"}} />
                ))}

             <div className={styles.skillBuildingDetails}>
             <Card.Text className={styles.skillCardText} style={{marginBottom: "20px"}}>{skill.skillBuildingDescription}</Card.Text>
              <div className={styles.skillCardRating}>
              </div>
              <button className={styles.skillCardBtn}>{skill.skillType}</button>
              <p className={styles.skillName}>{skill.skillName}</p>
             </div>

            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillBuildingSection;
