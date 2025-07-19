import { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function toggleSignInForm() {
    setisSignInForm(!isSignInForm);
  }

  function handleButtonClick() {
    console.log(email.current.value, password.current.value);
    // Validtion for Form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // Sign In & Sign Up User

    if (!isSignInForm) {
      //SIGN UP LOGIC
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/69305601?v=4",
          })
            .then(() => {
              const { email, displayName, uid, photoURL } = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //SIGN IN LOGIC
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="login-screen">
        <div className="background-img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
            alt=""
          />
        </div>
        <div className="netflix-form">
          <h1 className="fs-40">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {!isSignInForm && (
              <div className="input-box">
                <input type="text" name="fullname" placeholder="Enter name" ref={name} />
              </div>
            )}
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                ref={email}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={password}
              />
            </div>
            <div className="error-message">{errorMessage}</div>
            <div className="submit-form">
              <input type="submit" value="Submit" onClick={handleButtonClick} />
            </div>
            <div className="signup-link" onClick={toggleSignInForm}>
              New to Netflix?Sign up now.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
