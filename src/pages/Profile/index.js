import React from 'react';
import { Container, Col, Row, Nav, NavItem } from 'reactstrap';
import "./profile.css";
import pic from "../../assets/react.svg";
import { NavLink } from 'react-router-dom';
import BasicInfo from './BasicInfo';

const Profile = () => {
    return(
        <>
            <div className="container-fluid text-center p-0" style={{marginTop:"69px"}}>
                <div className="row w-100 m-0">
                    <div className="profile-sidebar col-md-3 mw-225 p-0">
                        <div >
                            <img className="profile-picture mt-5 rounded-circle mb-4" src={pic} alt="User-Profile"></img>
                            <ul className="d-flex flex-column nav">
                                <li className="nav-item">
                                    <NavLink to="#" className="profile-link d-block mt-3 mb-3 w-100 pt-2 active-link">BASIC INFO</NavLink>
                                </li>
                                <li className = "nav-item" >
                                    <NavLink to="#" className="profile-link d-block mt-3 mb-3 w-100 pt-2 ">EDUCATION</NavLink>
                                </li>
                                <li className = "nav-item" >
                                    <NavLink to="#" className="profile-link d-block mt-3 mb-3 w-100 pt-2 ">ADDRESS</NavLink>
                                </li>
                                <li className = "nav-item" >
                                    <NavLink to="#" className="profile-link d-block mt-3 mb-3 w-100 pt-2 ">SOCIAL INFO</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="h-auto mt-5 mx-auto mb-5 col-md-8">
                        <BasicInfo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;