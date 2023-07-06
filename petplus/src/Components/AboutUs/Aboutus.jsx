import React from 'react'
import './aboutus.css'
import {Container,Row,Col,Button} from 'react-bootstrap'
import AboutImg from '../../assets/image/About-img.png'

const Aboutus = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="about_design">
                    <span class="dot"></span>
                    <span class="dot2"></span>
                    <div className="about_img">
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="experience">
                        <h3>15+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="Clients">
                        <h3>500+</h3>
                        <p>Years Experience</p>
                    </div>
                    </div>
                </Col>
                <Col lg='6'></Col>

            </Row>
        </Container>

    </div>
  )
}

export default Aboutus