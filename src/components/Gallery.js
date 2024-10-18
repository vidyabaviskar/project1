// import React, { useEffect, useState } from 'react';
// import { getDatabase, ref, onValue } from 'firebase/database';
// import './Gallery.css';

// const Gallery = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     const db = getDatabase();
//     const galleryRef = ref(db, 'galleryPhotos');

//     onValue(galleryRef, (snapshot) => {
//       const data = snapshot.val();
//       const loadedPhotos = [];

//       // Check if data is valid
//       if (data) {
//         for (let id in data) {
//           const imagePath = data[id].url; // Adjust this based on your Firebase structure
//           const fullUrl = `https://firebasestorage.googleapis.com/v0/b/reego-chairs.appspot.com/o/${encodeURIComponent(imagePath)}?alt=media`;
//           loadedPhotos.push({ url: fullUrl, name: data[id].name });
//         }

//         console.log("Loaded Photos:", loadedPhotos); // Log loaded photos
//         setPhotos(loadedPhotos);
//       } else {
//         console.log("No data available");
//       }
//     });
//   }, []);

//   return (
//     <div className="container my-5" id="gallery">
//       <div className="row justify-content-center">
//         {photos.length > 0 ? (
//           photos.map((photo, index) => (
//             <div key={index} className="col-12 col-md-4 mb-4">
//               <img
//                 src={photo.url} // Make sure 'url' is the correct property from your object
//                 className="img-fluid shadow hover-shadow"
//                 alt={`Gallery Item ${index + 1}`}
//               />
//             </div>
//           ))
//         ) : (
//           <div className="col-12 text-center">
//             <p>No images available in the gallery.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
  
// };

// export default Gallery;


// import React, { useEffect, useState } from 'react';
// import { getDatabase, ref, onValue } from 'firebase/database';
// import './Gallery.css';

// const Gallery = () => {
//   const [photos, setPhotos] = useState([]);
//   const [category, setCategory] = useState('home'); // Default category

//   useEffect(() => {
//     const db = getDatabase();
//     const galleryRef = ref(db, `galleryPhotos/${category}`); // Fetch by category

//     onValue(galleryRef, (snapshot) => {
//       const data = snapshot.val();
//       const loadedPhotos = [];

//       if (data) {
//         for (let id in data) {
//           const imagePath = data[id].url;
//           const fullUrl = `https://firebasestorage.googleapis.com/v0/b/reego-chairs.appspot.com/o/${encodeURIComponent(imagePath)}?alt=media`;
//           loadedPhotos.push({ url: fullUrl, name: data[id].name });
//         }
//         setPhotos(loadedPhotos);
//       } else {
//         console.log("No data available");
//       }
//     });
//   }, [category]);

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value); // Update category
//   };

//   return (
//     <div className="container my-5" id="gallery">
//       <h3 className="text-center mb-4">Gallery - {category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      
//       <div className="form-group text-center mb-4">
//         <label htmlFor="category">Select Category</label>
//         <select 
//           id="category" 
//           className="form-control w-50 mx-auto" 
//           value={category} 
//           onChange={handleCategoryChange}
//         >
//           <option value="home">Home</option>
//           <option value="event">Event</option>
//           <option value="hospitals">Hospitals</option>
//           <option value="schools">Schools</option>
//           <option value="others">Others</option>
//         </select>
//       </div>

//       <div className="row justify-content-center">
//         {photos.length > 0 ? (
//           photos.map((photo, index) => (
//             <div key={index} className="col-12 col-md-4 mb-4">
//               <img
//                 src={photo.url}
//                 className="img-fluid shadow hover-shadow"
//                 alt={`Gallery Item ${index + 1}`}
//               />
//             </div>
//           ))
//         ) : (
//           <div className="col-12 text-center">
//             <p>No images available in this category.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import './Gallery.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState('home'); // Default category

  const categories = ['home', 'event', 'hospitals', 'schools', 'others'];

  useEffect(() => {
    const db = getDatabase();
    const galleryRef = ref(db, `galleryPhotos/${category}`); // Fetch by category

    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      const loadedPhotos = [];

      if (data) {
        for (let id in data) {
          const imagePath = data[id].url;
          const fullUrl = `https://firebasestorage.googleapis.com/v0/b/reego-chairs.appspot.com/o/${encodeURIComponent(imagePath)}?alt=media`;
          loadedPhotos.push({ url: fullUrl, name: data[id].name });
        }
        setPhotos(loadedPhotos);
      } else {
        setPhotos([]); // No images available for the category
      }
    });
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="container my-5" id="gallery">
      {/* <h3 className="text-center mb-4">Gallery</h3> */}

      {/* Category Tabs */}
      {/* <div className="d-flex justify-content-center mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-outline-primary mx-2 ${category === cat ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div> */}

<div className="d-flex justify-content-center mb-4">
  {categories.map((cat) => (
    <button
      key={cat}
      className={`btn btn-custom mx-2 ${category === cat ? 'active' : ''}`}
      onClick={() => handleCategoryChange(cat)}
    >
      {/* Optional: Add an icon next to the category text */}
      <i className="fas fa-image"></i> {/* Example icon */}
      {cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  ))}
</div>


      {/* Image Grid */}
      <div className="row justify-content-center">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <img
                src={photo.url}
                className="img-fluid shadow hover-shadow"
                alt={`Gallery Item ${index + 1}`}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No images available in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
