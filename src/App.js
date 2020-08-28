import React, { Component } from 'react';
import Header from './components/HeaderComponent'
import Login from './components/Login';
import Register from './components/PatientRegister';
import DoctorRegister from './components/DoctorRegister';
import NavbarItem from './components/NavbarItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <Login /> */}
        <NavbarItem />
        <DoctorRegister />
      </div>
    );
  }

}

export default App;

