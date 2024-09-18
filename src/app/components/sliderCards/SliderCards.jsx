import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "./SliderCards.css";
import cat_1 from "../../assets/images/cat_1.webp";
import cat_2 from "../../assets/images/cat_2.webp";
import cat_3 from "../../assets/images/cat_3.webp";
import cat_4 from "../../assets/images/cat_4.webp";
import cat_5 from "../../assets/images/cat_5.webp";
import cat_6 from "../../assets/images/cat_6.webp";
import cat_7 from "../../assets/images/cat_7.webp";
import cat_8 from "../../assets/images/cat_8.webp";
import cat_9 from "../../assets/images/cat_9.webp";
import cat_10 from "../../assets/images/cat_10.webp";
import cat_11 from "../../assets/images/cat_11.webp";
import cat_12 from "../../assets/images/cat_12.webp";

const SliderCards = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 1200, // للشاشات الكبيرة
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 992, // للشاشات المتوسطة
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                }
            },
            {
                breakpoint: 768, // للشاشات الصغيرة
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 576, // للشاشات الصغيرة جداً
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
        ]
    };



    return (
        <div className="slider-container relative">
            <Container>
                <Row className="justify-content-center text-center mb-4 mt-5">
                    <Col sm={12} md={12}>
                        <p className="page-title  font-serif">
                            SHOP
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <Slider {...settings} className="Cards-slider">


                            <div className="cat_image">
                                <img src={cat_1} alt="" />
                                <div className="cat_title">
                                    Gemstone
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_2} alt="" />
                                <div className="cat_title">
                                    Chocker
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_3} alt="" />
                                <div className="cat_title">
                                    Necklace
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_4} alt="" />
                                <div className="cat_title">
                                    Rings
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_5} alt="" />
                                <div className="cat_title">
                                    Pens
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_6} alt="" />
                                <div className="cat_title">
                                    Button
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_7} alt="" />
                                <div className="cat_title">
                                    Cufflinks
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_8} alt="" />
                                <div className="cat_title">
                                    Starfish
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_9} alt="" />
                                <div className="cat_title">
                                    Gift Set
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_10} alt="" />
                                <div className="cat_title">
                                    Earrings
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_11} alt="" />
                                <div className="cat_title">
                                    Chain
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                            <div className="cat_image">
                                <img src={cat_12} alt="" />
                                <div className="cat_title">
                                    Rings
                                    <div className="cat_title_underline"></div>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SliderCards;
