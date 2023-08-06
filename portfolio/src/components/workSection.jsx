import React, { Component } from 'react';
import styles from '../styles/workSection.module.css'; // import your styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import BackArrow from './backArrow';

class WorkSection extends Component {
  state = {
    work: [
      {
        company: 'RAAMP, Inc.',
        timeWorked: 'May 2023 - Present',
        location: 'Greenville, SC',
        position: 'Full-Stack Software Developer',
        description: 'My responsibilities included...',
        website: 'https://raamp.com'
      },
      {
        company: 'Aerie Engineering',
        timeWorked: 'May 2022 - Mar 2023 • 12 months',
        location: 'Greenville, SC',
        position: 'Software Development Intern',
        description: `During my tenure at Aerie Engineering, I had the opportunity to contribute to a variety of projects. The cornerstone of Aerie's portfolio is AerieHub, 
        a web-based application designed to simplify space management. This application became my primary focus during my time with the company. One of my initial projects 
        involved enhancing the documents module of AerieHub by programming thumbnail generation functionality for the backend. This feature improved the user experience by providing 
        small previews of documents within the application. Following this, I was tasked with a comprehensive revamp of the 'print' and 'export' features in the space management module. 
        As a part of this upgrade, I incorporated new capabilities, such as allowing 'pins' to be included in the exported SVG files. These 'pins' served as visual markers, highlighting 
        key items within a building floor layout. This addition made it easier for users to navigate and understand the spatial layout of a building when viewing 
        exported files.`,
        website: 'https://about.aeriehub.com/'

      },
      {
        company: 'Itron, Inc.',
        timeWorked: 'Aug 2022 - Jan 2023 • 6 months',
        location: 'Seneca, SC',
        position: 'Firmware R&D Co-Op',
        description: `This co-op involved a work rotation during my Fall semester of my junior year at Clemson.
        Instead of taking classes I took the semester to get my foot in the door and gain some real-world experience. The primary long-term
        project that my co-worker and I were tasked with involved ongoing maintenance for the test gas meter units. The new influx of work
        that we were given throughout our rotation was different on a daily basis. Sometimes we would be required to research how to configure and
        optimize debian operating systems in order to write bash scripts that would help to automate common developer tasks. Writing documentation for
        these programs was a huge portion of the projects as well as these scripts would be getting ported to a production environment. `,
        website: 'https://www.itron.com/'
      },
      // more work experiences
    ],
  };

  render() {
    const { work } = this.state;
    return (
      <div className={styles["work-container"]}>
        <div className={styles["work-title-container"]}>
          <BackArrow onClick={this.props.goBackToMainMenu}/>
          <h1 className={styles["work-header"]}>Work Experience</h1>
        </div>

        {work.map((job, index) => (
          <div className={styles["work-section"]} key={index}>
            <h1 className={styles["company"]}>
              {job.company}
              <a className={styles["work-external-link"]} href={job.website} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> {/* Font Awesome external link icon */}
              </a>
            </h1>
            <h2 className={styles["position"]}>{job.position}</h2>
            <h4 className={styles["h4Element"]}>{job.timeWorked}</h4>
            <h4 className={styles["h4Element"]}>{job.location}</h4>
            <p className={styles["description"]}>{job.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
}

export default WorkSection;
