
import React from "react";
import "./TourCard.css";
import { useNavigate } from "react-router-dom";


const TourCard = ({ tour }) => {
  
   const navigate = useNavigate();
  //  const getImagePath = '../../assets/TourImages/'

   const handleBookNow=()=>{
    navigate(`/TourDetail/${tour.id}`,{state:{tour}})
   }
    // Function to get the image path
  const getImagePath = (imageName) => {
    try {
      return require(`../assets/TourImages/${imageName}`);
    } catch (error) {
      console.error("Image not found:", imageName);
      return null; // Return null or a default image path
    }
  };
   console.log(tour.tourImages)
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
       
       <img
          src={getImagePath(tour.tourImages[0])}
          alt={tour.tourImages[0]}
          className="card-image"
        />
        {/* Display the image if found */}
      {/* {tour.tourImages.map((imageName, index) => {
        const imagePath = getImagePath(imageName);
        return (
          imagePath && (
            <img
              key={index}
              src={imagePath}
              alt={imageName}
              className="card-image"
            />
          )
        );
      })} */}
     

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
            {tour.activities.map((activity, index) => {
              return (
                <span className="activity-tag" key={index}>
                  {activity}
                </span>
              );
            })}
          </div>
        </div>
        <div className="card-footer">
          <span className="tickets-left">
            {tour.ticketsAvailable} tickets left
          </span>
        
            <button className="book-button" onClick={handleBookNow}>Book Now</button>
        </div>
      </div>

  );
};

export default TourCard;



// import React from "react";
// import "./TourCard.css";
// import { useNavigate } from "react-router-dom";

// const TourCard = ({ tour }) => {
//   const navigate = useNavigate();

//   const handleBookNow = () => {
//     navigate(`/TourDetail/${tour.id}`, { state: { tour } });
//   };

//   // // Function to dynamically load the image
//   // const getImagePath = (imageName) => {
//   //   const testImageName = "1732081625456_hasirama.jpg";
//   // console.log(getImagePath(testImageName)); // Should return the correct path
//   //   try {
//   //     // Dynamically import the image from the assets folder
//   //     return require(`../assets/TourImages/${imageName}`);
//   //   } catch (error) {
//   //     console.error("Image not found:", imageName);
//   //     // Return a fallback image URL if the image is not found
//   //     return "https://via.placeholder.com/400x200";
//   //   }
//   // };
//    const myImage=require(`../assets/TourImages/${tour.tourImages[0]}`)
  
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

//       {/* Display the image */}
//       {/* {tour.tourImages && tour.tourImages.length > 0 ? (
//         <img
//           src={getImagePath(tour.tourImages[0])} // Use the first image in the array
//           alt={tour.tourImages[0]}
//           className="card-image"
//         />
//       ) : (
//         <img
//           src="https://via.placeholder.com/400x200"
//           alt="Default Tour Preview"
//           className="card-image"
//         />
//       )} */}
//     im

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
//           {tour.activities.map((activity, index) => (
//             <span className="activity-tag" key={index}>
//               {activity}
//             </span>
//           ))}
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
