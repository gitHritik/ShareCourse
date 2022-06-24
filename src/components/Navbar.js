import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
// import {logo} from "";
import { Link } from "react-scroll";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(true);
  const [logoutsuccess, setLogoutSuccess] = useState(false);

  const clientId =
    "745135505195-l1jk7jsaqq3ab02ol436k9hf3i696vd8.apps.googleusercontent.com";
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
  }, []);

  const OnLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    alert("Logged in successfully");
    setLoginSuccess(false);
    setLogoutSuccess(true);
  };
  const OnLoginFailure = (res) => {
    console.log("Login failure Succesfully", res);
  };
  const OnLogoutSuccess = () => {
    alert("Logoute Succefully");
    console.clear();
    setLoginSuccess(true);
    setLogoutSuccess(false);
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: { clientId },
        scrope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <div
      className="navbar__container fixed z-40 w-[100%] flex justify-between items-center "
      style={{
        backgroundColor: colorChange ? "white" : "transparent",
      }}
    >
      <Link
        activeClass="active"
        to="home__container"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div className="navbar__logo m-3">
          <h1 className="text-4xl font-bold cursor-pointer">ShareC.in</h1>
        </div>
      </Link>
      <div className="navbar__menu m-3 ">
        <ul className="flex space-x-8 mr-6 font-semibold">
          <Link
            activeClass="active"
            to="home__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="cursor-pointer"> Home</li>
          </Link>
          <Link
            activeClass="active"
            to="about__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="cursor-pointer">About us</li>
          </Link>
          <Link
            activeClass="active"
            to="courses__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="cursor-pointer">Courses</li>
          </Link>
          <Link
            activeClass="active"
            to="reviews__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="cursor-pointer">Reviews</li>
          </Link>
          <Link
            activeClass="active"
            to="contact__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>

      <div className="navbar_loginButton m-3  rounded-[30px] cursor-pointer  border-black border-2 px-7 py-2 font-semibold hover:bg-black hover:text-white">
        {loginSuccess ? (
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <button
                cla
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login
              </button>
            )}
            buttonText="Login"
            onSuccess={OnLoginSuccess}
            onFailure={OnLoginFailure}
            cookiePolicy={"single_host_origin"}
          />
        ) : null}

        {logoutsuccess ? (
          <GoogleLogout
            clientId={clientId}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Logout
              </button>
            )}
            buttonText="Logout"
            onLogoutSuccess={OnLogoutSuccess}
          ></GoogleLogout>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
