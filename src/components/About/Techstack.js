import React from "react";
import { Col, Row } from "react-bootstrap";
import {SiHtml5} from "react-icons/si";
// import {TbBrandMysql} from "react-icons/tb";
// import {SiDjango} from "react-icons/si";
import {BsBootstrapFill} from "react-icons/bs";
import {TbBrandRedux} from "react-icons/tb";
// import {SiZoho} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiPython,
} from "react-icons/di";
import {SiCss3} from "react-icons/si"


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h3>HTML</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h3>CSS</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3>JAVASCRIPT</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <BsBootstrapFill />
        <h3>BOOTSTRAP</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>REACT JS</h3>
      </Col>
        
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandRedux />
        <h3>REDUX</h3>
      </Col>
    </Row>
  );
}

export default Techstack;
