import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from './Project.js'

class Projects extends Component {
    render() {
        return (
            <div id="portfolio">
                {
                    projects.allProjects.map(function(e) {
                        return <Project 
                        imgName= {e.imgName} 
                        title={e.title} 
                        description={e.description}
                        key = {e.title}
                        />;
                    })
                }
                
            </div>
        )
    }
}
export default Projects;