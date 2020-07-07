import React from 'react';
 
import Footer from '../footer/Footer';
import axios from 'axios';
 

 
class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    loginHandler = (event) => {
        let body = {
            'username': this.state.username,
            'password': this.state.password
        }
        axios.post(process.env.REACT_APP_BACKEND_URL + '/api/token/', body)
        .then(response => {
            window.localStorage.setItem('token', response.data['token']);
            console.log(response);

        }).catch(error => {
            console.log(error);
        })

    }
 
    render() {
        return(
            <>
                <main role="main" className="flex-shrink-0 mt-5">
                    <div className="container">
                        <div className="card bg-dark text-white">
                            <div className="card-body">
                                <h2>Inicio de Sesion</h2>
                                <form action="/" className="was-validated">
                                    <div className="form-group">
                                        <label for="user">Nombre de Usuario:</label>
                                        <input type="text" className="form-control" id="user" 
                                        placeholder="Enter username" 
                                        name="user" 
                                        onChange={this.usernameHandler} 
                                        value={this.state.username} 
                                        required></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="pass">Contraseña:</label>
                                        <input type="password" className="form-control" id="pass" 
                                        placeholder="Enter password" 
                                        name="pass"
                                        onChange={this.passwordHandler} 
                                        value={this.state.password} 
                                        required></input>
                                    </div>
                                    <button type="submit" className="btn btn-secondary" onClick={this.loginHandler}>Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        
        )
    }
}
 
export default Login;