import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Certifications = ({certifications}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {certifications.heading}
                    </h2>
                    <Row>
                        {
                            certifications.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Certifications;