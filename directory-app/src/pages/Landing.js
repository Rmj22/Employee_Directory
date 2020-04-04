import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
// import './style.css';
import EmplyCard from '../components/Card';
import employee from '../employee.json'
import Button from 'react-bootstrap/Button'



class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee,
            filterEmp: employee
        };
    }

    handleClick = async event => {
        if (event.target.innerText === 'All') {
            await this.setState({
                filterEmp: employee
            });
        } else {
            let empCopy = employee.filter(employee => {
                return employee.maturity === event.target.innerText
            });

            await this.setState({
                filterEmp: empCopy
            })
        }
    };

    handleSort = async event => {
        let sortedArray = this.state.filterEmp
        
        if (event.target.innerText === 'Ascending') {
            sortedArray.sort((a, b) => { return a.popularity - b.popularity });
            
            await this.setState({
                filterEmp: sortedArray
            });
        } else if (event.target.innerText === 'Descending') {
            sortedArray.sort((a, b) => { return b.popularity - a.popularity });
            await this.setState({
                filterEmp: sortedArray
            });
        } else {
            sortedArray.sort((a, b) => { return a.id - b.id });
            await this.setState({
                filterEmp: sortedArray
            });
        }
    }

    render() {
        return (
            <div>
                
                <h5>Sort</h5>
                <Button onClick={this.handleSort} variant="success">Ascending</Button>{' '}
                <Button onClick={this.handleSort} variant="success">Descending</Button>{' '}
                <Button onClick={this.handleSort} variant="success">Reset</Button>{' '}

                <Container>
                    <Row className="justify-content-md-center">
                        {this.state.filterEmp.map(employee => (
                            <EmplyCard
                                id={employee.id}
                                key={employee.id}
                                name={employee.name}
                                image={employee.image}
                                location={employee.location}
                                occupation={employee.occupation}
                                popularity={employee.popularity}
                                
                            />
                        ))}

                    </Row>
                </Container>
            </div>
        )
    }
}
export default Landing;