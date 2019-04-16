import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CSSTransition } from 'react-transition-group';

const projects = [

    {
        projectName: "Joe's project"
    },
    {
        projectName: "Ethan's project"
    },
    {
        projectName: "Mona's project"
    },
    {
        projectName: "Some Project"
    },
    {
        projectName: "Last Project"
    },
]



class Navi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appearHome: true,
            query: '',
            results: [],
        }
    }

    searchHandler = () => {
        this.setState({
          query: this.search.value
        })
    }

    getInfo = () => {
        


    }


    render() {
        const { appearHome } = this.state;

        return (
            <div className="Navi">

                <Navbar bg="light" variant="light" >

                    <CSSTransition
                        in={appearHome}
                        appear={true}
                        timeout={3000}
                        classNames="fade"
                    >

                        <Navbar.Brand className='fade'>Project Planner
                        </Navbar.Brand>

                    </CSSTransition>

                    <Nav className="mr-auto">
                        <Nav.Link href="#App">Home</Nav.Link>
                    </Nav>

                    <CSSTransition
                        in={appearHome}
                        appear={true}
                        timeout={3000}
                        classNames="fade"
                    >
                        <Button className='mr-3 fade' variant="primary">Admin</Button>

                    </CSSTransition>


                    <Form inline>
                        <FormControl type="text" placeholder="Enter Project" className="mr-sm-2" 
                        ref={input => this.search = input}
                        onChange={this.searchHandler}
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
                <p>{this.state.query}</p>
            </div>
        )
    }

}

export default Navi;