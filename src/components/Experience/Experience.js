import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';

function Experience() {

    const { theme } = useContext(ThemeContext);
    return (
        <div id="experience" style={{ minHeight: "100vh", backgroundColor: theme.secondary, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>

                <h1 style={{ color: "white" }}>Experince section Comming so0n !!</h1>

            </div>
        </div>
    )
}

export default Experience
