import React, { useState, useEffect } from "react";
import AlertModal from "../../components/Alert.component";
import axios from "axios";
// import { url } from "../../redux/api";

const url = process.env.REACT_APP_API_URL;

const NewPassword = ({ match }) => {
  const [data, setData] = useState({
    token: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [alertMsg, setAlertMsg] = useState({
    show: false,
    color: "",
    msg: "",
  });

  const { token, newPassword, confirmPassword } = data;
  const { show, color, msg } = alertMsg;

  useEffect(() => {
    let token = match.params.token;

    setData({
      ...data,
      token,
    });
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        resetPasswordLink: token,
        newPassword,
      });

      axios
        .put(`${url}/resetpassword`, body, config)
        .then((res) => {
          setData({
            ...data,
            newPassword: "",
            confirmPassword: "",
          });
          setAlertMsg({
            ...alertMsg,
            show: true,
            color: "success",
            msg: res.data.responseData,
          });
        })
        .catch((err) => {
          setData({
            ...data,
            newPassword: "",
            confirmPassword: "",
          });
          setAlertMsg({
            ...alertMsg,
            show: true,
            color: "danger",
            msg: "Something went wrong , please try again",
          });
        });
    } else {
      setData({
        ...data,
        newPassword: "",
        confirmPassword: "",
      });
      setAlertMsg({
        ...alertMsg,
        show: true,
        color: "danger",
        msg: "Password did not match",
      });
    }
  };

  return (
    <section
      style={{
        height: "60vh",
        marginTop: "82px",
        backgroundColor: "#f6f4f2",
        padding: "10px",
      }}
    >
      <div className="container ">
        <h3>Change your password</h3>
        <div className="row">
          <div className="col-md-6">
            <AlertModal
              color={color}
              isOpen={show}
              toggle={() => setAlertMsg({ ...alertMsg, show: !show })}
            >
              {msg}
            </AlertModal>
          </div>
        </div>

        <form
          className=" row d-flex justify-content-center m-3"
          onSubmit={handleSubmit}
        >
          <div className="col-12">
            <div style={{ width: "20rem" }} className="input-group  mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) =>
                  setData({ ...data, newPassword: e.target.value })
                }
              />
            </div>
          </div>

          <div className="col-12">
            <div style={{ width: "20rem" }} className="input-group  mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-outline-success">
              Change password
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewPassword;
