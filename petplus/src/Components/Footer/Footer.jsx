import React from 'react'
import './footer.css'
import {Container,Row,Col} from 'react-bootstrap'
import Logo from '../../assets/image/2.png'

function Footer() {
  return (
    <div>
        <Container>
            
            <div className="footer-section">
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="f-text">
                            <p>etPlus Pet Care Center is a comprehensive facility dedicated to providing exceptional care for pets.</p>
                        </div>

                    </Col>
                    <Col lg='3'>
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Out Team</a></li>
                            <li><a href="">Gallery</a></li>
                        </ul>

                    </Col>             
                    <Col lg='3'>
                        <h4>Contact us</h4>
                        <table>
                            <tr>
                                <td><i class="fa-sharp fa-solid fa-location-dot"></i></td>
                                <td>45 Tooting high ST, Landon 1178, UK.</td>
                            </tr>
                            <tr>
                                <td><i class="fa-solid fa-phone"></i></td>
                                <td>+22233672344</td>
                            </tr>
                            <tr>
                                <td><i class="fa-solid fa-envelope"></i></td>
                                <td>petplus344@gmail.com</td>
                            </tr>
                        </table>
                     
                        

                    </Col>             
                    <Col lg='3'>
                        <h4>Working Hours</h4>
                        <table>
                            <tr>
                                <th>Mon-Fri</th>
                                <td>09.00 am - 19.00 pm</td>
                            </tr>
                            <tr>
                                <th>Saturday</th>
                                <td>10.00 am - 18.00 pm</td>
                            </tr>
                            <tr>
                                <th>Sunday</th>
                                <td>We are Closed.</td>
                            </tr>
                        </table>

                    </Col>
                </Row>
            </div>


        </Container>
        <div className="follow-section ">
            <Container>
                <div className="f-items d-flex">
                <h4>Follow us on</h4>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-whatsapp"></i>
                </div>
            
            </Container>
                
            </div>
    </div>
  )
}

export default Footer