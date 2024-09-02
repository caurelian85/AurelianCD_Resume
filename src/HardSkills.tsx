import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const HardSkills: React.FC = () => {
  return (
    <Section header="Hard skills">
      <BulletedList
        bullets={[
          "C#, .NET (Framework/CORE)",
          "Entity Framework, MSSQL, Oracle SQL",
          "Web API, WCF"
          "HTML, CSS",
          "React.js, Angular",
          "JavaScript, Typescript",
          "Express.js, Node.js (CLI apps)",
          "OOP, SOLID, Patterns",
          "Testing",
          "CI/CD, GIT, TFS",
          "Agile, Scrum",
          "UX, Animations",
        ]}
      />
    </Section>
  );
};
