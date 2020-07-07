import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

 
class Menu extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

                <a className="navbar-brand" href="#">FutureClub</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" onClick={() => this.props.change("home")}>
                            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" onClick={() => this.props.change("nosotros")}>
                            <a className="nav-link" >Nosotros</a>
                        </li>
                        <li className="nav-item" onClick={() => this.props.change("proyectos")}>
                            <a className="nav-link" >Proyectos</a>
                        </li>
                        <li className="nav-item" onClick={() => this.props.change("contacto")}>
                            <a className="nav-link" >Contacto</a>
                        </li>
                        <li className="nav-item" onClick={() => this.props.change("login")}>
                            <a className="nav-link" >login</a>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
                
            </nav>
        )
        
    }
 
}
 
export default Menu;