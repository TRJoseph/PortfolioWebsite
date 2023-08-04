import React, { Component } from 'react';
import NavBar from './navBar';
import styles from '../styles/educationSection.module.css';
import clemsonpaw from '../Images/clemsonpaw.png'
import chsLogo from '../Images/chsLogo.png'
import BackArrow from './backArrow';

class educationSection extends Component {

  // Each object contains a school and a degree (makes it easy to add more in the future)
  state = {
    education: [
      {
        school: 'Clemson University',
        years: '2020-Present',
        degree: 'Bachelor of Science in Computer Engineering',
        logoSource: clemsonpaw,
        description: 'This is where I am currently pursuing a comprehensive degree with a focus on hardware and software integration. Gaining practical experience through projects in classes such as systems programming and operating systems. I am a rising senior with a planned graduation date in December of 2024.',
      },
      {
        school: 'Camden High School',
        years: '2016-2020',
        degree: 'High School Diploma',
        logoSource: chsLogo,
        description: 'This is where I completed my high school education. I played on the Varsity Golf team and was involved in the National Honors Society as well as Beta Club.',
      },
      // more education history
    ],
  };
  

  render() {
    const { education } = this.state;
    
    return (
      <div>

      <div className={styles["education-container"]}>
        <div className={styles["education-title-container"]}>
        <BackArrow onClick={this.props.goBackToMainMenu}/>
          <h1 className={styles["education-header"]}>Education</h1>
        </div>

      {education.map((edu, index) => {
        let h2Class = '';
        let imgClass = '';
        if(edu.school === 'Clemson University') {
          h2Class = styles['clemson-university'];
          imgClass = styles['cuLogo']
        }
        if(edu.school === 'Camden High School') {
          h2Class = styles['camden-high-school'];
          imgClass = styles['chsLogo']
        }
        return (
          <div className={styles["education-section"]} key={index}>
            <div className={styles["education-header-container"]}>
              <h2 className={h2Class}>{edu.school}</h2>
              <img src={edu.logoSource} className={imgClass}></img>
            </div>
            <h4 className={styles["years"]}>{edu.years}</h4>
            <h3>{edu.degree}</h3>
            <p>{edu.description}</p>
          </div>
        )
      })}
    </div>
      </div>
      
    );
  }
}

export default educationSection;
