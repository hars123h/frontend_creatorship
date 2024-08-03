import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BASE_URL from "../baseUrl";

const CompanyDetailComponent = () => {
  const [companyDetail, setCompanyDetail] = useState();
  const [tagList, setTagList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCompanyDetail();
  }, []);

  const getCompanyDetail = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/companies/${id}`);
      console.log("Company Detail", response?.data);
      setCompanyDetail(response?.data);
      const tagArray = response?.data?.tag_list?.split(","); // Split string by comma
      setTagList(tagArray);
    } catch (error) {
      console.error("Error fetching Company Detail", error);
    }
  };

  const handleContact = () => {
    if(companyDetail?.twitter_username) {
      window.open(`https://x.com/${companyDetail?.twitter_username}`, '_blank');
    }
    else {
      window.open(`${companyDetail?.homepage_url}`, '_blank');
    }
  };

  return (
    <>
      <div className="py-[100px] px-[150px]">
        <div className="mb-3">
          <h2 className="mb-1 capitalize"> {companyDetail?.name}</h2>
          <button className=" bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] py-2 px-3 text-sm font-[300] rounded-md">
            {companyDetail?.status}
          </button>
        </div>

        <p className="pb-[20px] capitalize ">{companyDetail?.overview}</p>

        <div className="pb-[70px]">
          <h4 className="text-[25px]">Tags:</h4>
          <div className="flex flex-wrap gap-5 mb-5 mt-3">
            {tagList?.map((item) => (
              <div class="relative p-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md">
                <div class="bg-white px-2 rounded-md">
                  <p class="text-black ">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="line left"></div>

        <div className="w-full flex py-[110px] ">
          <div className="w-[50%]">
            <div className="flex items-center gap-4 w-full py-3 border-b border-[rgba(255,255,255,.1)]">
              <h6 className="w-[30%]">Region :</h6>
              <p className="w-[70%]">
                {companyDetail?.region ? companyDetail?.region : "-"}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full py-3 border-b border-[rgba(255,255,255,.1)]">
              <h6 className="w-[30%]">First Funding :</h6>
              <p className="w-[70%]">
                {companyDetail?.first_funding_at
                  ? companyDetail?.first_funding_at
                  : "-"}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full py-3 border-b border-[rgba(255,255,255,.1)]">
              <h6 className="w-[30%]"> Funding Rounds :</h6>
              <p className="w-[70%]">
                {companyDetail?.funding_rounds
                  ? companyDetail?.funding_rounds
                  : "-"}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full py-3 border-b border-[rgba(255,255,255,.1)]">
              <h6 className="w-[30%]"> First Milestone :</h6>
              <p className="w-[70%]">
                {companyDetail?.first_milestone_at
                  ? companyDetail?.first_milestone_at
                  : "-"}
              </p>
            </div>
          </div>

          <div className="w-[50%] ">
            <div className="flex items-center gap-4 w-full py-3 border-b border-[rgba(255,255,255,.1)]">
              <h6 className="w-[30%]">City :</h6>
              <p className="w-[70%]">
                {companyDetail?.city ? companyDetail?.city : "-"}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full py-3 border-b border-[rgba(255,255,255,.1)]">
              <h6 className="w-[30%]">Last Funding :</h6>
              <p className="w-[70%]">
                {companyDetail?.last_funding_at
                  ? companyDetail?.last_funding_at
                  : "-"}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full py-3 border-b border-[rgba(255,255,255,.1)]">
              <h6 className="w-[30%]">Total Funding :</h6>
              <p className="w-[70%]">
                {companyDetail?.funding_total_usd
                  ? `$ ${companyDetail?.funding_total_usd}`
                  : "-"}
              </p>
            </div>
            <div className="flex items-center gap-4 w-full py-3 border-b border-[rgba(255,255,255,.1)]">
              <h6 className="w-[30%]">Last Milestone:</h6>
              <p className="w-[70%]">
                {companyDetail?.last_milestone_at
                  ? companyDetail?.last_milestone_at
                  : "-"}
              </p>
            </div>
          </div>
        </div>

        <div className="line right"></div>

        <div className="mt-9">
          <button
            onClick={handleContact}
            className="px-[32px] py-[12px] bg-transparent border border-white rounded-md mt-[20px] transition  duration-400 ease-in  hover:bg-white hover:text-black "
          >
            <span>Contact</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailComponent;
