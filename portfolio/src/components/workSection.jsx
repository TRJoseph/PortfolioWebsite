import React, { Component } from 'react';
import styles from '../styles/workSection.module.css'; // import your styles

class WorkSection extends Component {
  state = {
    work: [
      {
        company: 'Company 1',
        location: 'City, State',
        position: 'Software Developer',
        description: 'My responsibilities included...'
      },
      {
        company: 'Company 2',
        location: 'City, State',
        position: 'Web Developer',
        description: 'I worked on...'
      },
      // more work experiences
    ],
  };

  render() {
    const { work } = this.state;
    
    return (
      <div className={styles["work-container"]}>
        <h1 className={styles["work-header"]}>Work Experience</h1>
        {work.map((job, index) => (
          <div className={styles["work-section"]} key={index}>
            <h2 className={styles["company"]}>{job.company}</h2>
            <h3 className={styles["location"]}>{job.location}</h3>
            <h4 className={styles["position"]}>{job.position}</h4>
            <p className={styles["description"]}>{job.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default WorkSection;
