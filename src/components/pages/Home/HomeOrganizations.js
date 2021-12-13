import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Title from "../../common/Title";
import {foundations} from "../../../data/organizations and foundations";
import {organizations} from "../../../data/organizations and foundations";
import {foundraising} from "../../../data/organizations and foundations";

const TabPanel = (props) => {
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

const a11yProps = (index) => {
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
        <section className="organizations" id="organizations">
            <Title title="Komu pomogamy?"/>
            <Box>
                <Box>
                    <Tabs className="organizations__btns" value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className="button" disableRipple label="Fundacjom" {...a11yProps(0)} />
                        <Tab className="button" disableRipple label="Organizacjom pozarządowym" {...a11yProps(1)} />
                        <Tab className="button" disableRipple label="Lokalnym zbiórkom" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <p className="organizations__content">
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                        Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
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