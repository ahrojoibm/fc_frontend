import React from 'react';

class Slider extends React.Component {
 
    render() {
   
        return (
            <div id="slider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#slider" data-slide-to="0" className="active"></li>
                    <li data-target="#slider" data-slide-to="1"></li>
                    <li data-target="#slider" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img className="img-fluid" src="https://www.borngroup.com/wp-content/themes/born/css/images/demandware/IBM_Banner.jpg" style={{width: 1300, heigth:720}}/>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src="http://imgfz.com/i/VlfaAmu.jpeg" style={{width:1300, heigth:720}}/>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src="http://imgfz.com/i/NkJOgl7.jpeg" style={{width:1300, heigth:720}}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <hr></hr>
            </div>
        )
    }
}
   
  export default Slider;