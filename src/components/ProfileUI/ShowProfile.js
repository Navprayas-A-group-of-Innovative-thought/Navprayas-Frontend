import React, { useEffect, useState } from "react";
// import { userActions } from "../../redux/actions/auth.actions";
// import { connect } from "react-redux";
import Skeleton from "../SkeletonLoading/SkeletonLoading";
import { Link } from "react-router-dom";
// import AlertModal from "../Alert.component";
// import { initialValues } from "./exampleUser";

import "./ShowProfile.css";

const ShowProfile = (props) => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   props.getUser();
  //   setUser(props.user.user);
  // }, [props.user.user]);

  const user = props.user.user;
  console.log("Show Profile", user);

  if (props.user.isLoading || user === null || user == undefined) {
    return (
      <section style={{ height: "50vh", marginTop: "80px" }}>
        <div className="container">
          <Skeleton>
            <div className="border rounded-circle ">&nbsp;</div>
            <div className="border m-5 rounded-pill">&nbsp;</div>
          </Skeleton>
        </div>
      </section>
    );
  } else {
    return (
      <>
        <div className="container  userProfile">
          {
            // <div className="row">
            //   <div className="col-12 col-md-8 offset-md-2">
            //     <AlertModal
            //       color={props.alert.type}
            //       isOpen={props.alert.show}
            //       toggle={() => props.clear()}
            //     >
            //       {props.alert.message}
            //     </AlertModal>
            //   </div>
            // </div>
          }
          <div className="row">
            <div className="col-5 col-md-9">
              <h1 className="mb-5 profileName">
                {user.firstName + " " + user.lastName}
              </h1>
            </div>
            <div className="col-5 offset-col-2 col-md-3">
              <Link to="/profile/edit" className="cbtn  btn-lg ">
                Update
              </Link>
              <button
                onClick={() => props.pay()}
                className="cbtn ml-1  btn-lg "
              >
                Pay
              </button>
            </div>
          </div>
          <h4 className="sectionTitle">Personal Details</h4>
          <div className="profileDiv">
            <label className="profileLabel">Email: </label>
            <span className="profileSpan">{user.email}</span>
          </div>
          {user.fatherName && (
            <div className="profileDiv">
              <label className="profileLabel">Father Name: </label>
              <span className="profileSpan">{user.fatherName}</span>
            </div>
          )}
          {user.motherName && (
            <div className="profileDiv">
              <label className="profileLabel">Mother Name: </label>
              <span className="profileSpan">{user.motherName}</span>
            </div>
          )}
          <div className="profileDiv">
            <label className="profileLabel">Date of Birth: </label>
            <span className="profileSpan">{user.dob.split("T")[0]}</span>
          </div>
          <div className="profileDiv">
            <label className="profileLabel">Gender: </label>
            <span className="profileSpan">{user.gender}</span>
          </div>
          {user.contact ? (
            <div className="profileDiv">
              <label className="profileLabel">Contact: </label>
              <span className="profileSpan">{user.contact}</span>
            </div>
          ) : null}
          {user.instituteName ? (
            <>
              <h4 className="sectionTitle">Education</h4>
              <div className="profileDiv">
                <label className="profileLabel">Institute: </label>
                <span className="profileSpan">{user.instituteName}</span>
              </div>
              {user.grade ? (
                <>
                  <div className="profileDiv">
                    <label className="profileLabel">Class: </label>
                    <span className="profileSpan">{user.grade}</span>
                  </div>
                  <div className="profileDiv">
                    <label className="profileLabel">Board: </label>
                    <span className="profileSpan">{user.board}</span>
                  </div>
                </>
              ) : (
                <div className="profileDiv">
                  <label className="profileLabel">Year: </label>
                  <span className="profileSpan">{user.year}</span>
                </div>
              )}
            </>
          ) : null}
          {user.houseNumber && (
            <>
              <h4 className="sectionTitle">Address</h4>
              <span className="profileSpan">
                <div>{user.houseNumber},</div>
                <div>{user.addressLine1}</div>
                {user.addressLine2 && <div>{user.addressLine2}</div>}
              </span>
            </>
          )}
          {user.landmark ? (
            <div className="profileDiv">
              <label className="profileLabel">Landmark: </label>
              <span>{user.landmark}</span>
            </div>
          ) : null}
          {user.district && (
            <div className="profileDiv">
              <label className="profileLabel">District:</label>
              <span className="profileSpan">{user.district}</span>
            </div>
          )}
          {user.city && (
            <div className="profileDiv">
              <label className="profileLabel">City:</label>
              <span className="profileSpan">{user.city}</span>
            </div>
          )}

          {user.pincode && (
            <div className="profileDiv">
              <label className="profileLabel">Pincode: </label>
              <span className="profileSpan">{user.pincode}</span>
            </div>
          )}

          {user.country && (
            <div className="profileDiv">
              <label className="profileLabel">Country: </label>
              <span className="profileSpan">{user.country}</span>
            </div>
          )}

          {
            <>
              {user.facebookLink || user.linkedinLink || user.githubLink ? (
                <div className="profileSocial">
                  <h4 className="sectionTitle">Social Links</h4>
                  {user.facebookLink && (
                    <div className="d-inline-block icon ">
                      <a href={user.facebookLink}>
                        <i id="icon" className=" fa fa-facebook"></i>
                      </a>
                    </div>
                  )}
                  {user.linkedinLink && (
                    <div className="d-inline-block icon">
                      <a href={user.linkedinLink}>
                        <i id="icon" className=" fa fa-linkedin"></i>
                      </a>
                    </div>
                  )}
                  {user.githubLink && (
                    <div className="d-inline-block icon">
                      <a href={user.githubLink}>
                        <i id="icon" className=" fa fa-github"></i>
                      </a>
                    </div>
                  )}
                </div>
              ) : null}
            </>
          }
        </div>
      </>
    );
  }
};

export default ShowProfile;
