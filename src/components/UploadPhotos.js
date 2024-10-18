import React, { useState } from 'react';
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { getDatabase, ref as dbRef, set } from 'firebase/database';

const UploadPhotos = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [category, setCategory] = useState('home'); 

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select files to upload");
      return;
    }

    const storage = getStorage();
    const db = getDatabase();
    const promises = [];

    Array.from(selectedFiles).forEach((file) => {
      const fileName = file.name.replace(/[^a-zA-Z0-9]/g, '_');
      const storagePath = `images/${category}/${fileName}`; 
      const storageRefPath = storageRef(storage, storagePath);
      const dbRefPath = dbRef(db, `galleryPhotos/${category}/${fileName}`);

      const uploadPromise = uploadBytes(storageRefPath, file).then(() => {
        return set(dbRefPath, {
          url: storagePath,
          name: fileName,
          category: category,
        });
      });

      promises.push(uploadPromise);
    });

    try {
      await Promise.all(promises);
      alert("Files uploaded successfully!");
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error uploading files: ", error);
      alert("Error uploading files. Please try again.");
    }
  };

  return (
    <div className="upload-photos">
      <h3 className="text-center mb-4">Upload Photos</h3>
      <form>
        <div className="form-group">
          <label htmlFor="category">Select Category</label>
          <select 
            id="category" 
            className="form-control" 
            value={category} 
            onChange={handleCategoryChange}
          >
            <option value="home">Home</option>
            <option value="event">Event</option>
            <option value="hospitals">Hospitals</option>
            <option value="schools">Schools</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            onChange={handleFileChange} 
          />
        </div>
        <button 
          type="button" 
          className="btn btn-primary mt-3" 
          onClick={handleUpload}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPhotos;
