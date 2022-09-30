import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ToolTips from '../Atoms/ToolTips';
import './../Components/Custom.scss'

function Home() {
  return (
    <div className="Main_Home">
      <Row>
        <Col lg={6} className="Main_Col">
          <div className="Text_Col">
            <h1>Ranjith Reddy M A</h1>
            <h3>(Software Developer)</h3>
            <p>
              A passionate individual who always thrive to work on end to end
              products which develop sustainable and scalable social and
              technical systems to create impact.
            </p>
            <div className="Icon_div">
              <a href="https://github.com/Ranjith-21/E-KART-MINIPROJECT">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ranjith-reddy-m-a-563b12241">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>
        </Col>
        <Col lg={6} className="Image_Col">
          <img
            src={require("./../Assests/feeling_Proud.png")}
            alt="feeling Proud"
            height="80%"
            width="90%"
          />
        </Col>
      </Row>
      <Row className="Second_Row">
        <h1>What I Do?</h1>
        <Col lg={6}>
          <img
            src={require("./../Assests/What_i_do.png")}
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
        <Col lg={6} className="Second_Col">
          <h1>Front-End Developer</h1>
          <div className="Icon_div">
            <ToolTips
              title={<i class="fa-brands fa-html5"></i>}
              value={"HTML"}
            />
            <ToolTips
              title={<i class="fa-brands fa-css3-alt"></i>}
              value={"CSS"}
            />
            <ToolTips
              title={<i class="fa-brands fa-react"></i>}
              value={"React"}
            />
            <ToolTips
              title={<i class="fa-brands fa-square-js"></i>}
              value={"JavaScript"}
            />
            <ToolTips
              title={<i class="fa-solid fa-database"></i>}
              value={"Database"}
            />
            <ToolTips
              title={<i class="fa-brands fa-sass"></i>}
              value={"Sass"}
            />
            <ToolTips title={<i class="fa-brands fa-npm"></i>} value={"NPM"} />
          </div>
          <div className="div_content">
            <p>
              <i class="fa-solid fa-bolt"></i> Building resposive website front
              end using React-Redux.
            </p>
            <p>
              <i class="fa-solid fa-bolt"></i> Monitoring and improving
              front-end performance by making use of reusable components.
            </p>
            <p>
              <i class="fa-solid fa-bolt"></i> Integrating 3rd party libraries to make Application more interactive and responsive.
            </p>
            <p>
              <i class="fa-solid fa-bolt"></i>Integrated HTTP Interceptors to
              handle problems across the board.
            </p>
            <p>
              <i class="fa-solid fa-bolt"></i> Experience Working on several
              Project based on React.
            </p>
          </div>
        </Col>
        <p className="last_Content">
          Made with <i class="fa-sharp fa-solid fa-heart"></i> by Ranjith Reddy M
          A
        </p>
      </Row>
    </div>
  );
}

export default Home