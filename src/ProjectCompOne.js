import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';


class ProjectCompOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projName: "Project1",
            teamName: "Customer Management"
        }
    }

    render() {

        return (

            <div className="ProjectCompOne">         
            <h2>          
            {this.state.projName} <Badge variant="success">{this.state.teamName}</Badge>
            </h2>
            </div>

        )


    }

}

export default ProjectCompOne;