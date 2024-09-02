import * as React from "react";
import { JobItem } from "../core/JobItem";

export const SoftVision: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "SoftVision",
        link: "https://spotify.com/",
      }}
      location="Bucharest, Romania"
      position="Web developer"
      dates={{
        from: "January 2014",
        to: "February 2015",
      }}
      techStack={[
        ".NET Framework 3.5, C#, ASP.NET Web Forms",
        "Oracle SQL",
        "Agile, Scrum, Atlassian JIRA, Confluence",
        "TFS",
      ]}
      bullets={[
        "Code refactoring, improve performance of application.",
      ]}
    />
  );
};
