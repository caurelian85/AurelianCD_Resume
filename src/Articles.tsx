import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const Articles: React.FC = () => {
  return (
    <Section header="Articles">
      <BulletedList
        bullets={[
          {
            label: "Label_name",
            href: "https://link.com",
          },
        ]}
      />
    </Section>
  );
};
