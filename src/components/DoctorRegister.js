import React, { Component } from 'react';
import './Doctor.css';
import Doctor from '../assets/hospital.svg'
import { Card, CardBody } from 'reactstrap';
class DoctorRegister extends Component {
    render() {
        return (
            <div className="container">
                <div className="row  justify-content-center ">
                    <Card className="mt-5 col-12 col-md-6 items">
                        <h1 className="title mt-5">Register as Hospital</h1>
                        <CardBody>
                            <img src = {Doctor} height = "200px" />
                            <form className = "mt-5">
                                <input className="inputitem" type="text"  placeholder="Enter the name" />
                                <input className="inputitem" type="email"  placeholder="Enter your email" />
                                <input className="inputitem" type="password"  placeholder="Enter the password" />
                                <input className="inputitem" type="password"  placeholder="Repeat the password" />
                                <input className="inputitem" type="text" placeholder="Enter your state" />
                                <input className="inputitem" type="text"  placeholder="Enter the locality" />               
                                <button className="red ripple">Submit</button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }

}

export default DoctorRegister;