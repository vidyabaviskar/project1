
import React, { useState } from 'react';
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'; // renamed storageRef to avoid conflicts
import { getDatabase, ref as dbRef, set } from 'firebase/database';

const UploadPhotos = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
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
      const fileName = file.name.replace(/[^a-zA-Z0-9]/g, '_'); // Replace invalid characters
      const storagePath = `images/${fileName}`; // Safe storage path
      const storageRefPath = storageRef(storage, storagePath);
      const dbRefPath = dbRef(db, 'galleryPhotos/' + fileName); // Using safe name for database reference

      const uploadPromise = uploadBytes(storageRefPath, file).then(() => {
        // Save the file URL to the database
        return set(dbRefPath, {
          url: storagePath, // Store the path to the image in Firebase Storage
          name: fileName,
        });
      });

      promises.push(uploadPromise);
    });

    try {
      await Promise.all(promises);
      alert("Files uploaded successfully!");
      setSelectedFiles([]); // Clear the input
    } catch (error) {
      console.error("Error uploading files: ", error);
      alert("Error uploading files. Please try again.");
    }
  };

  return (
    <div className="upload-photos">
      <h3 className="text-center mb-4">Upload Photos</h3>
      <input 
        type="file" 
        multiple 
        accept="image/*" 
        onChange={handleFileChange} 
      />
      <button 
        className="btn btn-primary mt-3" 
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadPhotos;
