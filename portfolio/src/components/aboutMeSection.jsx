import React, { Component } from 'react';
import styles from '../styles/aboutMeSection.module.css';
import Thomas from '../Images/Thomas.jpg'
import BackArrow from './backArrow';

class AboutMeSection extends Component {
    state = { } 
    render() { 
      return (
        <div>
            <div className={styles["about-me-container"]}>
                <div className={styles["about-me-title-container"]}>
                    <BackArrow onClick={this.props.goBackToMainMenu}/>
                    <h1 className={styles["about-me-header"]}>About Me</h1>
                </div>


                <div className={styles["about-me-section"]}>
                    <div className={styles["about-me-internal-section"]}>
                        <div className={styles["about-me-text"]}>
                            <p>Your paragraph about yourself goes here. Feel free to explain who you are, what you do, your interests, etc.</p>
                        </div>
                        <div className={styles["about-me-image"]}>
                            <img src={Thomas} alt="Your Name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

      );
    }
  }
  
  export default AboutMeSection;