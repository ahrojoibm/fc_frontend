import React from 'react';
 //
import Menu from '../menu/Menu'; 
import Slider from './slider/Slider';
import Proyectos from './proyectos/Proyectos';
import Footer from '../footer/Footer';
 
class Home extends React.Component {
 
    render() {
    
        return(
            <> 
                <main role="main" className="flex-shrink-0 mt-5">
                    <div className="container">
                        <Slider/> 
                        <Proyectos />  
                        <hr className="featurette-divider" />
                    </div>
                </main>
                <Footer />
            </>
        
        )
    
    }
 
}
 
export default Home;