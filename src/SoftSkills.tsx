import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const SoftSkills: React.FC = () => {
  return (
    <Section header="Soft skills">
      <BulletedList
        bullets={[
          "Effective communication",
          "Leadership and mentoring",
          "Teamwork",
          "Time management and prioritization",
          "Critical thinking and problem solving",
          "Adaptability and flexibility",
          "Creativity and innovation",
          "Professional ethics and responsibility",
          "Fast learner",
        ]}
      />
    </Section>
  );
};
