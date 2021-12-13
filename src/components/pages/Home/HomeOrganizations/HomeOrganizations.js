import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import ReactPaginate from "react-paginate";
import Title from "../../../common/Title";
import TabPanel from "./TabPanel";
import {foundations} from "../../../../data/organizations and foundations";
import {organizations} from "../../../../data/organizations and foundations";
import {foundraising} from "../../../../data/organizations and foundations";

const allyProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HomeOrganizations = () => {
    //logic for tabs
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="organizations" id="organizations">
            <Title title="Komu pomogamy?"/>
            <Box>
                <Box>
                    <Tabs className="organizations__btns" value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className="button" disableRipple label="Fundacjom" {...allyProps(0)} />
                        <Tab className="button" disableRipple label="Organizacjom pozarządowym" {...allyProps(1)} />
                        <Tab className="button" disableRipple label="Lokalnym zbiórkom" {...allyProps(2)} />
                    </Tabs>
                </Box>
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
            </Box>
        </section>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default HomeOrganizations;