import React from "react";
//import { Link } from "react-router-dom";

import'./home.css'
const Home = ()=>{
    return(
        <>
        <section className="Profile">
            <div className="profileImage">
     <img 
      src="Profile.jpg" 
      alt="Developer placeholder" 
      style = {{ borderRadius: '50%', marginBottom: '20px' }}
    />
    </div>
    <div className="ProfileMessage">
    <h1>Hi, I'm  Sushmitha Krishnamoorthy</h1>
    <h2>Full-Stack MERN Developer</h2>
    <p style={{ maxWidth: '600px' }}>
      I specialize in building end-to-end web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. 
      From designing clean front-end interfaces to creating powerful back-end APIs, I deliver scalable and efficient solutions.
    </p>
    <p>
      Let’s build something amazing together.
    </p>
  <a href="Contact" className="hire">Hire me</a>
 

</div>
  
        </section>

        </>
    )
}
export default Home