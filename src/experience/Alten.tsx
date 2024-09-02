import * as React from "react";
import { JobItem } from "../core/JobItem";

export const Alten: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Alten",
        link: "https://altenromania.ro/ro/",
      }}
      location="Bucharest, Romania"
      position="Full-stack Engineer - IT Consultant"
      dates={{
        from: "May 2015",
        to: "October 2017",
      }}
    />
  );
};
