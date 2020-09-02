import React, { useEffect } from "react";
import { userActions } from "../../redux/actions/auth.actions";
import { connect } from "react-redux";

const ShowProfile = (props) => {
  useEffect(() => {
    props.getUser();
  }, []);

  if (props.user.isLoading) {
    return (
      <section style={{ height: "50vh", marginTop: "80px" }}>
        Loading User Data
      </section>
    );
  } else {
    return (
      <section style={{ height: "50vh", marginTop: "80px" }}>
        Profile Page
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
