import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import { FaUserAstronaut } from "react-icons/fa6";

import { getCookie, isAuth } from "../../auth/helper";
import BASE_URL from "../../baseUrl";
import axios from "axios";
import GlobalStorage from "../../Storage/ContextProvider";
import { toast } from "react-toastify";

const Chat = () => {
  const [content, setContent] = useState("");

  const [userPartnerShip, setUserPartnerShip] = useState();
  const { userProfile } = useContext(GlobalStorage);
  const [selectedPerson, setSelectedPerson] = useState();
  const [messages, setMessages] = useState([]);
  const [refreshMsg, setRefreshMsg] = useState(false)

  const token = getCookie("token");
  useEffect(() => {
    getUserPartnership();
  }, []);

  const getUserPartnership = async () => {
    const getPartnership = await axios({
      method: "GET",
      url: `${BASE_URL}/partnership/get`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("User Partneruyuuuuuuship Success", response);
        setUserPartnerShip(response?.data);
      })
      .catch((error) => {
        console.log("User Partnership  Error", error?.response);
      });
  };

  const handleSendChat = async (e) => {
    e.preventDefault();
    if (userProfile?.role === "business") {
      var data = {
        content,
        receiverId: selectedPerson?.creator?._id,
      };
    } else if (userProfile?.role === "creator") {
      var data = {
        content,
        receiverId: selectedPerson?.business?._id,
      };
    }
    if(content) {
      const sendMessage = await axios({
        method: "POST",
        url: `${BASE_URL}/message`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      })
        .then((response) => {
          console.log("Message Send Success", response);
          setContent("");
          setRefreshMsg(!refreshMsg);
        })
        .catch((error) => {
          console.log("Message Send  Error", error?.response);
        });
    }
   
  };

  useEffect(() => {
    getMessages();
  }, [selectedPerson,refreshMsg]);

  const getMessages = async () => {
    let userId;
    if (userProfile?.role === "business") {
      userId = selectedPerson?.creator?._id;
    } else if (userProfile?.role === "creator") {
      userId = selectedPerson?.business?._id;
    }
    const messages = axios({
      method: "GET",
      url: `${BASE_URL}/message/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Message Get Success", response);
        setMessages(response.data);
      })
      .catch((error) => {
        console.log("Message get  Error", error?.response);
      });
  };

  
  return (
    <>
      <Navbar />
      <div className="mt-5 px-12">
        <div className="mt-16 flex gap-10">
          <div className="w-[20%]">
            <DashboardSidebar
            active="chat"
            />
          </div>

          <div className="w-[80%]">
            <div className="flex gap-5">
              <div className="w-[30%] shadow-lg  ">
                <h2 className="font-[600] pb-5 pl-4 fixed z-100 bg-white ">
                  All Conversations
                </h2>

                {userProfile?.role === "business" && (
                  <>
                    <div className="mt-5 h-[75vh]  p-5 overflow-y-scroll">
                      {userPartnerShip?.map((data) => {
                        return (
                          <>
                            <div
                              className={` ${
                                selectedPerson?._id === data?._id
                                  ? "bg-blue-400 text-white"
                                  : ""
                              } py-4 border-b mt-9 border-blue-200 cursor-pointer hover:bg-blue-400 hover:text-white px-2 rounded-md flex items-center gap-4`}
                              onClick={() => setSelectedPerson(data)}
                            >
                              <FaUserAstronaut />
                              <p className="font-[600]">
                                {data?.creator?.name} - {data?.companyName}
                              </p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                )}

                {userProfile?.role === "creator" && (
                  <>
                    <div className="mt-5 h-[75vh]  p-5 overflow-y-scroll">
                      {userPartnerShip?.map((data) => {
                        return (
                          <>
                            <div
                              className={` ${
                                selectedPerson?._id === data?._id
                                  ? "bg-blue-400 text-white"
                                  : ""
                              } py-4 border-b mt-9 border-blue-200 cursor-pointer hover:bg-blue-400 hover:text-white px-2 rounded-md flex items-center gap-4`}
                              onClick={() => setSelectedPerson(data)}
                            >
                              <FaUserAstronaut />
                              <p className="font-[600]">
                                {data?.business?.name} - {data?.companyName}
                              </p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              {!selectedPerson && <></>}

              {selectedPerson && (
                <>
                  <div className="w-[70%] max-h-[80vh] overflow-y-scroll ">
                    <div className="flex flex-col min-h-[80vh]">
                      <div className="flex-grow">
                        {/* Your main content goes here */}
                        <div className="p-4">
                          {userProfile?.role === "business" && (
                            <h1 className="text-2xl font-bold">
                              {selectedPerson?.creator?.name} (
                              {selectedPerson?.companyName})
                            </h1>
                          )}

                          {userProfile?.role === "creator" && (
                            <h1 className="text-2xl font-bold">
                              {selectedPerson?.business?.name} (
                              {selectedPerson?.companyName})
                            </h1>
                          )}

                          <br />
                          {messages?.map((data) => {
                            return (
                              <>
                                <div
                                  className={` ${
                                    data?.sender === userProfile?._id
                                      ? "w-full flex justify-end"
                                      : ""
                                  } `}
                                >
                                  <div
                                    className={` ${
                                      data?.sender === userProfile?._id
                                        ? "w-[45%] shadow-md px-4 py-2 rounded-md bg-blue-500 text-white my-4"
                                        : "w-[45%] shadow-md px-4 py-2 rounded-md bg-blue-50 my-4"
                                    } `}
                                  >
                                    <p>{data?.content}</p>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                          {/* <div className="w-[45%] shadow-md px-4 py-2 rounded-md bg-blue-50 my-4">
                            <p>
                              Hey, How are you hd kjahwdf nkawn alwjrfl nalwhj
                              alwjel nalwn lanwl nlawjer al alwejr lkaewj lawjer
                              lnawoehj
                            </p>
                          </div>

                          <div className="w-full flex justify-end">
                            <div className="w-[45%] shadow-md px-4 py-2 rounded-md bg-blue-500 text-white   my-4">
                              <p>
                                Hey, How are you hd kjahwdf nkawn alwjrfl nalwhj
                                alwjel nalwn lanwl nlawjer al alwejr lkaewj
                                lawjer lnawoehj
                              </p>
                            </div>
                          </div>
                          <div className="w-full flex justify-end">
                            <div className="w-[45%] shadow-md px-4 py-2 rounded-md bg-blue-500 text-white   my-4">
                              <p>
                                Hey, How are you hd kjahwdf nkawn alwjrfl nalwhj
                                alwjel nalwn lanwl nlawjer al alwejr lkaewj
                                lawjer lnawoehj
                              </p>
                            </div>
                          </div>

                          <div className="w-[45%] shadow-md px-4 py-2 rounded-md bg-blue-50 my-4">
                            <p>
                              Hey, How are you hd kjahwdf nkawn alwjrfl nalwhj
                              alwjel nalwn lanwl nlawjer al alwejr lkaewj lawjer
                              lnawoehj
                            </p>
                          </div> */}
                        </div>
                      </div>
                      <div className="sticky bottom-0 w-full bg-white p-4 shadow-md flex justify-center items-center">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="p-2 border border-gray-300 rounded-l-md w-full outline-none"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                        <button
                          className="p-2 bg-blue-500 text-white rounded-r-md"
                          onClick={(e) => handleSendChat(e)}
                        >
                          send
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
