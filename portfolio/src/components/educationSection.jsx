import React, { Component } from 'react';

class educationSection extends Component {

  // Assuming your education data is an array of objects where each object represents an educational experience.
  // Each object contains a school and a degree
  state = {
    educationData: [
      {
        school: 'University of XYZ',
        degree: 'Bachelor of Science in Computer Science',
      },
      {
        school: 'ABC College',
        degree: 'Associate Degree in Information Systems',
      },
      // add more as needed
    ],
  };

  render() {
    return (
      <div className="education-section">
        <h2>Education</h2>
        {this.state.educationData.map((education, index) => (
          <div key={index} className="education-item">
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default educationSection;
