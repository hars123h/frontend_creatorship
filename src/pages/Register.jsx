import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BASE_URL from "../baseUrl";
import { toast } from "react-toastify";
import Logo from "../images/logo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      role: "creator",
    };

    const registerData = await axios({
      method: "POST",
      url: `${BASE_URL}/user/register`,
      data: data,
    })
      .then((response) => {
        console.log("Register Success", response);
        toast.success("User Registered Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Register  Error", error?.response);
        toast.error(error.response.data);
      });
  };
  return (
    <>
      <section className="mt-10">
        <Link to="/">
          <img className="w-[150px] ml-9 mb-4" src={Logo} alt="" />
        </Link>

        <h2 className="text-center pb-24 text-[33px] font-[600]">
          Create Your Account
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
                  type="text"
                  className="mb-6 bg-[#34364F] outline-none w-full h-[45px] px-3"
                  autocomplete="off"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  placeholder="Name "
                />
                <input
                  type="email"
                  className="mb-6 bg-[#34364F] outline-none w-full h-[45px] px-3"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  autocomplete="off"
                />

                <input
                  type="text"
                  className="mb-6 bg-[#34364F] outline-none w-full h-[45px] px-3"
                  placeholder="Password"
                  autocomplete="off"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />

                {/* <div className="flex items-center gap-4">
                  <p className="font-[500]">Register as a : </p>
                  <select
                    name="status"
                    id="status"
                    className="mt-6 mb-3 border-[1px] border-[rgba(0,0,0,.5)] outline-none w-[70%] h-[45px] px-3"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                  >
                    <option value="">Please Select an Option</option>
                    <option value="business">Business</option>
                    <option value="creator">Creator</option>
                  </select>
                </div> */}

                <button
                  type="button"
                  className="inline-block w-full rounded bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white  ]"
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign up
                </button>

                <p className="mt-3">
                  Already have accounr ?{" "}
                  <Link to="/login" className="text-white">
                    Login{" "}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
