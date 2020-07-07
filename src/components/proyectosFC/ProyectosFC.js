import React from 'react';
 
import Menu from '../menu/Menu';
import Card from './Cards/Card';

import axios from 'axios';
 
import Footer from '../footer/Footer';
import JumbotronProyectos from './jumbotronProyectos/JumbotronProyectos';

class ProyectosFC extends React.Component {

   /*  constructor() {
        config = { 'header': {
                    'Authorization': 'Bearer ' + localStorage['token']
                }
        }
        axios.get('http://fc-backend3-default.team-kors-cluster-4860349f6a1f3fb50b8ba96afd99ce5f-0000.us-south.containers.appdomain.cloud/projects/all', config).
        then(response => {
            console.log(response);
            state = {
                projects: response.body['docs']
            }
        }).catch(
            error => {
                console.log(error);
            }
        )
    } */
 
    render() {

        const projectList = this.state.projects.map((project, index) => {
            return <Card 
              project={project}
              name={project.name} 
              summary={project.summary}
              key={project._id} />;
          });
    
        return(
        
        <>
            <main role="main" className="flex-shrink-0 mt-5">
            
                <section className="text-center">
                    <JumbotronProyectos/>
                </section>
                
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {projectList}
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
 
export default ProyectosFC;