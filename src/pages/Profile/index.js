import React from 'react';
import { Container, Col, Row, Nav, NavItem } from 'reactstrap';
import "./profile.css";
import pic from "../../assets/react.svg";
import { NavLink } from 'react-router-dom';
import BasicInfo from './BasicInfo';

const Profile = () => {
    return(
        <>
            <Container style={{marginTop:"69px", textAlign:"center", padding:"0"}} fluid>
                <Row style={{width:"100%", margin:"0"}}>
                    <Col className="profile-sidebar" md={3}>
                            <div >
                            <img className="profile-picture" src={pic} alt="User-Profile"></img>
                            <Nav className="d-flex flex-column">
                                <NavItem>
                                    <NavLink to="#" className="profile-link active-link">BASIC INFO</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#" className="profile-link">EDUCATION</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#" className="profile-link">ADDRESS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#" className="profile-link">SOCIAL INFO</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Col>

                    <Col md={8} className="profile-section">
                        <BasicInfo></BasicInfo>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Profile;