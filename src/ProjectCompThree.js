import React, { Component } from 'react';

const projJson = [
    {
        projectName: "Joe's project",
        OwnerName: "summer"
    },
    {
        projectName: "Ethan's project", 
        OwnerName: "Bolton"
    },
    {
        projectName: "Mona's project",
        OwnerName: "Mikkleson"
    },
    {
        projectName: "Some Project",
        OwnerName: "Some owner"
    },
    {
        projectName: "Last Project",
        ownerName: "Last owner"
    },
]



class ProjectCompThree extends Component {

constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
    
   
        


        return (

            <div className="ProjectCompThree">         
                <p>Component Three</p>
                <div>
                <p>{JSON.stringify(projJson)}</p>

                </div>



            </div>

                
        

        )
        }

}

export default ProjectCompThree;