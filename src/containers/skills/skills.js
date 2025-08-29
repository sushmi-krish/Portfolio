import React from "react";
import './skills.css';
const Skills = ()=>{

  return(  
  <>
  
  <section className="skills-wapper">
    <h1 className="title">Skills</h1>
    <div className="skills-container">
      <h1>Front End</h1>
      <div className="vertical-line"></div>
     <ul>
        <li><a href = {`${process.env.PUBLIC_URL}/HTML.pdf`}  className="certificate">HTML & CSS Basics</a> </li>
        <li><a href = {`${process.env.PUBLIC_URL}/Javascript.pdf`}  className="certificate">JavaScript (ES6+)</a> </li>
        <li><a href = {`${process.env.PUBLIC_URL}/frontendReact.pdf`}  className="certificate">Developing Front-End Apps with React</a></li>
        <li><a href = {`${process.env.PUBLIC_URL}/GitHub.pdf`}  className="certificate">Git and GitHub Version Control </a></li>
         </ul>
    </div>
    <div className="skills-container">
      <h1>Back End</h1>
      <div className="vertical-line"></div>
     <ul>
        <li><a href = {`${process.env.PUBLIC_URL}/nodejsExpressjs.pdf`}  className="certificate">Node.js and Express.js Basics </a></li>
        <li><a href = {`${process.env.PUBLIC_URL}/RestfulAPI.pdf`} className="certificate">Building RESTful APIs</a></li>
        <li><a href = {`${process.env.PUBLIC_URL}/authentication.pdf`}  className="certificate">Authentication and Authorization</a></li>
        <li><a href = {`${process.env.PUBLIC_URL}/containerization.pdf`} className="certificate">Containerization with Docker & Kubernetes</a></li>
        </ul>
      </div>
      <div className="skills-container">
        <h1>Database</h1>
        <div className="vertical-line"></div>
        <ul>
          <li><a href = {`${process.env.PUBLIC_URL}/cloud native and NOSQL.pdf`}  className="certificate">MongoDB (NoSQL Database)</a></li>
          <li><a href = {`${process.env.PUBLIC_URL}/FullCapstone.pdf`} className="certificate">Using MongoDB in Cloud Environments</a></li>
        </ul>
      </div>
      </section>
  </>
  );
}
export default Skills