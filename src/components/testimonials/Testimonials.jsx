import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import testimonialImg from '../../assets/images/review1.png'
import './testimonial.css'
import Slider from 'react-slick'

const Testimonials = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return (
        <section id='review'>
            <Container>
                <Row>
                    <Col lg='8' sm='12' md='12' className='m-auto'>

                        <div className="slider__wrapper d-flex align-item-center gap-5">
                            <div className="slider__content w-50">
                                <h2 className='mb-4'>What our customers are saying</h2>
                                <Slider {...settings}>
                                    <div>
                                        <div className="single__testimonial">
                                            <p className="review__content">
                                                " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, earum deserunt unde eos odio ullam voluptate ratione asperiores illo ex repellendus commodi quidem, porro est tempore voluptas officiis dignissimos similique."
                                            </p>
                                            <h6>Sharan</h6>
                                            <p>web Developer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single__testimonial">
                                            <p className="review__content">
                                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, earum deserunt unde eos odio ullam voluptate ratione asperiores illo ex repellendus commodi quidem, porro est tempore voluptas officiis dignissimos similique."
                                            </p>
                                            <h6>Manju</h6>
                                            <p>web Developer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="single__testimonial">
                                            <p className="review__content">
                                                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, earum deserunt unde eos odio ullam voluptate ratione asperiores illo ex repellendus commodi quidem, porro est tempore voluptas officiis dignissimos similique."
                                            </p>
                                            <h6>Basu</h6>
                                            <p>Python Developer</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slider__img w-50">
                                <img src={testimonialImg} alt="" className='w-100' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials