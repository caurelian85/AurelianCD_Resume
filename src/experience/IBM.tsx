import * as React from "react";
import { JobItem } from "../core/JobItem";

export const IBM: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "IBM",
        link: "https://meta.com",
      }}
      location="Bucharest, Romania"
      position="Full-stack Engineer - IT Consultant"
      dates={{
        from: "October 2017",
        to: "September 2018",
      }}
      techStack={[
        ".NET Framework 4.5, C#, Web.API",
        "Xamarin",
        "MS SQL, SQLite",
        "PostMan, SoapUI, WCFStorm",
        "Agile, Scrum, Atlassian JIRA",
        "TFS",
      ]}
      bullets={[
        "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
        "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
        "Esse dolores ut praesentium excepturi",
      ]}
    />
  );
};
