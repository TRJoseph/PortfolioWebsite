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
                            <h1>Senior Computer Engineering Student | Full-Stack Developer | Academic Tutor | Tech Enthusiast</h1>
                            <p>Welcome! I'm Thomas Joseph, currently navigating my senior year at Clemson University, where I'm immersed in the intricate world of Computer Engineering. My journey in tech has been a blend of academic rigor and practical application, deeply enriched by my role as a tutor at the Academic Success Center. There, I assist peers in understanding challenging concepts in Electric Circuits and Logic and Computing Devices, further solidifying my own knowledge and honing my instructional skills.

                                In my professional sphere, I'm a Full-Stack Software Developer at RAAMP, a leader in lease management software. My key accomplishment here includes orchestrating a major shift in our payment processing system from Stripe to Payrix, enhancing operational efficiency and financial performance.

                                Outside the classroom and office, I'm an avid golfer, enthusiastic gamer, and a passionate programmer, always eager to delve into new technologies. My fascination with AI, programming, and electronics is both a professional pursuit and a personal passion.

                                As I advance in my academic and professional career, I'm keen on expanding my technical expertise while also exploring the business aspects of the tech industry. I am committed to growing not just as a developer, but as an individual, embracing new challenges and opportunities for learning.</p>
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