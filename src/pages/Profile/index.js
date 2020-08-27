import React from 'react';
import { Container, Col, Row, Nav, NavItem } from 'reactstrap';
import "./profile.css";
import pic from "../../assets/react.svg";
import { NavLink } from 'react-router-dom';
import BasicInfo from './BasicInfo';

const Profile = () => {
    return(
        <>
            <div className="container-fluid" style={{marginTop:"69px", textAlign:"center", padding:"0"}}>
                <div className="row" style={{width:"100%", margin:"0"}}>
                    <div className="profile-sidebar col-md-3">
                            <div >
                            <img className="profile-picture" src={pic} alt="User-Profile"></img>
                            <ul className="d-flex flex-column nav">
                                <li className="nav-item">
                                    <NavLink to="#" className="profile-link active-link">BASIC INFO</NavLink>
                                </li>
                                <li className = "nav-item" >
                                    <NavLink to="#" className="profile-link">EDUCATION</NavLink>
                                </li>
                                <li className = "nav-item" >
                                    <NavLink to="#" className="profile-link">ADDRESS</NavLink>
                                </li>
                                <li className = "nav-item" >
                                    <NavLink to="#" className="profile-link">SOCIAL INFO</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="profile-section col-md-8">
                        <BasicInfo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;