import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class ProjectCompTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: ["Jira-ID","REQ#242"],
            listb: ["Project Manager","Manager1"],
            listc: ["Release","Release1"]

        }
   }
   

    render() {

        return (

            <div className="ProjectCompTwo">
                <Table striped borderless hover size="sm" className="css-table1">
                    <tbody >
                        <tr>
                           {this.state.lista.map(item => (
                            <td key={item}>
                                {item}
                            </td>
                           ))}
                        </tr>

                        <tr>
                           {this.state.listb.map(item => (
                            <td key={item}>
                                {item}
                            </td>
                           ))}
                        </tr>

                        <tr>
                           {this.state.listc.map(item => (
                            <td key={item}>
                                {item}
                            </td>
                           ))}
                        </tr>
                        
                    </tbody>    
                </Table>     

                <Table striped borderless hover size="sm" className="css-table2">
                    <tbody >
                        <tr>
                           {this.state.lista.map(item => (
                            <td key={item}>
                                {item}
                            </td>
                           ))}
                        </tr>

                        <tr>
                           {this.state.listb.map(item => (
                            <td key={item}>
                                {item}
                            </td>
                           ))}
                        </tr>

                        <tr>
                           {this.state.listc.map(item => (
                            <td key={item}>
                                {item}
                            </td>
                           ))}
                        </tr>
                        
                    </tbody>    
                </Table>               
            </div>
            )
    
            }
        
}

export default ProjectCompTwo;