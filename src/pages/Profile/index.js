import React, { Component, useEffect } from "react";
import { useRouteMatch, Switch, Route, withRouter } from "react-router-dom";
import ShowProfile from "../../components/ProfileUI/ShowProfile";
import ProfileEdit from "../../components/FormUI/profileEdit";
import { PrivateRoute } from "../../components/PrivateRoute.component";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions/auth.actions";

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
    <>
      <Switch>
        <PrivateRoute exact path={`/profile/show`} component={ShowFun} />
        <PrivateRoute exact path={`/profile/edit`} component={EditFun} />
      </Switch>
    </>
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
