import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from './Project.js'

class Projects extends Component {
    render() {
        return (
            <div>
                {
                    projects.allProjects.map(function(e) {
                        return <Project imgName= {e.imgName} title={e.title} description={e.description}/>;
                    })
                }
                
            </div>
        )
    }
}
export default Projects;