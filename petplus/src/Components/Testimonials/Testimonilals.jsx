import React from 'react'
import './testimonial.css'

import {Container} from 'react-bootstrap'
import Subtitle from '../SubTitle/Subtitle'

function Testimonilals() {
  return (
    <div className='testimonial-bc'>
        <Container>
        <div className="">
          <Subtitle title={"Our Team"} />
        </div>
        <div className="Testi-title">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Professional expert team
          </h2>
          <p className="Tsesti-p" data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus pariatur inventore, voluptate reprehenderit odio error
            architecto sit dignissimos
          </p>
        </div>
        <section>
            
                <div class="row d-flex justify-content-center"  data-aos="fade-zoom-in"data-aos-duration="1000" >
                    <div class="col-md-4 style-3 ">
                        <div class="tour-item  ">
                            <div class="tour-desc bg-white tm-card">
                                <div class="tour-text color-grey-3 text-center">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea expedita molestias earum nesciunt commodi quidem accusantium? Officiis&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Imon Hossian</div>
                                <div class="link-position d-flex justify-content-center">Pet Owner</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white tm-card">
                                <div class="tour-text color-grey-3 text-center">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea expedita molestias earum nesciunt commodi quidem accusantium? Officiis&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                <div class="link-position d-flex justify-content-center">Pet Owner</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white tm-card">
                                <div class="tour-text color-grey-3 text-center">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea expedita molestias earum nesciunt commodi quidem accusantium? Officiis&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                <div class="link-position d-flex justify-content-center">Pet Owner</div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </section>
        </Container>



    </div>
  )
}

export default Testimonilals