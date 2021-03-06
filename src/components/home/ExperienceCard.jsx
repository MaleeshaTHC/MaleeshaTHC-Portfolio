import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <p className="text-left">
                    {data.role}
                    <br/>
                    {data.date}
                    <br /><br/>
                    <div className="pb-5 text-left">
                        {data.description}
                    </div>                    
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;