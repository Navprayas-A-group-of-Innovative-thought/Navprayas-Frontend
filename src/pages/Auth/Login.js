import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import CustomButton from "../../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
// import { url } from "../../redux/api";
import AlertModal from "../../components/Alert.component";
import Spinner from "../../components/spinner.component";
const url = process.env.REACT_APP_API_URL;

const Login = () => {
  console.log(url);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [alertMsg, setAlertMsg] = useState({
    show: false,
    msg: "",
    color: "",
  });

  const { show, msg, color } = alertMsg;

  const handleChange = (text) => (e) => {
    setData({
      ...data,
      [text]: e.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        email,
        password,
      });

      // request to api
      axios
        .post(`${url}/login`, body, config)
        .then((res) => {
          setIsLoading(false);
          setData({
            ...data,
            email: "",
            password: "",
          });
          setAlertMsg({
            ...alertMsg,
            show: true,
            color: "success",
            msg: "Logged in Successfully",
          });
          console.log(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setAlertMsg({
            ...alertMsg,
            show: true,
            color: "danger",
            msg: err.response.data.errorDetails,
          });
        });
    } else {
      setIsLoading(false);
      setAlertMsg({
        ...alertMsg,
        show: true,
        color: "danger",
        msg: "All fields are required",
      });
    }
  };

  return (
    <>
      <Form className="signUpForm container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <AlertModal
              color={color}
              isOpen={show}
              toggle={() => setAlertMsg({ ...alertMsg, show: !show })}
            >
              {msg}
            </AlertModal>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <Input
              className="form-control signUpInput"
              type="email"
              name="email"
              value={email}
              onChange={handleChange("email")}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <Input
              className="signUpInput"
              type="password"
              name="password"
              value={password}
              onChange={handleChange("password")}
              placeholder="Password"
              label="Password"
            />
          </div>
        </div>
        <div className="signUpButtonDiv">
          <button className="btn signUpButton btn-lg">
            {!isLoading ? <span>Log in</span> : <Spinner text="Logging In" />}
          </button>
        </div>
        <div className="row mt-2">
          <div className="col d-flex justify-content-center">
            <Link className="signUpLink" to={"/reset"}>
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="row m-1">
          <div className="col d-flex justify-content-center">
            <p>
              Don't have an account ?{" "}
              <Link className="signUpLink" to="/signup">
                REGISTER HERE
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
