import React from 'react'
import { Row, Col } from 'react-bootstrap';

function ContactMe() {
  return (
    <div className="Experience_Row">
      <Row>
        <Col lg={6}>
          <img
            src={require("./../Assests/Contact1.png")}
            width="100%"
            height="100%"
            alt=""
          />
        </Col>
        <Col lg={6} className="Exp_Col">
          <div className="Exp_Content">
            <h1>Contact Me</h1>
            <p className="exp_p">
              I am available on almost every social media. You can message me, I
              will reply within 24 hours. I can help you with Reactjs Frontend,
              Redux, React Native and MongoDb.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="Con_Col">
          <div className="Con_Content">
            <h1>Address</h1>
            <p className="exp_p">
              Ravindra Nagar, T.Dasarahalli, Bangalore, Karnataka 560057.
            </p>
            <h1>Phone Number</h1>
            <p className="exp_p">+91 9742409231</p>
          </div>
        </Col>
        <Col lg={6}>
          <img
            src={require("./../Assests/Contact2.png")}
            width="100%"
            height="100%"
            alt=""
          />
        </Col>
      </Row>
      <Row className="my-5">
        <p className="last_Content">
          Made with <i class="fa-sharp fa-solid fa-heart"></i> by Ranjith Reddy
          M A
        </p>
      </Row>
    </div>
  );
}

export default ContactMe