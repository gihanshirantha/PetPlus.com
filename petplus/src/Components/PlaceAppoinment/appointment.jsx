import React,{useState} from "react";
import "./appointment.css";
import { Container, Row, Col } from "react-bootstrap";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    plan: '',
    date: '',
    time: '',
    textmassage: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  };
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
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="form-control"
                          placeholder="Name"
                           onChange={handleInputChange}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                           onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <input
                          type="number"
                          name="phoneNumber"
                          id="phoneNumber"
                          class="form-control"
                          placeholder="Phone Number"
                           onChange={handleInputChange}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          name="plan"
                          id="plan"
                          placeholder="Pet Care Plan"
                           onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <input
                          type="date"
                          name="date"
                          id="date"
                          class="form-control"
                          placeholderText="Date"
                           onChange={handleInputChange}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="time"
                          name="time"
                          id="time"
                          class="form-control"
                          placeholderText="Time"
                           onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div>
                        <textarea
                          rows="4"
                          name="textmassage"
                          id="textmassage"
                          class="form-control"
                          placeholder="Text Your Massage"
                           onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <button type="submit">Get Appointment</button>
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

export default Appointment;
