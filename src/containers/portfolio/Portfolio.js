import React from "react"
import "./portfolio.css";
const project= [
    {
        id: 1,
        title: "Welcome To Paradise Nursery",
        description: "Paradise Nursery is a React e-commerce app that lets users browse, add, and manage plant products with a dynamic shopping cart.",
        image: "/ePlantShopping.PNG",
        link: "https://sushmi-krish.github.io/e-plantShopping/",
        gitHub: "https://github.com/sushmi-krish/e-plantShopping" 
     },
   {
        id: 2,
        title: "Voyagar VAcation",
        description: "Voyager Vacations is a user-friendly app that helps plan and manage vacations for solo travelers and families alike.",
        image: "/voyagarVacation.PNG",
        link: "https://sushmi-krish.github.io/voyager-vacations/",
        gitHub: "https://github.com/sushmi-krish/voyager-vacations.git",
   },
   {
        id: 3,
        title: "Conference Expense Planner",
        description: "A React + Redux Toolkit application that helps users price conference events easily by selecting rooms, add-ons, and meals with real-time cost updates.",
        image: "/eventPlanner.PNG",
        link: "https://sushmi-krish.github.io/event-Planner/",
        gitHub: "https://github.com/sushmi-krish/event-Planner.git"
    },
    {
          id: 4,
          title: "E-Commer Application",
          description: "A React and Redux Toolkit e-commerce app showcasing efficient global state management for cart functionality.",
          image: "/eCommerce.PNG",     
          link: "https://sushmi-krish.github.io/E-commerce-/",
          gitHub: "https://github.com/sushmi-krish/E-commerce-.git",
    },
 {   
        id: 5,
        title: "Full Stack Capstone Project (GiftLinks)",
        description: "GiftLink is a full-stack MERN app that connects users to give away or find free household items, with secure auth, search, and profile management.",
        image: "/GiftLinks.PNG",
        link:"",
        gitHub: "https://github.com/sushmi-krish/fullstack-capstone-project.git"
    },
    {
        id: 6,
        title: "Book Review(Express.js)",
        description: "A simple Express.js book review app with JWT authentication, allowing users to search, add, update, and delete reviews securely.",
        image: "BookReview.PNG",
        link:"",
        gitHub: "https://github.co#m/sushmi-krish/expressBookReviews.git",
    },
    {
        id: 7,
        title: "Payment Tracker",
        description: "A RESTful Node.js and Express API with MongoDB for managing vendor payments, supporting full CRUD operations on transaction data.",
        image: "}/vendorPayment.PNG",
        link:"",
        gitHub: "https://github.com/sushmi-krish/PaymentTracker.git",
    },
    {
        id: 8,
        title: "Friend(CRUD)",
        description: "A Node.js and Express.js backend app that performs CRUD operations on a 'Friends' object with JWT and session-based authentication.",
        image: "/friendCRUD.PNG",
        link:"",
        gitHub: "https://github.com/sushmi-krish/friendCRUD.git",
    },
    {
        id: 9,
        title: "Modern Tax calculater(deployed in cloud)",
        description: "A modernized Tax Calculator app containerized with Docker and deployed via a Tekton CI/CD pipeline on IBM Cloud.",
        image: "/TaxCalculator.PNG",
        link:"",
        gitHub: "https://github.com/sushmi-krish/-Modernise-Tax-Calculator.git",
    }
]
const Portfolio = ()=>{
    return(
        <>
        <section className="portfolio">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-container">
                <div className="portfolio-projects">
                        {project.map((project) => (
                            <div key={project.id} className="portfolio-project">
                                <img src={project.image} alt={project.title} />
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                  <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                              <br/> <a href={project.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        ))}
                    </div>
                </div>

                
           
        </section>
        </>
    )
}

export default Portfolio;