import React, { useState, useEffect } from "react";
import './ImageUpload.css'
const ImageUpload = () => {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [previewImage, setPreviewImage] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [imageInfos, setImageInfos] = useState([]);

  // Load images from localStorage when the component mounts
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImageInfos(storedImages);
  }, []);

  const selectFile = (event) => {
    const file = event.target.files[0];
    setCurrentFile(file);
    setPreviewImage(URL.createObjectURL(file));
    setProgress(0);
    setMessage("");
  };

  

    


  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to Base64
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadAndStoreInLocalStorage = async () => {
    if (!currentFile) return;

    try {
      const base64Image = await convertFileToBase64(currentFile);
      
      // Add the new image to the existing images in localStorage
      const existingImages = JSON.parse(localStorage.getItem('images')) || [];
      const newImage = { name: currentFile.name, url: base64Image };
      
      const updatedImages = [...existingImages, newImage];
      localStorage.setItem('images', JSON.stringify(updatedImages));

      setImageInfos(updatedImages);
      setMessage('Image stored in local storage successfully!');
    } catch (error) {
      setMessage('Failed to store the image in local storage.');
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" accept="image/*" onChange={selectFile} />
          </label>
        </div>
        <div className="col-4">
          {/* <button
            className="btn btn-success btn-sm"
            disabled={!currentFile}
            onClick={upload}
          >
            Upload
          </button> */}

          <button
            className="btn btn-info btn-sm ml-2"
            disabled={!currentFile}
            onClick={uploadAndStoreInLocalStorage}
          >
            Store Locally
          </button>
        </div>
      </div>

     

      {previewImage && (
        <div>
          <img className="preview" src={previewImage} alt="" />
        </div>
      )}

      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}

      <div className="card mt-3">
        <div className="card-header">List of Images</div>
        <ul className="list-group list-group-flush">
          {imageInfos &&
            imageInfos.map((img, index) => (
              <li className="list-group-item" key={index}>
                <p>
                  <a href={img.url} target="_blank" rel="noreferrer">{img.name}</a>
                </p>
                <img src={img.url} alt={img.name} height="80px" />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageUpload;
