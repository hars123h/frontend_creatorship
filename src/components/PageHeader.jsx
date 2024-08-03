import React from "react";

const PageHeader = ({ title, paragraph, className }) => {
  return (
    <>
      <section className={`page-header bg-[#18191d] ${className && className}`}>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="px-[50px] pt-[220px] pb-[50px] text-center">
              <h1 className="mb-10 color-font text-[80px] font-[600]">{title}</h1>
              <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
