import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import { getCookie, isAuth } from "../../auth/helper";
import axios from "axios";
import BASE_URL from "../../baseUrl";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import GlobalStorage from "../../Storage/ContextProvider";

const Partnership = () => {
  const [userPartnerShip, setUserPartnerShip] = useState();
  const [isUpdatePopup, setIsUpdatePopup] = useState(false);
  const [pId, setPid] = useState("");
  const [status, setStatus] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);
  const token = getCookie("token");
  const { userProfile } = useContext(GlobalStorage);

  useEffect(() => {
    getUserPartnership();
  }, [isRefresh]);

  const getUserPartnership = async () => {
    const getPartnership = await axios({
      method: "GET",
      url: `${BASE_URL}/partnership/get`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("User Partnership Success", response);
        setUserPartnerShip(response?.data);
      })
      .catch((error) => {
        console.log("User Partnership  Error", error?.response);
      });
  };
  const handleStatus = (data) => {
    setIsUpdatePopup(true);
    setPid(data?._id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {
      status,
    };

    const updateStatus = await axios({
      method: "PUT",
      url: `${BASE_URL}/partnership/update-status/${pId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then((response) => {
        console.log("Status Success", response);
        toast.success("Status Updated Successfully");
        setIsUpdatePopup(false);
        setIsRefresh(!isRefresh);
      })
      .catch((error) => {
        console.log("Status  Error", error?.response);
        toast.error(error.response.data);
      });
  };
  return (
    <>
      <Navbar />
      <div className="mt-5 px-12">
        <div className="mt-16 flex gap-10">
          <div className="w-[20%]">
            <DashboardSidebar active="partnership" />
          </div>

          <div className="w-[80%]">
            {userProfile?.role === "creator" && (
              <>
                <h2 className="font-[600] text-[25px]">
                  Request sent for Equity
                </h2>
                <div class="flex flex-col mt-5 mb-10">
                  <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                      <div class="overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                              >
                                Company Name
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                              >
                                Business Owner Name
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                              >
                                Equity in %
                              </th>
                              <th
                                scope="col"
                                class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                              >
                                Current Status
                              </th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200">
                            {userPartnerShip
                              ?.filter((data) => data.creator?._id == isAuth())
                              ?.map((data) => {
                                return (
                                  <>
                                    <tr>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                        {data?.companyName}
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {data?.business?.name}
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                        {data?.equity}
                                      </td>
                                      {data?.status === "pending" && (
                                        <>
                                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button
                                              type="button"
                                              class="px-6 py-2 bg-yellow-400 text-white font-[600] text-sm rounded-md"
                                            >
                                              Pending
                                            </button>
                                          </td>
                                        </>
                                      )}
                                      {data?.status === "accepted" && (
                                        <>
                                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button
                                              type="button"
                                              class="px-6 py-2 bg-green-500 text-white font-[600] text-sm rounded-md"
                                              onClick={() => handleStatus(data)}
                                            >
                                              Accepted
                                            </button>
                                          </td>
                                        </>
                                      )}
                                      {data?.status === "rejected" && (
                                        <>
                                          <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button
                                              type="button"
                                              class="px-6 py-2 bg-red-500 text-white font-[600] text-sm rounded-md"
                                              onClick={() => handleStatus(data)}
                                            >
                                              Rejected
                                            </button>
                                          </td>
                                        </>
                                      )}
                                    </tr>
                                  </>
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {userProfile?.role === "business" && (
              <>
                <div>
                  <h2 className="font-[600] text-[25px]">
                    Requests of Partnership in Your Company
                  </h2>

                  <div class="flex flex-col mt-5">
                    <div class="-m-1.5 overflow-x-auto">
                      <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                                >
                                  Company Name
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                                >
                                  Creator Name
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                                >
                                  Equity in %
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                                >
                                  Update Status
                                </th>
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                              {userPartnerShip
                                ?.filter(
                                  (data) => data.business?._id == isAuth()
                                )
                                .map((data) => {
                                  return (
                                    <>
                                      <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                          {data?.companyName}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                          {data?.creator?.name}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                          {data?.equity}
                                        </td>
                                        {data?.status === "pending" && (
                                          <>
                                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                              <button
                                                type="button"
                                                class="px-6 py-2 bg-yellow-400 text-white font-[600] text-sm rounded-md"
                                                onClick={() =>
                                                  handleStatus(data)
                                                }
                                              >
                                                Pending
                                              </button>
                                            </td>
                                          </>
                                        )}
                                        {data?.status === "accepted" && (
                                          <>
                                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                              <button
                                                type="button"
                                                class="px-6 py-2 bg-green-500 text-white font-[600] text-sm rounded-md"
                                                onClick={() =>
                                                  handleStatus(data)
                                                }
                                              >
                                                Accepted
                                              </button>
                                            </td>
                                          </>
                                        )}
                                        {data?.status === "rejected" && (
                                          <>
                                            <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                              <button
                                                type="button"
                                                class="px-6 py-2 bg-red-500 text-white font-[600] text-sm rounded-md"
                                                onClick={() =>
                                                  handleStatus(data)
                                                }
                                              >
                                                Rejected
                                              </button>
                                            </td>
                                          </>
                                        )}
                                      </tr>
                                    </>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isUpdatePopup && (
              <div className="absolute top-[120px] w-[500px] h-[250px] border-2 border-blue-500 rounded-md left-[40%] bg-white p-[25px]">
                <div
                  className="flex justify-end w-full cursor-pointer"
                  onClick={() => setIsUpdatePopup(false)}
                >
                  <RxCross1 />
                </div>
                <h2 className="text-center font-[500] mt-5">
                  Update Equity Status
                </h2>

                <select
                  name="status"
                  id="status"
                  className="mt-6 mb-3 border-[1px] border-[rgba(0,0,0,.5)] outline-none w-full h-[45px] px-3"
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>

                <button
                  className="px-7 py-2 bg-blue-500 text-white rounded-md"
                  onClick={(e) => handleUpdate(e)}
                >
                  Update Status
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
