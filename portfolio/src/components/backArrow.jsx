import React, { Component } from 'react';

class BackArrow extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} style={{ cursor: 'pointer', width: '95px', color: "#FF7043"}}>
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M4.854 6.146a.5.5 0 010 .708L2.207 9.5l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" />
          <path d="M18 9.5a.5.5 0 00-.5-.5h-13a.5.5 0 000 1h13a.5.5 0 00.5-.5z" />
        </svg>
      </div>
    );
  }
}

export default BackArrow;
