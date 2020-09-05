import React from 'react';
import { initialValues } from './exampleUser'

const Profile = ({ toggle }) => {

    return(
        <div className="container w-75">
            <h1 className="mb-5 profileName">{initialValues.firstName + ' ' + initialValues.lastName}</h1>
            <h4 className="sectionTitle">Personal Details</h4>
            <div className="profileDiv">
                <label className="profileLabel">Email: </label>
                <span className="profileSpan">{initialValues.email}</span>
            </div>
            <div className="profileDiv">
                <label className="profileLabel">Date of Birth: </label>
                <span className="profileSpan">{initialValues.dob}</span>
            </div>
            <div className="profileDiv">
                <label className="profileLabel">Gender: </label>
                <span className="profileSpan">{initialValues.gender}</span>
            </div>
            {
                initialValues.contact ? (
                    <div className="profileDiv">
                        <label className="profileLabel">Contact: </label>
                        <span className="profileSpan">{initialValues.contact}</span>
                    </div>
                ) : null
            }
            {
                initialValues.schoolOrUniv ? (
                    <>
                        <h4 className="sectionTitle">Education</h4>
                        {
                            initialValues.class ? (
                                <>
                                    <div className="profileDiv">
                                        <label className="profileLabel">Class: </label>
                                        <span className="profileSpan">{initialValues.class}</span>
                                    </div>
                                    <div className="profileDiv">
                                        <label className="profileLabel">Board: </label>
                                        <span className="profileSpan">{initialValues.board}</span>
                                    </div>
                                </>
                            ) : (
                                    <div className="profileDiv">
                                        <label className="profileLabel">Year: </label>
                                        <span className="profileSpan">{initialValues.year}</span>
                                    </div>
                                )
                        }
                    </>
                ) : null
            }
            {
                initialValues.houseNumber ? (
                    <>
                        <h4 className="sectionTitle">Address</h4>
                        <span className="profileSpan">
                            <div>{initialValues.houseNumber},</div>
                            <div>{initialValues.addressLine1}</div>
                            {
                                initialValues.addressLine2 ? <div>{initialValues.addressLine2}</div> : null
                            }
                        </span>
                        {
                            initialValues.landmark ? (
                                <div className="profileDiv">
                                    <label className="profileLabel">Landmark: </label>
                                    <span>{initialValues.landmark}</span>
                                </div>
                            ) : null
                        }
                        <div className="profileDiv">
                            <label className="profileLabel">District:</label>
                            <span className="profileSpan">{initialValues.district}</span>
                        </div>
                        <div className="profileDiv">
                            <label className="profileLabel">City:</label>
                            <span className="profileSpan">{initialValues.city}</span>
                        </div>
                        <div className="profileDiv">
                            <label className="profileLabel">Pincode: </label>
                            <span className="profileSpan">{initialValues.pincode}</span>
                        </div>
                        <div className="profileDiv">
                            <label className="profileLabel">Country: </label>
                            <span className="profileSpan">{initialValues.country}</span>
                        </div>
                    </>
                ) : null
            }
            {
                <>
                    {
                        initialValues.facebookLink || initialValues.linkedinLink || initialValues.githubLink ? (
                            <>
                                <h4 className="sectionTitle">Social Links</h4>
                                {
                                    initialValues.facebookLink ? (
                                        <div className="d-inline-block icon ">
                                            <a href={initialValues.facebookLink}>
                                                <i id="icon" className=" fa fa-facebook"></i>
                                            </a>
                                        </div>
                                    ) : null
                                }
                                {
                                    initialValues.linkedinLink ?
                                        <div className="d-inline-block icon">
                                            <a href={initialValues.linkedinLink}>
                                                <i id="icon" className=" fa fa-linkedin"></i>
                                            </a>
                                        </div> : null
                                }
                                {
                                    initialValues.githubLink ?
                                        <div className="d-inline-block icon">
                                            <a href={initialValues.githubLink}>
                                                <i id="icon" className=" fa fa-github"></i>
                                            </a>
                                        </div> : null
                                }
                            </>
                        ) : null
                    }
                </>
            }
            <div className="profileButton">
                <button className="cbtn btn-lg d-block mt-3 mb-5" onClick={toggle}>Edit</button>
            </div>
        </div>
    );

}

export default Profile;