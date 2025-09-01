import React from "react";
import './about.css'

const personalInfo = [
    {
        label: 'Name:',
        value: 'Sushmitha Krishnamoorthy'
    },
   
    {
        label: 'Email:',
        value: 'sushmithakrishnamoorthy@gmail.com',
    },
    {
        label: 'Phone:',
        value: '07391033471',
    },
    {
        label: 'Location:', 
        value: 'Cheadle,Stockport, UK',
    },
    {
        label: 'Education:',
        value: 'Bachelor of Engineering (B.E.) in Computer Science,(2016) ',
    },
    {
        label: 'Proffessional certification:',
        value: 'Full Stack JavaScript Developer, IBM SkillsBuild,(2025)',
    },
    {
        label: 'Work Authorization:',
        value: 'UK Permanent Resident – Authorized to work in the UK without sponsorship',
    }
];
const text = `Full Stack Java Script Developer:`.split('');
const AboutMe =()=>{
  
return(
    <>
    <section className="AboutMe">
    <div className="Message">
       <h1>
       {text.map((char, index) => (
        <span key={index} className="char" style={{ animationDelay: `${index * 0.1}s` }}> {char === ' ' ? '\u00A0' : char}</span>
       ))}
       </h1>
       
       <p>I’m a passionate Full Stack JavaScript Developer (MERN) with hands-on experience in building scalable, modular web applications using microservices architecture. I specialize in containerization with Docker, orchestration using Kubernetes, and deploying production-ready applications to the IBM Cloud.
        
          I enjoy solving complex problems and bringing ideas to life by building secure, performant, and user-friendly digital products that create real-world impact.
            I'm actively exploring the integration of third-party services and APIs to enhance functionality and improve user experience. I believe in continuous learning and make it a priority to stay updated with the latest trends and technologies in the web development ecosystem.
     </p>
    </div>
    <hr/>
    <div className="personalInfoContainer">
      <h1 className="personalInfoHeading">Personal Information</h1>  
   <ul className="personalInfoList">
        {personalInfo.map((info, index) => (    
            <li key={index} className="personalInfoItem">
                <span className="label">{info.label}</span>
                <span className="value">{info.value}</span>
            </li>
        ))}
    </ul>
    </div>
     <div className="resumeLinks">
        <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} target="_blank" rel="noopener noreferrer" className="resumeLink">view Resume</a>
        </div>



    </section>
    </>
)
}
export default  AboutMe;