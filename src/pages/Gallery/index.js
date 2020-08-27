import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pic1 from './Pics/1.jpg'
import pic2 from './Pics/2.jpg'
import pic3 from './Pics/3.jpg'
import pic4 from './Pics/4.jpg'
import pic5 from './Pics/5.jpg'
import pic6 from './Pics/6.png'
import pic7 from './Pics/7.jpg'
import pic8 from './Pics/8.jpg'
import pic9 from './Pics/9.jpg'
import pic10 from './Pics/10.jpg'
import pic11 from './Pics/11.jpg'
import pic12 from './Pics/12.jpg'
import pic13 from './Pics/13.jpg'
import pic14 from './Pics/14.png'
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
                        <Image pic1={pic1}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic2}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic3}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic4}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic5}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic6}/>
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic7} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic8} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic9} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic10} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic11} />
                    </Col>
                    <Col lg="4" md="6">
                        <Image pic1={pic12} />
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default Gallery