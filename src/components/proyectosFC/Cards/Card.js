import React from 'react';

const card = (props) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 1">
                    <title>
                        { props.name }
                    </title>
                    <rect width="100%" height="100%" fill="#55595c"/>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        { props.name } {/* {props.project_id} */}
                        </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">{ props.summary }</p>
                    <div className="d-flex justify-content-between align-items-center">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card;

