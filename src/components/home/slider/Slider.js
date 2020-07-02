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
                        <img className="img-fluid" src="https://dl.boxcloud.com/api/2.0/internal_files/686067396843/versions/728381621643/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!uPCTUhl645oDxTvk6pfxOrjoCYAsW9mbuihvqhv1XEEukzOoLUEBV1M7tKRsAJtqA59fYZHR6akVTUzGB6NxmFOcbU-tzxLUvnX-rv48rpbOCOicONSOPLnp5DUQUl0nlj7p8c6FU_nobrdqH4zN4ZW7Zf_OUwqEy-Rh7V4rA47MB_5nV5JV8VdLqdjkUr9GhSrCkVx2lvb53B1o-P5y_ej0KN1QapeShsoWDoqI6qWqkH6Ds3dvR7-kTSkrTTcgGwqREEucJWF5qq-XCT4hwJhrvk5VLD1G3M6sNJg-RMcP77AuagwNc5Zf58e0_J69EGXFjZWh01bAetGcWYaZB72HCxEv4I7leq--YEzZ7ZctJjcec0MJmuOF8nKCGMlzCPQfIR6E3nVCTowJu3Cm5lrGDF0HY0xJ1Ks7sbq5VVRjdnF1Ha5umLKwiGeM3QP2DimyNuHs44ta0w6pZbRGTDzU7SlLaQciC8Cm1TMK2NJKsR1h_QhSEQNfWX496LuWafVnZp4u721fg3jvlbgDc6oqQgBUpjMoZdiEIgZHSqLi5JBOCYSqlwarCldhb8KhUI4UHsDbPC30tGJ3mp_RWEj5tD_T92WQpYLI3qbl9lLEu-SzgrVd4obluPsCi-2fkaRLmqyaVWmQc73p2Z3y8sV0eBd375W5rcAPwx2pUuZEBe1s&box_client_name=box-content-preview&box_client_version=2.45.1" style={{width:1300, heigth:720}}/>
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" src="https://dl.boxcloud.com/api/2.0/internal_files/686070635386/versions/728384890186/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!nZIICWr1MvE9mHwidKdV9hJoZ21dXXaVg41XgBi24mf-tOFrLFw9HC6T4bylWYgTKghMTBZu-vg8jn75M5-pqM4MVro3-GQBOuqb2ta3SSe4Ew7uOa2f9SNselBxfrGvuWEykUH-Gx6lNk8WZA585rQ4h2LPqWbh6roDpzmy7te87KReIkqQhG6F8APiL1eaeo2k6AZGvhL9b7xZ_M5A8OstlLKiR17w3TycYHLW9mSVVy7iGJqp6lRONLyt4S82BNzzwBJU_UZ_gf6WLycJEHKRCcWjzSu32WfFvEsfIhyCmHvw1QWtWQFxzBUza_eUvpH0UMSrLg7O2bPEzmmC8IquJvPqPpcZ26zZIr2pCeTZOCnpetlCtmqOF5kiqAzqoeLao7SeGZwatVeyEw8ks9iBkwUUs8EsH_FTXkgS-5z1MELs4e7pSYilKRWSlKod61fAAc3w8kcOM3rPtRpF58DimtiU2Dwd_Q746maB-Ho1H_RWgpbiDYHVfADTr-6SYF2YkMG6o7SPRR5qdHlm4uIx8ovNMe5bzX9KKC88WrD2vIzuuk5TlXDeuWQzSX69tvTOPj2NGEXWAuMZ-2DmhZqjy2aLka363vkSRVU86ZDsLHAFihPN10QdUGO2QqHWGSbBlp6hTHdJ430iR1oLFG1U_LBbBBXRk_TQya1saDRdsSEY&box_client_name=box-content-preview&box_client_version=2.45.1" style={{width:1300, heigth:720}}/>
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