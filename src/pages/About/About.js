import React from 'react'
import { homeObjOne} from './Data';
import { InfoSection, Pricing } from '../../components';

const About = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default About;
