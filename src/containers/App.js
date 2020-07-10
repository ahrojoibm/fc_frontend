import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from '../components/home/Home'; 
import Nosotros from '../components/nosotros/Nosotros';
import Contacto from '../components/contacto/Contacto';
import ProyectosFC from '../components/proyectosFC/ProyectosFC';
import Menu from '../components/menu/Menu';
import Login from '../components/login/Login';

import axios from "axios";

//url = process.env.REACT_APP_BACKEND_URL;

class App extends Component {

    state = {
      page: "home"
    }

    changePageHandler = (newPage) => {
      this.setState({page: newPage})
    }

    render() {

      let view = null;
      
      if (this.state.page === 'home') {
        view = (<Home/>)
      } else if (this.state.page === 'nosotros') {
        view = (<Nosotros/>)
      } else if (this.state.page === 'contacto') {
        view = (<Contacto/>)
      } else if (this.state.page === 'login') {
          view = (<Login/>)
      } else {
        view = (<ProyectosFC/>)
      }

      return (
        <div className="App">
          <Menu change={this.changePageHandler}></Menu>
          {view}
        </div>
      );
    }
}

export default App;
