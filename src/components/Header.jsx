import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import logo from "../assets/netstream-logo.png";
import toggleIcon from "../assets/menu-t.png";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Get the currently signed-in user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in / signed up
        const { email, displayName, uid, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        alert(errorCode);
      });
  }

  function handleGptSearchClick() {
    dispatch(toggleGptSearchView());
  }

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  function handleMenu() {
    document.querySelector('.header-signout').classList.toggle("show");
  }

  return (
    <header className="custom-header">
      <div className="container">
        <div className="header-menu">
          <div className="header-logo">
            <img className="logo" src={logo} alt="logo" />
            {user && <span className="toggle-menu" onClick={handleMenu}><img src={toggleIcon} alt="icon" /></span>}
          </div>
          {user && (
            <div className="header-signout">
              {showGptSearch && (
                <select
                  name="language"
                  id="language"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button className="c-btn gpt" onClick={handleGptSearchClick}>
                {showGptSearch ? "Homepage" : "GPT Search"}
              </button>
              <div className="user-photo">
                <img src={user.photoURL} alt="user" />
              </div>
              <button className="c-btn" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
