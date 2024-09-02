import * as React from "react";
import { JobItem } from "../core/JobItem";

export const GE: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "General Electric",
        link: "https://www.gevernova.com/",
      }}
      location="Bucharest, Romania"
      position="Senior Software Engineer"
      dates={{
        from: "September 2018",
        to: "Present",
      }
    }
      techStack={[
        "ASP.NET Core & ASP.NET Web API",
        "MS SQL - SSRS & SSIS",
        "HTML5 & CSS3",
        "TypeScript",
        "Angular (CLI)",
        "ESLint",
        "Git & Teamcity",
      ]}
      bullets={[
        "Responsible for programing a component, feature and or feature set. Works independently and contributes to the immediate team and to other teams across business.",
        "Responsibilities:",
        "- Translate application storyboards and use cases into functional applications;",
        "- Design, build, and maintain efficient, reusable, and reliable code;",
        "- Integrate data storage solutions: SQL Server Database;",
        "- Ensure the best possible performance, quality, and responsiveness of applications;",
        "- Identify bottlenecks and bugs, and devise solutions to mitigate and address these issues;",
        "- Help maintain code quality, organization, and automatization.",
      ]}
    />
  );
};
