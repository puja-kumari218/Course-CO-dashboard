import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from "./Curriculum.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import curriculum from "../../Curriculum.json";

const AdditionalComponent = () => {

    return (
      <>
        <div className={styles.additionalComponent}>
          <div className={styles.leftHeading}>
            <h2>Our Features<br/>Special For You</h2>
          </div>
          <div className={styles.rightButtons}>
            <button className={styles.additionalButton}>Get Certifivate</button>
            <button className={styles.additionalButton}>Amazing Instructor</button>
            <button className={styles.additionalButton}>Lifetime Support</button>
            <button className={styles.additionalButton}>Video Lession</button>
          </div>
          <br/>
        
        </div>
          <hr className={styles.horizontalLine} />
          </>
      );
    };
    

const Curriculum = () => {

    const [curriculumData, setCurriculumData] = useState([]);

    useEffect(() => {
        setCurriculumData(curriculum.curriculumArray);
    }, []);

    console.log(curriculumData);
    // console.log(curriculum.curriculumArray)

    return (
        <div className={styles.curriculumContainer}>
            <div className={styles.curriculumHeaderContainer}>
                <div className={styles.leftCurriculumHeaderSection}>
                    <h1>
                        New Skills with CourseCo. <br />
                        A Detailed Look at Our Curriculum
                    </h1>
                </div>
                <div className={styles.rightCurriculumHeaderSection}>

                    <p>
                        With real world projects to create and <br />
                        online classes that fit a busy routine.
                    </p>

                    <button className={styles.button}>
                        Get Started <FaArrowCircleRight className={styles.arrowIcon} />
                    </button>
                </div>

            </div>

            
            <div style={{ display: "flex", justifyContent: "space-around" }}>
  {curriculumData.map((data, index) => {
    return (
      <Card key={index} className={index % 2 === 0 ? styles.leftCard : styles.rightCard}>
        <Card.Img className={styles.curriculumCardImg} variant="top" src={data.curriculumIcon} />
        <Card.Body>
          <Card.Title className={styles.curriculumCardTitle}>{data.curriculumTitle}</Card.Title>
          <Card.Text className={styles.curriculumCardText}>{data.curriculumDescription}</Card.Text>
        </Card.Body>
      </Card>
    );
  })}
</div>
<AdditionalComponent/>

        </div>

        


    )
}

export default Curriculum;
