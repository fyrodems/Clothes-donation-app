import React, {useState} from 'react';
import Title from "../../common/Title";
import PropTypes from 'prop-types';

import {foundations} from "../../../data/organizations and foundations";
import {organizations} from "../../../data/organizations and foundations";
import {foundraising} from "../../../data/organizations and foundations";

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel (props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HomeOrganizations = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="organization" id="organizations">
            <Title title="Komu pomogamy?"/>

            <Box>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Fundacjom" {...a11yProps(0)} />
                        <Tab label="Organizacjom pozarządowym" {...a11yProps(1)} />
                        <Tab label="Lokalnym zbiórkom" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <p className="organizations__content">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <ul>
                        {foundations.map((elem, index) => {
                            return <li className="list__element" key={index}>
                                <div className="element__field">
                                    <span>{elem.name}</span>
                                    <span>{elem.aim}</span>
                                </div>
                                <div>
                                    <span>{elem.donation}</span>
                                </div>
                            </li>
                        })}
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <p className="organizations__content">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <ul>
                        {organizations.map((elem, index) => {
                            return <li className="list__element" key={index}>
                                <div className="element__field">
                                    <span>{elem.name}</span>
                                    <span>{elem.aim}</span>
                                </div>
                                <div>
                                    <span>{elem.donation}</span>
                                </div>
                            </li>
                        })}
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <p className="organizations__content">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </p>
                    <ul>
                        {foundraising.map((elem, index) => {
                            return <li className="list__element" key={index}>
                                <div className="element__field">
                                    <span>{elem.name}</span>
                                    <span>{elem.aim}</span>
                                </div>
                                <div>
                                    <span>{elem.donation}</span>
                                </div>
                            </li>
                        })}
                    </ul>
                </TabPanel>
            </Box>
        </section>
    );
};

export default HomeOrganizations;