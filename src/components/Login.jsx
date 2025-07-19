import { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {USER_AVATAR, BACKGROUND_IMG} from "../utils/constants";

const Login = () => {
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
          
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { email, displayName, uid, photoURL } = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
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
            src={BACKGROUND_IMG}
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
               {isSignInForm ? "New to Netflix?Sign up now" : "Account Login"} 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
