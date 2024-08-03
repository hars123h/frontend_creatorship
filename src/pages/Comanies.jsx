import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CompanyCard from "../components/CompanyCard";
import axios from "axios";
import BASE_URL from "../baseUrl";


const Comanies = () => {
  const [allCompanies, setAllCompanies] = useState();

  useEffect(() => {
    getAllCompany();
  }, []);

  const getAllCompany = async () => {
    const getCompany = await axios({
      method: "GET",
      url: `${BASE_URL}/companies`,
    })
      .then((response) => {
        console.log("get  Company Success", response);
        setAllCompanies(response?.data);
      })
      .catch((error) => {
        console.log("get  company  Error", error?.response);
      });
  };
  return (
    <>
      <Navbar />

      <div>
        <h2 className="my-5 font-[600] text-[35px] text-center">
          All Companies
        </h2>
        {
          allCompanies?.length === 0 && (
            <>
             <div>
              <p className="text-center text-[25px] text-gray-400 font-[600]">No Company Found</p>
             </div>
            </>
          )
        }
        <div className="flex justify-start gap-3 flex-wrap px-3">
          {allCompanies?.map((data) => {
            return (
              <>
                <CompanyCard
                  companyName={data?.companyName}
                  companyAbout={data?.about}
                  fundingAmount={data?.totalFundingAmount}
                  btnUrl={data?._id}
                />
              </>
            );
          })}
        </div>
      </div>

     
    </>
  );
};

export default Comanies;
