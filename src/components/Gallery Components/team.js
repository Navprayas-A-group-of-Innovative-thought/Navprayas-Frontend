import React from 'react';

const Team = ({ team }) => {
    return(
        <div className="row">
            {
                team.map((t) => {
                    return(
                        <div className="col-lg-4 col-sm-6 col-xs-12">
                            <div className="bg-dark mb-5">
                                <div className="img-area position-relative overflow-hidden">
                                    <img src={t.pic} className="w-100" alt="" />
                                    <div className="social position-absolute text-center h-100 w-100">
                                        <ul className="list-inline text-center position-relative">
                                            <li><a href="#"><i id="icon" className="icon fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i id="icon" className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i id="icon" className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i id="icon" className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                < div className = "img-text p-4 text-white text-center" >
                                    <h4 className="mt-0 mr-0 mb-1">{t.name}</h4>
                                    <h5 className="font-weight-bold text-uppercase">{t.designation}</h5>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Team;