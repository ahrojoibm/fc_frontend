import React from 'react';
 
class Detalles extends React.Component {
 
    render() {
    
        return (
    
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Objetivo</h2>
                        <p>Completar el programa de estudio a través del desarrollo de los cursos y complementarlo con una participación activa en MVP's logrando así aprender e integrar las tecnologías de IBM.</p>
                    </div>
                    <div className="col-md-4">
                        <h2>Misión</h2>
                        <p>Formar a nuestros students de la mejor manera posible preparándolos para trabajar con las tecnologías de IBM y afrontar los desafíos de la industria tecnológica.  </p>
                    </div>
                    <div className="col-md-4">
                        <h2>Visión</h2>
                        <p>Expandir el programa a otras áreas de IBM logrando formar para cada una futuros Ibmers que conozcan las tecnologías y metodologías de IBM.</p>
                    </div>
                </div>
    
                <hr/>
    
            </div>
    
        )
        
    }
 
}
 
export default Detalles;