import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from '../components/home/Home'; 
import Nosotros from '../components/nosotros/Nosotros';
import Contacto from '../components/contacto/Contacto';
import ProyectosFC from '../components/proyectosFC/ProyectosFC';
import Menu from '../components/menu/Menu';

import axios from "axios";

class App extends Component {

    state = {
      page: "home"
    }

    changePageHandler = (newPage) => {
      this.setState({page: newPage})
    }

    callApiHandler = () => {
      //console.log(process.env.BACKEND_URL)
      let config = {
        headers: {'Access-Control-Allow-Origin': '*'}
      };
      axios.get('http://fc-backend3-default.team-kors-cluster-4860349f6a1f3fb50b8ba96afd99ce5f-0000.us-south.containers.appdomain.cloud/projects/all', config).
      then( response => {
        console.log(response)
      }).catch( error => {
        console.log(error)
      })
    }

    render() {

      let view = null;
      
      if (this.state.page === 'home') {
        view = (<Home/>)
      } else if (this.state.page === 'nosotros') {
        view = (<Nosotros/>)
      } else if (this.state.page === 'contacto') {
        view = (<Contacto/>)
      } else {
        view = (<ProyectosFC/>)
      }

      return (
        <div className="App">
          <Menu change={this.changePageHandler}></Menu>
          {view}
          <button className="btn btn-primary" onClick={this.callApiHandler}>Press me</button>
        </div>
      );
    }
}

export default App;
