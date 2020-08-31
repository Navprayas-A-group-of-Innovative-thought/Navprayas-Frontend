import React from 'react';

const Team = ({ team }) => {
    return(
        <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single-team">
                    <div className="img-area">
                        <img src={team[0].pic} className="img-responsive" alt="" />
                        <div className="social">
                            <ul className="list-inline">
                                <li><a href="#"><i id="icon" className="icon fa fa-facebook"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="img-text">
                        <h4>{team[0].name}</h4>
                        <h5>{team[0].designation}</h5>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single-team">
                    <div className="img-area">
                        <img src={team[1].pic} className="img-responsive" alt="" />
                        <div className="social">
                            <ul className="list-inline">
                                <li><a href="#"><i id="icon" className="icon fa fa-facebook"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="img-text">
                        <h4>{team[1].name}</h4>
                        <h5>{team[1].designation}</h5>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-xs-12">
                <div className="single-team">
                    <div className="img-area">
                        <img src={team[2].pic} className="img-responsive" alt="" />
                        <div className="social">
                            <ul className="list-inline">
                                <li><a href="#"><i id="icon" className="icon fa fa-facebook"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i id="icon" className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="img-text">
                        <h4>{team[2].name}</h4>
                        <h5>{team[2].designation}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;