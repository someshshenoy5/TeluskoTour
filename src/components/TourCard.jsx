// import React from "react";
// import { useState, useEffect } from "react";
// import "./TourCard.css";
// import { useNavigate } from "react-router-dom";

// const TourCard = ({ tour }) => {
//   const [images, setImages] = useState([]);
//   const navigate = useNavigate();
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     const loadImage = async () => {
//       try {
//         const imageSrc = await import(`/images/Tour-Images/${tour.tourImage}`);
//         setImageSrc(imageSrc.default);
//       } catch (error) {
//         console.error('Error loading image:', error);
//       }
//     };

//     loadImage();
//   }, [tour.tourImage]);

//   // useEffect(() => {
//   //   // Assuming tour.tourImage is an array containing image filenames
//   //   const imageFilenames = tour.tourImage;
//   //   const processedImages = imageFilenames.map((filename) => {
//   //     // Construct the image path based on your folder structure
//   //     const imagePath = `/images/Tour-Images/${filename}`;
//   //     return imagePath; // Return the constructed image path
//   //   });
//   //   setImages(processedImages);
//   // }, [tour])


//   const handleBookNow = () => {
//     navigate(`/TourDetail/${tour.id}`, { state: { tour } });
//   };
 
//   return (
//     <div className="tour-card">
//       <div className="card-header">
//         <div className="card-header-content">
//           <div>
//             <h5 className="tour-title">{tour.tourName}</h5>
//             <p className="tour-route">
//               {tour.location.fromLocation} → {tour.location.toLocation}
//             </p>
//           </div>
//           <span className="tour-price">${tour.price}</span>
//         </div>
//       </div>
//       <div className="card-image">
          
//       {imageSrc && <img src={imageSrc} alt="Tour Image" />}
//       </div>

//       <div className="card-content">
//         <div className="tour-info">
//           <div className="info-item">
//             <svg
//               className="info-icon"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>
//             <span>
//               {tour.startDate} - {tour.endDate}
//             </span>
//           </div>
//           <div className="info-item">
//             <svg
//               className="info-icon"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <span>{tour.location.estimatedTravelTime}</span>
//           </div>
//         </div>
//         <div className="activities">
//           {tour.activities.map((activity, index) => {
//             return (
//               <span className="activity-tag" key={index}>
//                 {activity}
//               </span>
//             );
//           })}
//         </div>
//       </div>
//       <div className="card-footer">
//         <span className="tickets-left">
//           {tour.ticketsAvailable} tickets left
//         </span>

//         <button className="book-button" onClick={handleBookNow}>
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TourCard;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./TourCard.css";

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/TourDetail/${tour.id}`, { state: { tour } });
  };

  const fallbackImage = "https://via.placeholder.com/400x200"; 

  const tourImagePath1 = `../../public/Tour-Images/${tour.tourImages[0]}`; 
  const tourImagePath2 = `../../public/Tour-Images/${tour.tourImages[1]}`;
 

  return (
    <div className="tour-card">
      <div className="card-header">
        <div className="card-header-content">
          <div>
            <h5 className="tour-title">{tour.tourName}</h5>
            <p className="tour-route">
              {tour.location.fromLocation} → {tour.location.toLocation}
            </p>
          </div>
          <span className="tour-price">${tour.price}</span>
        </div>
      </div>

      <div className="card-image">
      <img
          src={tourImagePath1}
          alt={`Tour ${tour.tourName}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage; 
          }}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
        />
      </div>

      <div className="card-content">
        <div className="tour-info">
          <div className="info-item">
            <svg
              className="info-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              {tour.startDate} - {tour.endDate}
            </span>
          </div>
          <div className="info-item">
            <svg
              className="info-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{tour.location.estimatedTravelTime}</span>
          </div>
        </div>
        <div className="activities">
          {tour.activities.map((activity, index) => (
            <span className="activity-tag" key={index}>
              {activity}
            </span>
          ))}
        </div>
      </div>

      <div className="card-footer">
        <span className="tickets-left">{tour.ticketsAvailable} tickets left</span>
        <button className="book-button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;
