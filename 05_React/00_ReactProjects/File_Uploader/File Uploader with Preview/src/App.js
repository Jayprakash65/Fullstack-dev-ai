import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ImageUpload from "./components/ImageUpload";

function App() {
  return (
    <div className="container">
      <h3>PrevUploader</h3>
      <h4>Image Upload with Preview</h4>

      <div className="content">
        <ImageUpload />
      </div>
    </div>
  );
}

export default App;
