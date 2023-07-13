import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kanban from "../../Assets/Projects/kanban.png";
import googledocsclone from "../../Assets/Projects/googledocsclone.png";
import gymwebsite from "../../Assets/Projects/gymwebsite.png";
import twitterclone from "../../Assets/Projects/twitterclone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban}
              isBlog={false}
              title="Kanban Board"
              description="Technology->HTML | CSS | Javascript | Material UI(June 2023).A Kanban board is a visual project management tool that helps teams track and manage work using cards or sticky notes to
                           represent tasks and columns to represent stages of progress.A Kanban board provides a clear and intuitive way for teams to visualize their workflow and identify bottlenecks or areas of improvement. It promotes transparency and collaboration by making the status of each task easily accessible to all team members.
                           ."
              ghLink="https://github.com/mahaleashish/Kanban/compare/dev"
              demoLink="https://649b54cf9af97c0e387a003a--bright-lollipop-4d46d2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googledocsclone}
              isBlog={false}
              title="Google Docs Clone"
              description="Technology->React Js | CSS | Material UI(June 2023).Created a Google Docs web application that replicates the basic functionality. Google Docs is a popular cloud-based document editor that allows multiple users to collaborate on documents in real-time. By building a clone of google docs, we aim to provide a similar collaborative document editing experience. Google docs clone empowers users with essential productivity tools, such as spell-checking, word count, and easy formatting options."
              ghLink="https://github.com/mahaleashish/Google_Docs.git"
              demoLink="https://googlecloneready.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymwebsite}
              isBlog={false}
              title="Gym Website"
              description="Technology->React Js | CSS | Material UI | Carousel(July 2023).Gym website designed to inspire and empower fitness enthusiasts. Discover our state-of-the-art facilities, a diverse range of services, and flexible membership options. With stunning visuals and interactive carousels, we showcase our gym unique features and success stories. Join us on this fitness journey and unlock your full potential with our innovative online platform. I am passionate about creating an
              immersive online experience that promotes fitness and encourages user engagement."
              ghLink="https://github.com/mahaleashish/Gym.git"
              demoLink="https://gymfitnesssubham.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitterclone}
              isBlog={false}
              title="Twitter Clone"
              description="Technology->React Js | Redux | CSS | Material UI (May 2023) .Created a Twitter Clone web application where users can post short messages called tweets, follow other users, and engage in real-time conversations. Users can compose and post new tweets. The tweet composer could include character limits, and image uploading. Users can follow/unfollow other users, and follower count."
              ghLink="https://github.com/mahaleashish/Twitter_Clone.git"
              demoLink="https://subhamtwitterfinal.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
