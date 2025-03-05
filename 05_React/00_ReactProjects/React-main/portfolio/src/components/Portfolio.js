import React from "react";
import "./Portfolio.css";


const Portfolio = () => {
  

  const projects = [
    {
      id: 1,
      image: "https://blog.educationnest.com/wp-content/uploads/2023/10/Untitled-design-2023-10-27T144159.540-1024x853.jpg",
      title: "Web Development",
      description: "Modern web application built with React and Node.js"
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFSSwtuQmBu-4wTqaPFmClCScFMVAZTMvYw&s",
      title: "E-commerce Platform",
      description: "Full-featured online shopping platform"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKrYjA5GwCNBPdLOkGodd_FpR9-YJ_A02IuBclArJ1vD26oqUptfJmOlQFQU-gixiR94&usqp=CAU",
      title: "Music App",
      description: "Streaming application with real-time features"
    },
    {
      id: 4,
      image: "https://marketplace.canva.com/EAGHa_G_wo0/1/0/1131w/canva-black-frasurbane-portfolio-cover-a4-document-4sUhPrZZpJQ.jpg",
      title: "Portfolio Website",
      description: "Responsive portfolio showcase with animations"
    },
    {
      id: 5,
      image: "https://marketplace.canva.com/EAGHa_G_wo0/1/0/1131w/canva-black-frasurbane-portfolio-cover-a4-document-4sUhPrZZpJQ.jpg",
      title: "Portfolio Website",
      description: "Responsive portfolio showcase with animations"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKrYjA5GwCNBPdLOkGodd_FpR9-YJ_A02IuBclArJ1vD26oqUptfJmOlQFQU-gixiR94&usqp=CAU",
      title: "Music App",
      description: "Streaming application with real-time features"
    }
  ];

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h3 style={{ color:"black"}}>Recent Projects</h3>
        <span>Portfolio</span>
      </div>

      <div className="portfolio-slider">
        {projects.map((project) => (
          <div className="portfolio-item" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-content">
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
