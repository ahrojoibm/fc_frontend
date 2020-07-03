import React from 'react';
 
import Menu from '../menu/Menu';
import Formulario from './formulario/Formulario';  
import Mapa from './mapa/Mapa';
import Footer from '../footer/Footer';
import JumbotronContacto from './jumbotronContacto/JumbotronContacto';
 
 
class Contacto extends React.Component {
 
    render() {
        return(
            <>
                <JumbotronContacto/>
                <main role="main" className="flex-shrink-0 mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <Formulario />
                            </div>
                            <div className="col-md-6">
                                <Mapa />
                            </div>
                        </div>
                    </div> 
                </main>
                <hr/>
                <Footer />
            </>
        )
    }
}
 
export default Contacto;