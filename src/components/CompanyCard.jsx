import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ fundingAmount, companyName, companyAbout, btnUrl }) => {
  return (
    <>
      <div className="block rounded-lg bg-white  dark:bg-surface-dark dark:text-white text-surface shadow-md my-4 mx-1 border h-[220px]  border-blue-500">
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
          Total Funding Amount:{" "}
          <span className="font-[600] text-blue-500">${fundingAmount}</span>
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            {companyName}
          </h5>
          <p className="mb-4 text-base w-[430px] ">
            {companyAbout?.slice(0, 115)}
          </p>
          <Link
            to={`${btnUrl}`}
            className="bg-blue-500 px-12 py-2 text-white mb-5 rounded-md"
          >
            View More{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
