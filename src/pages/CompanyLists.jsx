import React from "react";
import PageHeader from "../components/PageHeader";
import CompanyTable from "../components/CompanyTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CompanyLists = () => {
  return (
    <>
      <Navbar 
      bgcolor="#18191d"
      />
      <PageHeader
        className="sub-bg"
        title="Companies List"
        paragraph="Here, you'll find a diverse range of companies, each offering unique products, services, and opportunities. Whether you're looking to partner, invest, or discover new solutions, our directory showcases the best in their respective industries. "
      />

      <CompanyTable />

      <Footer />
    </>
  );
};

export default CompanyLists;
