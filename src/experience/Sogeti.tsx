import * as React from "react";
import { JobItem } from "../core/JobItem";
import { Link } from "../core/Link";

export const Sogeti: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Sogeti",
        link: "https://www.sogeti.lu/",
      }}
      location="Bertrange, Luxembourg"
      position="Consultant .NET"
      dates={{
        from: "February 2020",
        to: "December 2020",
      }}
      techStack={[
        "HTML5 & CSS3",
        "SCSS",
        "TypeScript",
        "react",
        "redux",
        "react-router",
        "react-query",
        "webpack",
        "jest",
        "react-testing-library",
        "ESLint",
        "Prettier",
        "Git",
      ]}
      bullets={[
        <>
          <Link highlight label="NSPA" href="https://www.linkedin.com/company/nspa/?originalSubdomain=lu" />{" "}
          Logistics Stock Exchange Software fully-secured, 
          web-based application that supports the joint 
          management of materiel among different international site. 
          This joint management is mainly based on visibility of national inventories, 
          redistribution of assets among the partners and 
          consolidated procurement facilitated by access to 
          Outline Agreements available for immediate 
          online ordering in a modern, electronic, paperless environment.
        </>,
        <>
        <Link highlight label="PWC" href="https://www.pwc.lu/" />{" "}
        Worked on implementing in-house software to improve the efficiency and 
        processes of PwC. The team is dedicated to build, optimize and 
        maintain the internal systems, that ultimately fuel 
        the day to day operations of the organization.
      </>
      ]}
    />
  );
};
