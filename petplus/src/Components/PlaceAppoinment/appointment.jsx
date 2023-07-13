import React from "react";
import "./appointment.css";
import { Container, Row, Col } from "react-bootstrap";

const appointment = () => {
  return (
    <div>
      <div className="PA_backgroun"></div>
      <div className="PA_Content">
        <Container>
          <div className="PA-box">
            <Row>
              <Col lg="6">
                <h3>Working Hours</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  facere quisquam nobis, reprehenderit dolorum labore dolor
                  voluptatibus perspiciatis.
                </p>
                <div className="PA-times">
                  <div className="PA-onetime ">
                    <h4>Mon-Fri</h4>
                    <p>09:00 am - 19:00 pm</p>
                  </div>
                  <div className="PA-onetime">
                    <h4>Saturday</h4>
                    <p>10:00 am - 18:00 pm</p>
                  </div>{" "}
                  <div className="PA-onetime">
                    <h4>Mon-Fri</h4>
                    <p>09:00 am - 19:00 pm</p>
                  </div>
                </div>
                <div className="PA-telephone d-flex">
                  <div className="PAT-icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <h4>+222 3367 2344</h4>
                </div>
              </Col>
              <Col lg="6">
                <div className="PA-form">
                  <h3>Get An Appoinment</h3>
                  <form>
                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Pet Care Plan"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <input
                          type="date"
                          class="form-control"
                          placeholder="Date"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="time"
                          class="form-control"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div>
                        <textarea
                          rows="4"
                          class="form-control"
                          placeholder="Text Your Massage"
                        />
                      </div>
                    </div>
                    <button>Get Appointment</button>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default appointment;
