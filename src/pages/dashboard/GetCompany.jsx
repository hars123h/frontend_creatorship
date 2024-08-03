import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import CompanyCard from "../../components/CompanyCard";
import axios from "axios";
import BASE_URL from "../../baseUrl";
import { getCookie } from "../../auth/helper";

const GetCompany = () => {
  const [userCompany, setUserCompany] = useState();
  const token = getCookie("token");
  useEffect(() => {
    getUserCompany();
  }, []);

  const getUserCompany = async () => {
    const getCompany = await axios({
      method: "GET",
      url: `${BASE_URL}/user/get-company`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("get User Company Success", response);
        setUserCompany(response?.data);
      })
      .catch((error) => {
        console.log("get user company  Error", error?.response);
      });
  };
  return (
    <>
      <Navbar />
      <div className="mt-5 px-12">
        <div className="mt-16 flex gap-10">
          <div className="w-[20%]">
            <DashboardSidebar 
            active="yourCompany" />
          </div>
          <div className="w-[80%]">
            <div className="flex flex-wrap justify-start gap-9">
              {userCompany?.map((data) => {
                return (
                  <>
                    <CompanyCard
                      companyName={data?.companyName}
                      companyAbout={data?.about}
                      fundingAmount={data?.totalFundingAmount}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCompany;
