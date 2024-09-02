import * as React from "react";
import { Section } from "./core/Section";
import { GE } from "./experience/GE";
import { Sogeti } from "./experience/Sogeti";
import { IBM } from "./experience/IBM";
import { Alten } from "./experience/Alten";
import { SoftVision } from "./experience/SoftVision";
// import { EveryMatrix } from "./experience/EveryMatrix";
// import { OptimaGroup } from "./experience/OptimaGroup";
// import { FEPA } from "./experience/FEPA";

export const Experience: React.FC = () => {
  return (
    <Section header="Experience">
      <GE />
      <Sogeti />
      <IBM />
      <Alten />
      <SoftVision />
      {/* <EveryMatrix />
      <OptimaGroup />
      <FEPA /> */}
    </Section>
  );
};
