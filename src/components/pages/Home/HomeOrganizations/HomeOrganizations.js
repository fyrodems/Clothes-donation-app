import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Title from "../../../common/Title";
import TabPanel from "./TabPanel";
import { foundations } from "../../../../data/organizations and foundations";
import { organizations } from "../../../../data/organizations and foundations";
import { foundraising } from "../../../../data/organizations and foundations";

const HomeOrganizations = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="organizations" id="organizations">
      <Title title="Komu pomogamy?" />
      <Tabs
        className="organizations__btns"
        value={value}
        onChange={handleChange}
      >
        <Tab className="button" disableRipple label="Fundacjom" />
        <Tab
          className="button"
          disableRipple
          label="Organizacjom pozarządowym"
        />
        <Tab className="button" disableRipple label="Lokalnym zbiórkom" />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        array={foundations}
        description={`W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                    Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.`}
      />

      <TabPanel
        value={value}
        index={1}
        array={organizations}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.`}
      />

      <TabPanel
        value={value}
        index={2}
        array={foundraising}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud.`}
      />
    </section>
  );
};

export default HomeOrganizations;
