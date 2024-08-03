import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { RiRefund2Fill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import axios from "axios";
import BASE_URL from "../baseUrl";
import { toast } from "react-toastify";
import { getCookie } from "../auth/helper";
import GlobalStorage from "../Storage/ContextProvider";
import PageHeader from "../components/PageHeader";
import CompanyDetailComponent from "../components/CompanyDetailComponent";
import Footer from "../components/Footer";

const CompanyDetail = () => {
  const [companyDetail, setCompanyDetail] = useState();
  const [isEquityPopup, setIsEquityPopup] = useState(false);
  const [equity, setEquity] = useState("");
  const token = getCookie("token");
  const { userProfile } = useContext(GlobalStorage);

  const { id } = useParams();
  useEffect(() => {
    getCompanyDetail();
  }, []);

  const getCompanyDetail = async () => {
    const getCompany = await axios({
      method: "GET",
      url: `${BASE_URL}/companies/${id}`,
    })
      .then((response) => {
        console.log("get  Company Detail Success", response);
        setCompanyDetail(response?.data);
      })
      .catch((error) => {
        console.log("get  company Detail  Error", error?.response);
      });
  };
  const handleEquity = () => {
    setIsEquityPopup(!isEquityPopup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      equity,
      businessId: companyDetail?.owner,
      companyName: companyDetail?.companyName,
    };

    const createPartnerShip = await axios({
      method: "POST",
      url: `${BASE_URL}/partnership/create`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then((response) => {
        console.log("Create Partnership Success", response);
        toast.success("Your Request for Partnership sent Successfully");
        setIsEquityPopup(false)
      })
      .catch((error) => {
        console.log("reate Partnership   Error", error?.response);
        toast.error(error.response.data);
      });
  };
  return (
    <>
    <Navbar bgcolor="#18191d" />
    <PageHeader
        className="sub-bg"
        title="Companies Detail"
        paragraph="Here, you'll find more information of company, including offering unique products, services, and opportunities. Whether you're looking to partner, invest, or discover new solutions, our directory showcases the best in their respective industries. "
      />
      <CompanyDetailComponent />   
    <Footer />
    
    </>
  );
};

export default CompanyDetail;
