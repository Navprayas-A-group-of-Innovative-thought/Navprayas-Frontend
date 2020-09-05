import React, { useEffect, useState } from "react";
import { userActions } from "../../redux/actions/auth.actions";
import { connect } from "react-redux";
import Spinner from "../spinner.component";
import Profile from './Profile';
import FormEdit from '../FormUI/profile.formEdit';
import { initialValues } from './exampleUser';
import validationSchema from '../../util/validationSchema'

const ShowProfile = (props) => {

  const onSubmit = (initialvalues, onSubmitProps) => {
    console.log('Form data', initialvalues);
    onSubmitProps.setSubmitting(false);
    setIsEdit(false);
  }

  const [isEdit, setIsEdit] = useState(false)
  const toggle = (e) => {
    setIsEdit(!isEdit)
  }

  useEffect(() => {
    props.getUser();
  }, []);

  const { user } = props.user;
  console.log("profile USer", user);

  if (props.user.isLoading || user === null) {
    return (
      <section style={{ height: "50vh", marginTop: "80px" }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <Spinner text="Loading..." />
          </div>
        </div>
      </section>
    );
  } else if (user) {
    return (
      <>
        {
          isEdit ?
            <FormEdit
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            /> :
            <Profile toggle={toggle} />
        }
      </>
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
