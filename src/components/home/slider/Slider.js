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
                        <img className="img-fluid" src="https://storage.de.cloud.ovh.net/v1/AUTH_b2cffe8f45324c2bba39e8db1aedb58f/cloudconvert-files/1c237bc0-2054-49f1-b463-74a6f300aeb4/IBM-Cloud.png?temp_url_sig=c9b480ff6fd2c46cb6ff2cd82f31b89e2e8e491e&temp_url_expires=1593896213&inline" style={{width:1300, heigth:720}}/>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src="https://storage.de.cloud.ovh.net/v1/AUTH_b2cffe8f45324c2bba39e8db1aedb58f/cloudconvert-files/4bb5fe72-82a8-46b5-bc57-af2008baea2c/ibm-banner.png?temp_url_sig=874c2d718b6ec1b1ba351d8b874c869899bc3615&temp_url_expires=1593896260&inline" style={{width:1300, heigth:720}}/>
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