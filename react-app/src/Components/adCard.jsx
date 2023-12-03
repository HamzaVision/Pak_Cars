/*
  This component is used to display an ad card on the myAds component.
  It is used in the user dashboard component.
  It takes the following props:
  1. carData: An object containing the car details
  2. adData: An object containing the ad details
  3. onDelete: A function to re-render the component after deleting an ad
  4. onUpdate: A function to update the ad
*/

import React from "react";
import "../Styles/adCard.css";

const AdCard = ({ carData, adData, onDelete, onUpdate }) => {
  const handleDelete = async () => {
    // Show a confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ad?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      // Make a PUT request to update isActive to false
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/ads/${adData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isActive: false }),
        }
      );

      if (response.ok) {
        // Call the onDelete function to re-render the component
        onDelete((prev) => prev + 1);
        console.log("Ad deleted successfully");
      } else {
        const data = await response.json();
        console.error("Error deactivating ad:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = () => {
    // Call the onUpdate function with the ad ID or any other necessary data
    onUpdate(adData._id);
  };

  return (
    <div className="ad-card">
      <div className="ad-image">
        <img
          src="/images/adCardImage.webp"
          alt={`${carData.brandId} ${carData.model}`}
        />
      </div>
      <div className="ad-details">
        <h3>{`${carData.model} ${carData.year}`}</h3>
        <p>Registration City: {carData.registrationCity}</p>
        <p>Transmission: {carData.transmission}</p>
        <p>Fuel Type: {carData.fuelType}</p>
        <p>Engine Capacity: {carData.engineCapacity} CC</p>
        <p>Price: PKR {carData.price}</p>
        <p>Contact: {adData.phone}</p>
        <p>Address: {adData.address}</p>

        <div className="ad-buttons">
          {adData.isSold ? (
            <p className="soldTag">Sold</p>
          ) : (
            <button onClick={handleUpdate}>Update</button>
          )}

          <button onClick={handleDelete} style={{ backgroundColor: "red" }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
