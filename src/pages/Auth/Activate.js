import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
// import { url } from "../../redux/api";
import CustomButton from "../../components/Button";
import AlertModal from "../../components/Alert.component";

const url = process.env.REACT_APP_API_URL;

const Activate = ({ match }) => {
  const [formData, setFormData] = useState({
    token: "",
    name: "",
    email: "",
  });

  const [alertMsg, setAlertMsg] = useState({
    show: false,
    color: "",
    msg: "",
  });

  useEffect(() => {
    console.log(match);
    let token = match.params.token;
    // let { email } = jwt.decode();
    if (token) {
      setFormData({ ...formData, token });
    }

    console.log(token);
  }, []);

  const { token, name, email } = formData;
  const { show, msg, color } = alertMsg;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting");
    axios
      .post(`${url}/activation`, {
        token,
      })
      .then((res) => {
        setAlertMsg({
          ...alertMsg,
          show: true,
          color: "success",
          msg: res.data.responseData,
        });
        setFormData({
          ...formData,
          name: res.data.user.firstName,
          email: res.data.user.email,
        });
        console.log(res.data);
      })
      .catch((err) => {
        setAlertMsg({
          ...alertMsg,
          show: true,
          color: "danger",
          msg: err.response.data.errorDetails,
        });
      });
  };

  return (
    <section
      style={{
        height: "60vh",
        marginTop: "75px",
        backgroundColor: "#f6f4f2",
        padding: "10px",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 d-flex justify-content-center p-5">
            <AlertModal
              color={color}
              isOpen={show}
              toggle={() => setAlertMsg({ ...alertMsg, show: !show })}
            >
              {msg}
            </AlertModal>
          </div>
        </div>
        {name ? (
          <>
            <div className="row">
              <div className="col-xs-12 text-center">
                <h3>Welcome {name}</h3>
              </div>
              <div className="row m-2">
                <div className="col text-center">
                  <h4>
                    <strong style={{ color: "green" }}>
                      {email} is now verified
                    </strong>
                  </h4>
                </div>
              </div>
              <div className="row m-4">
                <div className="col-xs-12 d-flex text-center justify-content-center">
                  <h5>
                    Now you can{" "}
                    <Link to="/login">
                      <span style={{ color: "#F69925" }}>Login</span>
                    </Link>{" "}
                    with your credentials
                  </h5>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-xs-12 d-flex justify-content-center p-3 ">
              <form onSubmit={handleSubmit}>
                <CustomButton className="btn-lg" type="submit">
                  Verify Your Email Address
                </CustomButton>
              </form>
            </div>

            <div className="row m-4">
              <div className="col-xs-12 d-flex text-center justify-content-center">
                <h5>
                  If You think this is not your email , please try{" "}
                  <Link to="/signUp">
                    <span style={{ color: "#F69925" }}>sign up</span>
                  </Link>{" "}
                  again
                </h5>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Activate;
