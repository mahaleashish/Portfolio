import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Mahale </span>
            from <span className="purple"> Betul,Madhya Pradesh.</span>
            
            <br /> I have 4 years of experience as a Development Engineer in automobile industry.
            <br />
            <br/>
            <span className="purple"><b><h3>EXPERIENCE</h3></b></span>
            <li className="about-activity">
            <ImPointRight /> I am currently as a Trainee Frontend developer at
            FunctionUp. (March 2023-Present).
            </li>
            <br />
            
            <li className="about-activity">
              <ImPointRight /> Played a key role in the design and development of bus body components, ensuring compliance with industry standards and
              specifications. Collaborated with cross-functional teams to analyze project requirements, create design concepts, and develop
              engineering solutions. Utilized CAD software (such as PTC Creo and AutoCAD ) to create 3D models and detailed engineering
              drawings. Implemented design modifications and improvements based on feedback from production, quality, and customer support teams. Successfully managed multiple projects simultaneously, adhering to strict timelines. Received recognition for outstanding performance. (Aug 2018-Oct 2022).
            </li>

          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
