import React from 'react';
 
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
import DetallesProyecto from './detallesProyecto/DetallesProyecto';
 
 
class ProyectoPage extends React.Component {
 
    render() {
        return(
            <>
                <DetallesProyecto></DetallesProyecto>
                <Footer></Footer>
            </>
        
        )
    }
}
 
export default ProyectoPage;