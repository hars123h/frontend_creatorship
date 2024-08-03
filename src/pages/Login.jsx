import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../baseUrl";
import { toast } from "react-toastify";
import { authenticate } from "../auth/helper";
import Logo from "../images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    const loginData = await axios({
      method: "POST",
      url: `${BASE_URL}/user/login`,
      data: data,
    })
      .then((response) => {
        console.log("Login Success", response);
        toast.success("User LoggedIn Successfully");
        authenticate(response, () => {
          setEmail("");
          setPassword("");
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("Login  Error", error?.response);
        toast.error(error.response.data);
      });
  };

  return (
    <section className="mt-10">
      <Link to="/">
        <img className="w-[150px] ml-9 mb-4" src={Logo} alt="" />
      </Link>
      <h2 className="text-center pb-24 text-[33px] font-[600]">
        Login to Your Account
      </h2>

      <div className="container max-h-[100vh] px-6 ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-[90%]"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
              <input
                type="email"
                className="mb-6 bg-[#34364F] outline-none w-full h-[45px] rounded-md px-3"
                placeholder="Email Address"
                autocomplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="text"
                className="mb-6 bg-[#34364F] rounded-md outline-none w-full h-[45px] px-3"
                placeholder="Password"
                autocomplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="inline-block w-full rounded bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white  ]"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </button>

              <p className="mt-3">
                Don't have account ?{" "}
                <Link to="/register" className="text-white">
                  Register{" "}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
