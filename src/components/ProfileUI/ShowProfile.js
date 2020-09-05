import React, { useEffect } from "react";
import { userActions } from "../../redux/actions/auth.actions";
import { connect } from "react-redux";
import Skeleton from "../SkeletonLoading/SkeletonLoading";
import { Link } from "react-router-dom";

const ShowProfile = (props) => {
  useEffect(() => {
    props.getUser();
  }, []);

  const { user } = props.user;
  console.log("profile USer", user);

  if (props.user.isLoading || user === null) {
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
  } else if (user) {
    return (
      <section style={{ height: "50vh", marginTop: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h1 className="text-center"> Profile Page </h1>
            </div>
            <div className="col">
              <Link to="/profile/edit" className="cbtn btn-lg">
                Edit
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {
                <>
                  <h1>
                    Name: {user.firstName} {user.lastName}
                  </h1>
                  <h1>email: {user.email}</h1>
                  <h1>dob:{user.dob}</h1>
                  <h1>country : {user.country}</h1>
                  <h1> gender : {user.gender}</h1>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.getUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(userActions.getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowProfile);
