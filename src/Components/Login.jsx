import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  signInWithEmailAndPassword,
  signUpwithEmailPassword,
  loginWithFacebook,
  loginWithGoogle,
  useAuth,
} from "../Utils/AuthProvider";
import {
  RoundedIconButton,
  InputField,
  SubmitButton,
  StyledForm,
} from "./StyledComponents/StyledComp";

function Notify(...args) {
  console.log(args.join("\n"));
}

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string()
    .min(8, "Too short password")
    .required("Password is required"),
});

const signupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .min(8, "Password needs to be atleast 8 characters long.")
    .max(256, "Too long!")
    .required("Password can't be empty"),
  email: Yup.string().email("Invalid email").required("Required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const [to, setto] = useState("");
  const [AuthInfo, setAuthInfo] = useAuth();
  useEffect(() => {
    console.log("should redirect");
    console.log(AuthInfo);
    if (AuthInfo.isLoggedIn) {
      history.push("/");
      console.log("redirected");
    }
    return () => {};
  }, [AuthInfo]);
  useEffect(() => {
    let togo = location.state?.from?.pathname;
    if (togo) {
      setto(togo);
    }
    return () => {};
  }, [location]);

  function setAuth(user, oldto = "/") {
    setAuthInfo((AuthInfo) => {
      const newInfo = {
        isLoggedIn: true,
        username: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      localStorage.setItem(`LoginData`, JSON.stringify(newInfo));
      return newInfo;
    });

    history.push(to || oldto);
  }

  function loginByProvider(provider) {
    switch (provider) {
      case "google":
        loginWithGoogle()
          .then((res) => {
            // Notify("Success, You can login now", "success");
            setAuth(res.user);
          })
          .catch((err) => {
            Notify(err.message, "error");
          });
        break;
      case "fb":
        loginWithFacebook()
          .then((res) => {
            setAuth(res.user);
            console.log(res);
          })
          .catch((err) => {
            if (err.code == "auth/user-cancelled") {
              Notify(
                "Failed: You didn't grant permission, try again.",
                "error"
              );
            } else if (
              err.code == "auth/account-exists-with-different-credential"
            ) {
              Notify(
                "Failed: The email associated with your facebook account is already used, Login using that.",
                "error"
              );
            } else {
              Notify("Failed: " + err.code, "error");
            }
          });
        break;
      default:
        break;
    }
  }

  const handleLoginSubmit = (values, actions) => {
    const { email, password } = values;
    signInWithEmailAndPassword(email, password)
      .then((res) => {
        Notify("Log in successfull", "success");
        setAuth(res.user);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.code == "auth/user-not-found") {
          Notify("No account found with this email, signup first.", "error");
        } else if ((err.code = "auth/wrong-password")) {
          Notify("Incorrect password, try again.", "error");
        } else {
          Notify("Login Failed,Check details.", "error");
        }
      });
  };

  const handleSignupSubmit = (values, actions) => {
    const { email, password } = values;
    signUpwithEmailPassword(email, password)
      .then((user) => {
        if (user.additionalUserInfo.isNewUser) {
          Notify("Signup successfull. You can login now...", "success");
          setTimeout(() => {}, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        if ((err.code = "auth/email-already-in-use")) {
          Notify("This email is taken, try with another email.", "error");
        }
      });
  };

  return (
    <Router>
      <div className="Container">
        <Switch>
          <Route path="/Login/Signup" exact>
            <div className="formContainer">
              <Formik
                validationSchema={signupSchema}
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values, actions) => {
                  handleSignupSubmit(values, actions);
                }}
              >
                <StyledForm className="form" as={Form} method="POST">
                  <h4 style={{ textAlign: "left", marginBottom: "20px" }}>
                    Create an account
                  </h4>
                  <InputField
                    as={Field}
                    name="name"
                    placeholder="Name"
                  ></InputField>
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="errmsg"
                  ></ErrorMessage>
                  <InputField
                    as={Field}
                    name="email"
                    placeholder="Email"
                  ></InputField>
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="errmsg"
                  ></ErrorMessage>
                  <InputField
                    as={Field}
                    name="password"
                    placeholder="Password"
                  ></InputField>
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="errmsg"
                  ></ErrorMessage>
                  <InputField
                    as={Field}
                    name="confirm_password"
                    placeholder="Confirm Password"
                  ></InputField>
                  <ErrorMessage
                    component="div"
                    name="confirm_password"
                    className="errmsg"
                  ></ErrorMessage>
                  <SubmitButton type="submit" as="button">
                    Create an account
                  </SubmitButton>
                  <p>
                    Already have an account?
                    <Link to="/Login" className="important">
                      Login
                    </Link>
                  </p>
                </StyledForm>
              </Formik>
            </div>
          </Route>

          <Route path="*" exact>
            <div className="formContainer">
              <Formik
                validationSchema={loginSchema}
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirm_password: "",
                }}
                onSubmit={(values, actions) => {
                  handleLoginSubmit(values, actions);
                }}
              >
                <StyledForm className="form" as={Form}>
                  <h4 style={{ textAlign: "left", marginBottom: "20px" }}>
                    Login
                  </h4>
                  <InputField
                    as={Field}
                    name="email"
                    placeholder="Email"
                  ></InputField>
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="errmsg"
                  ></ErrorMessage>
                  <InputField
                    as={Field}
                    name="password"
                    placeholder="Password"
                  ></InputField>
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="errmsg"
                  ></ErrorMessage>
                  <SubmitButton type="submit" as="button">
                    Login
                  </SubmitButton>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/Login/Signup" className="important">
                      Create an account
                    </Link>
                  </p>
                </StyledForm>
              </Formik>
            </div>
          </Route>
        </Switch>

        <div className="options">
          <div className="separator">Or</div>
          <div>
            <RoundedIconButton onClick={() => loginByProvider("fb")}>
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Continue
              with Facebook
            </RoundedIconButton>
          </div>
          <RoundedIconButton onClick={() => loginByProvider("google")}>
            {" "}
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>Continue with
            Google
          </RoundedIconButton>
        </div>
      </div>
    </Router>
  );
};

export default Login;
