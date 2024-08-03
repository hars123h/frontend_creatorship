import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "../baseUrl";
import { Link } from "react-router-dom";

const CompanyTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
const [letter, setLeter] = useState("");

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getAllCompany();
  }, [page, letter]);

  const getAllCompany = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/companies/all`, {
        params: {letter, page, limit: 10 },
      });
      setData(response.data.data);
      setTotalPages(response.data.pages);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleFilterChange = (e) => {
    setLeter(e.target.value);
    setPage(1); // Reset to first page when filters change
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-16 px-20">
        <div className="mb-9 flex gap-5 items-center">
          <p>Search the company by Name:</p>
          <input
            type="text"
            className="bg-transparent border border-[rgba(255,255,255,.6)] h-[45px] w-[350px] px-3 text-sm rounded-md"
            value={letter}
            onChange={handleFilterChange}
            placeholder="Search ..."
          />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-white border border-[rgba(255,255,255,.3)] rounded-md">
          <thead className="text-xs  uppercase bg-transparent text-white border-b border-[rgba(255,255,255,.3)] ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr. No
              </th>
              <th scope="col" className="px-6 py-3">
                Company name
              </th>
              <th scope="col" className="px-6 py-3">
                Founded At
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Total Funding Rounds
              </th>
            </tr>
          </thead>
          <tbody className="text-[rgba(255,255,255,.6)]">
            {data?.map((item, index) => (
              <tr className="  border-b border-[rgba(255,255,255,.3)]">
                <td className="px-6 py-4">{(page - 1) * 10 + index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap text-[rgba(255,255,255,.9)]"
                >
                    <Link to={`/companies/${item?._id}`}>
                  {item?.name}

                    </Link>
                </th>
                <td className="px-6 py-4">{item?.founded_at}</td>
                <td className="px-6 py-4 capitalize">{item?.category_code}</td>
                <td className="px-6 py-4 capitalize">{item?.status}</td>
                <td className="px-6 py-4">{item?.funding_rounds}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="my-8">
          <button
            className="bg-[#826BF8] text-white px-6 py-3 rounded-md mr-4"
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="bg-[#826BF8] text-white px-6 py-3 rounded-md ml-4"
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>


      </div>
      <div className="line left"></div>

    </>
  );
};

export default CompanyTable;
