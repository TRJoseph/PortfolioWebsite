import React, { Component, useState } from 'react';
import { Transition } from 'react-transition-group'
import { Outlet, Link } from "react-router-dom";
import styles from '../styles/navMenu.module.css'

class navMenu extends Component {
    constructor() {
        super();
        this.state = {
            menuExpanded: false,
            menuTopBarY: 3,
            menuBottomBarY: 2,
            menuMiddleBarY: 10,
            expandedMenuOpacity: 0,
            displayMenuItems: 'none'
        }
    }
    
    state = {  } 
    render() { 
        return (<nav onMouseEnter={() => this.doNavMenuAnimations()} onMouseLeave={() => this.undoNavMenuAnimations()} onClick={() => this.expandMenu()} id={styles.navMenu} className={styles.menu}>
            <span>Menu</span>
            <ul>
                <span style={{opacity: this.state.expandedMenuOpacity}} className={styles.expandedMenuX}>&#10006;</span>
                <i style={{top: this.state.menuTopBarY}}>
                    <Link to="/about-me" style={{opacity: this.state.expandedMenuOpacity, display: this.state.displayMenuItems}} id={styles.firstMenuItemLabel} className={styles.expandedMenuItem}>About Me</Link>
                </i>
                <i style={{top: this.state.menuMiddleBarY}}>
                    <Link style={{opacity: this.state.expandedMenuOpacity, display: this.state.displayMenuItems}} id={styles.secondMenuItemLabel}  className={styles.expandedMenuItem}>Work Experience</Link>
                </i>
                <i style={{bottom: this.state.menuBottomBarY}}>
                    <Link style={{opacity: this.state.expandedMenuOpacity, display: this.state.displayMenuItems}} id={styles.thirdMenuItemLabel}  className={styles.expandedMenuItem}>Projects</Link>
                </i>
            </ul>
        </nav>);

    }

    doNavMenuAnimations() {
        if(this.state.menuExpanded === false) {
            this.setState({
                menuTopBarY: -2.5,
                menuBottomBarY: -2.5,
                menuMiddleBarY: 10
            })
        }
    }

    undoNavMenuAnimations() {
        if(this.state.menuExpanded === false) {
            this.setState({
                menuTopBarY: 3,
                menuBottomBarY: 2,
                menuMiddleBarY: 10
            })
        }

    }

    expandMenu() {
        if(this.state.menuExpanded === true) {
            this.setState({
                displayMenuItems: 'none',
                menuExpanded: false,
                menuTopBarY: 3,
                menuBottomBarY: 2,
                menuMiddleBarY: 10,
                expandedMenuOpacity: 0,
            })

        } else {
            this.setState({
                displayMenuItems: 'block',
                menuTopBarY: 52,
                menuMiddleBarY: 87,
                menuBottomBarY: -105,
                expandedMenuOpacity: 1,
                menuExpanded: true
            })
        }

    }
}
 
export default navMenu;