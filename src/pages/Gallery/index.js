import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pic1 from './Pics/1.JPG'
import pic2 from './Pics/2.JPG'
import pic3 from './Pics/3.JPG'
import pic4 from './Pics/4.JPG'
import pic5 from './Pics/5.JPG'
import pic6 from './Pics/6.JPG'
import pic7 from './Pics/7.JPG'
import Image from './image'
import './Gallery.css'

const Gallery = () => {

    return(
        <>
            <Container className="text-center" style={{marginTop:'69px'}}>
                <h1 className="GalleryTitle">GALLERY</h1>
                <div className="Galleryline1"></div>
                <div className="Galleryline2"></div>
                <Row>
                    <Col lg="4" md="6">
                        <Image pic={pic1}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic2}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic3}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic4}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic5}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic6}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic7} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic1} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic2} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic3} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic4} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic={pic5} />
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default Gallery