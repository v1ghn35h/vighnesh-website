import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutMe.css'
import Figure from 'react-bootstrap/Figure';    
import { skillData, toolsData } from '../../data'; 
import Timeline from './Timeline';


const AboutMe = () => {
  return (
        <>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div>
                            <h1 id='aboutMe'>About Me</h1>
                            <hr class="center-ball"></hr>
                        </div>
                    </Col>  
                </Row>
                <Row className='mt-4'>
                    <Col>
                       <p>
                            I am a <strong>Year 3 Information Systems</strong> undergraduate majoring in <strong>Digitalisation & Cloud Solutions</strong> and <strong>Business Analytics</strong> at Singapore Management University. I am a <strong>self motivated</strong> individual who is constantly looking for opportunities to improve my skills and knowledge. I enjoy <strong>working as a team</strong> and am equally comfortable working <strong>independently</strong>. I am looking to further hone my skills in the field of <strong>Software Development</strong> and <strong>Machine Learning</strong>.
                        </p>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col xs={1}>
                        <h3>Skills:</h3>
                    </Col>
                    <Col className='d-flex justify-content-start'>
                        {skillData.map((skills) => {
                            return (
                                <Figure className='mx-2 text-center'>
                                    {skills.skill}
                                    <Figure.Caption>
                                        {skills.name}   
                                    </Figure.Caption>
                                </Figure>
                        );
                        })}
                    </Col>

                    <Col xs={2} className='ms-5'>
                        <h3>Technologies:</h3>
                    </Col>
                    <Col className='d-flex justify-content-start'>
                        {toolsData.map((tool) => {
                            return (
                                <Figure className='mx-2 text-center'>
                                    {tool.tool}
                                    <Figure.Caption>
                                        {tool.name}   
                                    </Figure.Caption>
                                </Figure>
                        );
                        })}
                    </Col>

                </Row>

                <Row className='mt-5'>
                    <Col className='d-flex justify-content-center'>
                        <div>
                            <h1>Timeline</h1>
                            <hr class="center-ball"></hr>
                        </div>
                    </Col>  
                </Row>

                <Row>
                    <Timeline />
                </Row>

            </Container>
        </>
    )
}

export default AboutMe