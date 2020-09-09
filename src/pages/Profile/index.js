import React, { useEffect } from "react";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import ShowProfile from "../../components/ProfileUI/ShowProfile";
import ProfileEdit from "../../components/ProfileUI/profileEdit";
import { PrivateRoute } from "../../components/PrivateRoute.component";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/auth.actions";
import Spinner from "../../components/spinner.component";

const Profile = (props) => {
  useEffect(() => {
    console.log("rendering users");
    props.getUser();
  }, []);

  console.log("Profile page", props.user.user);
  const ShowFun = () => <ShowProfile user={props.user} alert={props.alert} />;

  const EditFun = () => (
    <ProfileEdit
      initialValues={props.user.user}
      updateProfile={props.updateProfile}
    />
  );

  return (
    <section style={{ height: "auto", marginTop: "100px" }}>
      {props.user.isLoading ? (
        <>
          <div className="text-center">
            <Spinner text="Loading..." />
          </div>{" "}
        </>
      ) : (
        <Redirect to="/profile/show" />
      )}
      <Switch>
        <PrivateRoute exact path={`/profile/show`} component={ShowFun} />
        <PrivateRoute exact path={`/profile/edit`} component={EditFun} />
      </Switch>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.getUser,
    alert: state.alert,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(userActions.getUser()),
  updateProfile: (user) => dispatch(userActions.updateProfile(user)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
