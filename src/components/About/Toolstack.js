import React from "react";
import { Col, Row } from "react-bootstrap";
import {BsDiscord} from "react-icons/bs";
import {SiNetlify} from "react-icons/si";
import {SiSublimetext} from "react-icons/si";
import {FaAtom} from "react-icons/fa";
import {BsMicrosoftTeams} from "react-icons/bs";
import {SiAnaconda} from "react-icons/si";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <BsDiscord />
        <h3>DISCORD</h3>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3>VS CODE</h3>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h3>NETLIFY</h3>
       </Col>
    </Row>
  );
}

export default Toolstack;
