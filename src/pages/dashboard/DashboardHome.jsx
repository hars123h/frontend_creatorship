import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import axios from "axios";
import BASE_URL from "../../baseUrl";
import { toast } from "react-toastify";
import { getCookie, isAuth } from "../../auth/helper";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    about: "",
    size: "",
    totalFundingAmount: "",
    investors: "",
    fundingRounds: "",
  });
  const {
    companyName,
    about,
    size,
    totalFundingAmount,
    investors,
    fundingRounds,
  } = companyData;
  const token = getCookie("token");
  const navigate = useNavigate()
  const onChange = (e) =>
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      companyName,
      about,
      size,
      totalFundingAmount,
      investors,
      fundingRounds,
    };

    const createCompany = await axios({
      method: "POST",
      url: `${BASE_URL}/user/create-company`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then((response) => {
        console.log("Register Success", response);
        toast.success("Company Created Successfully");
        navigate("/dashboard/getCompany")
      })
      .catch((error) => {
        console.log("Register  Error", error?.response);
        toast.error(error.response.data);
      });
  };
  return (
    <>
      <Navbar />
      <div className="mt-5 px-12">
        {/* <h2 className="text-center text-[35px] font-[600] ">
          Welcome Harsh Tripathi
        </h2> */}

        <div className="mt-16 flex gap-10">
          <div className="w-[20%]">
            <DashboardSidebar 
             active="uploadCompany"
            />
          </div>

          <div className="w-[80%]">
            <div className="">
              {" "}
              <p className="mb-2">Company Name</p>
              <input
                type="text"
                className="mb-6 border-[1px] border-[rgba(0,0,0,.5)] outline-none w-full h-[45px] px-3"
                placeholder="Company Name"
                autocomplete="off"
                name="companyName"
                value={companyName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="">
              {" "}
              <p className="mb-2">Company Size Range</p>
              <input
                type="text"
                className="mb-6 border-[1px] border-[rgba(0,0,0,.5)] outline-none w-full h-[45px] px-3"
                placeholder="1-25"
                autocomplete="off"
                name="size"
                value={size}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="">
              {" "}
              <p className="mb-2">About the company</p>
              <textarea
                className="mb-6 border-[1px] border-[rgba(0,0,0,.5)] outline-none w-full h-[45px] px-3 py-2 min-h-[100px]"
                placeholder="About Company"
                name="about"
                value={about}
                onChange={(e) => onChange(e)}
              ></textarea>
            </div>

            <div className="">
              {" "}
              <p className="mb-2">Total Investors</p>
              <input
                type="number"
                className="mb-6 border-[1px] border-[rgba(0,0,0,.5)] outline-none w-full h-[45px] px-3"
                placeholder="Total Investors"
                autocomplete="off"
                name="investors"
                value={investors}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="">
              {" "}
              <p className="mb-2">Total Funding Amounts</p>
              <input
                type="number"
                className="mb-6 border-[1px] border-[rgba(0,0,0,.5)] outline-none w-full h-[45px] px-3"
                placeholder="Total Funding Amount in USD"
                autocomplete="off"
                name="totalFundingAmount"
                value={totalFundingAmount}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="">
              {" "}
              <p className="mb-2">Total Funding Rounds</p>
              <input
                type="number"
                className="mb-6 border-[1px] border-[rgba(0,0,0,.5)] outline-none w-full h-[45px] px-3"
                placeholder="Total Funding Rounds"
                autocomplete="off"
                name="fundingRounds"
                value={fundingRounds}
                onChange={(e) => onChange(e)}
              />
            </div>

            <button
              className="bg-blue-500 px-14 py-3 text-white mb-5 rounded-full"
              onClick={(e) => handleSubmit(e)}
            >
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
