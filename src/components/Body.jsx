import { useEffect } from "react";
import Login from "./login";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the currently signed-in user
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in / signed up
        const { email, displayName, uid, photoURL } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");

      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
  }, []);

  return <Login />;
};

export default Body;
