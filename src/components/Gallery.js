import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import './Gallery.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const galleryRef = ref(db, 'galleryPhotos');

    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      const loadedPhotos = [];

      // Check if data is valid
      if (data) {
        for (let id in data) {
          const imagePath = data[id].url; // Adjust this based on your Firebase structure
          const fullUrl = `https://firebasestorage.googleapis.com/v0/b/reego-chairs.appspot.com/o/${encodeURIComponent(imagePath)}?alt=media`;
          loadedPhotos.push({ url: fullUrl, name: data[id].name });
        }

        console.log("Loaded Photos:", loadedPhotos); // Log loaded photos
        setPhotos(loadedPhotos);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <div className="container my-5" id="gallery">
      <div className="row justify-content-center">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <img
                src={photo.url} // Make sure 'url' is the correct property from your object
                className="img-fluid shadow hover-shadow"
                alt={`Gallery Item ${index + 1}`}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No images available in the gallery.</p>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Gallery;
