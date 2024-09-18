import "./BasicCards.css";
import { Container, Row, Col } from 'react-bootstrap';
import { LuLayoutGrid } from "react-icons/lu";
import { TfiLayoutWidthFull } from "react-icons/tfi";
import product1 from "../../assets/imagesCards/product1.webp"

const BasicCards = () => {
    return (
        <div className="BasicCards-container min-h-screen relative">
            <Container>
                <Row className="pt-4 pb-4">
                    <Col sm={12} md={12}>
                        <div className="IconTitle font-sans">
                            <div className="cursor-pointer">
                                <LuLayoutGrid className="IconSvg" />
                                <p>Default sorting</p>
                            </div>

                            <div className="cursor-pointer">
                                <TfiLayoutWidthFull className="IconSvg" />
                                <p>Only products on sale</p>
                            </div>

                            <div>
                                <p>Showing 1–24 of 87 results</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="pt-4 g-4" xs={2} md={4} >
                    <Col sm={12} md={12}>
                        <div className="CartBox">
                            <div className="Box_Card_Content">
                                <img src={product1} alt="" />
                                <div className="Box_Card_title">
                                    Gemstone
                                </div>
                            </div>
                            <div className="Box_Card_Content">
                                <img src={product1} alt="" />
                                <div className="Box_Card_title">
                                    Gemstone
                                </div>
                            </div>

                            <div className="Box_Card_Content">
                                <img src={product1} alt="" />
                                <div className="Box_Card_title">
                                    Gemstone
                                </div>
                            </div>

                            <div className="Box_Card_Content">
                                <img src={product1} alt="" />
                                <div className="Box_Card_title">
                                    Gemstone
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BasicCards;
