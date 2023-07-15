import React from 'react'
import './hero.css'
import {Container,Row,Col,Button} from 'react-bootstrap'


const Hero = () => {
  return (
    <div className="hero">
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="hero_title">
                        <h1><span>Caring</span> for Pets, <span>Creating</span> Smiles</h1>
                        <p>PetPlus Pet Care Center is a comprehensive facility dedicated to providing exceptional care for pets. Our center offers a range of services to ensure the health, happiness, and well-being of furry companions. With a team of highly skilled and compassionate professionals, we strive to create a comfortable and safe environment for pets and their owners.</p>
                    </div>
                    <div className="hero_buttons">
                        <Button className='appointmrnt_btn'>Get Appointment </Button>
                        <Button className='contact_btn'>Contact US </Button>

                    </div>
                </Col>



            </Row>
        </Container>

    </div>
  )
}

export default Hero