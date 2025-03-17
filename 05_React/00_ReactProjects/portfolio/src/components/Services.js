import "./Services.css";
import Card from "./Card";


const Services = () => {

  return (
    <section className="services-section" id="services">
      
      <div className="services-left">
        <h2 style={{ color: "black" }}>My Awesome</h2>
        <h2 className="highlighted">Services</h2>
        <p className="services-description">
          Lorem ipsum is simply dummy text used in the printing industry. It
          has been used as a placeholder text for many years.
        </p>
        <a href="/" download>
          <button className="services-download-btn">Download CV</button>
        </a>
        <div className="blur effect1"></div>
      </div>
      <div className="services-right">
        <div className="card card1">
          <Card
            heading="Design"
            detail="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe XD"
          />
        </div>
        <div className="card card2">
          <Card
            heading="Developer"
            detail="HTML, CSS, JavaScript, React, Node.js, Express"
          />
        </div>
        <div className="card card3">
          <Card
            heading="UI/UX"
            detail="Lorem ipsum is dummy text often used in design projects."
          />
        </div>
        <div className="blur effect2"></div>
      </div>
    </section>
  );
};

export default Services;
