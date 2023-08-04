import React, { Component } from 'react';
import styles from '../styles/projectSection.module.css'; // import your styles

class projectSection extends Component {
    state = {
        projects: [
          {
            project: 'Complete Prusa Mk3S 3D Printer Overhaul',
            timePeriod: 'Sept-Oct 2022',
            description: '',
            link: '',
          },
          {
            project: '',
            timePeriod: '',
            description: '',
            link: '',
          },
          {
            project: '',
            timePeriod: '',
            description: '',
            link: '',
          },
          {
            project: '',
            timePeriod: '',
            description: '',
            link: '',
          },
          // more projects
        ],
      };
    render() { 
      const { projects }= this.state;
        return (<div>
          <h1 className={styles["project-header"]}>My Projects</h1>
          <div className={styles["page-container"]}>
            <div className={`${styles['project-container']} ${styles['grid-container']}`}>
            {projects.map((project, index) => (
              <div key={index} className={`${styles['project-section']} ${styles['grid-item']}`}>
                <h1 className={styles["project-title"]}>{project.project}</h1>
                <h2 className={styles["project-date"]}>{project.timePeriod}</h2>
              </div>
            ))}
          </div>
        </div>
          </div>);
    }
}
 
export default projectSection;