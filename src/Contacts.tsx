import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Phone } from "./core/Phone";

export const Contacts: React.FC = () => {
  return (
    <BulletedList
      className="contacts"
      bullets={[
        "Oradea, Romania",
        <Phone countryCode="0040" number="720889398" />,
        {
          label: "aurelian.cozma.dunareanu@gmail.com",
          href: "mailto:aurelian.cozma.dunareanu@gmail.com",
        },
        {
          label: "GitHub",
          href: "https://github.com/caurelian85",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/caurelian/",
        },
      ]}
    />
  );
};
