import React from "react";
import "./pricing.css";
import { Container } from "react-bootstrap";
import Subtitle from "../SubTitle/Subtitle";

function Pricing() {
  return (
    <div className="pricing-bg">
      <Container>
        <div className="S_subtitle">
          <Subtitle title={"Pricing Plan"} />
        </div>
        <div className="service_title">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Choose our best pricing plan
          </h2>
          <p className="st_p" data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus pariatur inventore, voluptate reprehenderit odio error
            architecto sit dignissimos
          </p>
        </div>
        <div className="pricing-cards">
          <div class=" d-flex">
            <div class="Card" data-aos="fade-up" data-aos-duration="2000">
              <h3 class="title">Basic Plan</h3>
              <div class="pricingTable ">
                <p class="price-value">
                  <span class="value-bg">$ 25</span>/per Visit
                </p>
                <hr></hr>
                <ul class="pricing-content">
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Pet
                    Grooming
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Fitness
                    Checkup
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Hair and
                    Nail Cut
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-xmark"></i>Control Hair
                    Falling
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-xmark"></i>Vaccination Care
                  </li>
                </ul>
                <button className="pricing-btn">Choose Plan</button>
              </div>
            </div>
            <div class="Card" data-aos="fade-up" data-aos-duration="1000">
              <h3 class="title-standard">Standard Plan</h3>
              <div class="pricingTable ">
                <p class="price-value">
                  <span class="value-bg">$ 35</span>/per Visit
                </p>
                <hr></hr>
                <ul class="pricing-content">
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Pet
                    Grooming
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Fitness
                    Checkup
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Hair and
                    Nail Cut
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Control
                    Hair Falling
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-xmark"></i>Vaccination Care
                  </li>
                </ul>
                <button className="pricing-btn">Choose Plan</button>
              </div>
            </div>
            <div class="Card" data-aos="fade-up" data-aos-duration="2000">
              <h3 class="title">Primium Plan</h3>
              <div class="pricingTable ">
                <p class="price-value">
                  <span class="value-bg">$ 55</span>/per Visit
                </p>
                <hr></hr>
                <ul class="pricing-content">
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Pet
                    Grooming
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Fitness
                    Checkup
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Hair and
                    Nail Cut
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Control
                    Hair Falling
                  </li>
                  <li>
                    <i class="fa-sharp fa-solid fa-check-double"></i>Vaccination
                    Care
                  </li>
                </ul>
                <button className="pricing-btn">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Pricing;
