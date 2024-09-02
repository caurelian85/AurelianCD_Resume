import * as React from "react";
import { EducationItem } from "./core/EducationItem";
import { Section } from "./core/Section";

export const Education: React.FC = () => {
  return (
    <Section header="Education">
      <EducationItem
        institution={{
          name: "Faculty of Electronics, Telecommunications and Information Technology",
          href: "http://www.electronica.pub.ro/",
        }}
        location="Bucharest, Romania"
        degree="Master's degree"
        faculty="Multimedia technologies for medical applications"
        dates={{
          from: "2012",
          to: "2014/2021",
        }}
      />
      <EducationItem
        institution={{
          name: "Faculty of Automatic Control and Computer Engineering",
          href: "https://ac.tuiasi.ro/",
        }}
        location="Iasi, Romania"
        degree="Bachelor's degree"
        faculty="Computer Science and Engineering"
        dates={{
          from: "2004",
          to: "2009",
        }}
      />
    </Section>
  );
};
