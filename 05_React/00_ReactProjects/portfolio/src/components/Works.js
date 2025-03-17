import "./Works.css";


const Works = () => {
  
  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="description">
          <span style={{ color:"black" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <p>
            Lorem ipsum is simply dummy text of the printing industry. Lorem
            ipsum has been the industry's standard dummy text. It is commonly
            used to display content layout and typography.
          </p>
          <button className="hire-btn">Hire Me</button>
        </div>
      </div>
      <div className="w-right">
        <div className="main-circle">
          <div className="sub-circle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPYHGCUMPqfNpAN3MFlAZji-e2mAfKs0_VpQ&s" alt="Cisco" />
          </div>
          <div className="sub-circle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TnrQxTZSfvVAv5WMvi3cNJZdO09N-NfkXQ&s" alt="Google" />
          </div>
          <div className="sub-circle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6bDs-odjW8dcPGSz9GFZDiIjlht9epWw5w&s" alt="Amazon" />
          </div>
          <div className="sub-circle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNG1T7rCCm0iqy__nPVYj1mwLlZkHjLHUoQ&s" alt="Facebook" />
          </div>
        </div>
        <div className="background-circle blue"></div>
        <div className="background-circle yellow"></div>
      </div>
    </div>
  );
};

export default Works;
