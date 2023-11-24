import "../Styles/postCarAdd.css";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function PostCarAdd() {
  const { id } = useParams();

  return (
    <div>
      <Navbar></Navbar>
      <div className="postAddPage">
        <h1 className="textTitle">Sell your Car With 3 Easy & Simple Steps!</h1>
        <h2 className="textTitle">It's free and takes less than a minute</h2>

        {/* Car Information */}
        <div className="postAdContainer">
          <h1 className="textContainerTitle">Car Information</h1>
          <div className="postCarHline" />

          <div className="PostCarInfo">
            {/* form for inputs */}
            <form>
              {/* registration city */}
              <div>
                <label htmlFor="registrationCity">Registration City</label>
                <input
                  type="text"
                  id="registrationCity"
                  name="registrationCity"
                  placeholder="Registration City of Car"
                />
              </div>

              {/* brand */}
              <div>
                <label htmlFor="brand">Brand</label>
                <select id="brand" name="brand">
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                </select>
              </div>

              {/* model */}
              <div>
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  placeholder="Model of Car"
                />
              </div>

              {/* year */}
              <div>
                <label htmlFor="year">Model Year</label>
                <input type="text" id="year" name="year" placeholder="year" />
              </div>

              {/* transmission */}
              <div>
                <label htmlFor="transmission">City</label>
                <select id="transmission" name="transmission">
                  <option value="Auto">Auto</option>
                  <option value="Manual">Manual</option>
                  <option value="Semi-Auto">Semi-Auto</option>
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label htmlFor="fuelType">Fuel Type</label>
                <select id="fuelType" name="fuelType">
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              {/* fuel average */}
              <div>
                <label htmlFor="fuelAverage">Fuel Average</label>
                <input
                  type="text"
                  id="fuelAverage"
                  name="fuelAverage"
                  placeholder="Fuel Average Fuel/km"
                />
              </div>

              {/* Engine Capacity */}
              <div>
                <label htmlFor="engineCapacity">Engine Capacity</label>
                <input
                  type="number"
                  id="engineCapacity"
                  name="engineCapacity"
                  placeholder="Engine Capacity (CC)"
                  min={0}
                />
              </div>

              {/* price */}
              <div>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price in PKR"
                  min={0}
                  error={true}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Upload Photo */}
        <div className="postAdContainer">
          <h1 className="textContainerTitle">Upload Photo</h1>
          <div className="postCarHline" />
          {/* Save Changes Button */}
          <div className="uploadPhotoPreview">
            <img src="" alt="" />
          </div>
          <button
            className="uploadPhotoButton"
            type="button"
            //   onClick={handleSaveChanges}
          >
            Add Photo
          </button>
        </div>

        {/* Contact Information */}
        <div className="postAdContainer">
          <h1 className="textContainerTitle">Contact Information</h1>
          <div className="postCarHline" />

          {/* form for inputs */}
          <div className="PostCarInfo">
            {/* Phone Number */}
            <div>
              <label htmlFor="fuelAverage">Phone #</label>
              <input
                type="text"
                id="Phone"
                name="Phone"
                placeholder="Phone Number (03xx-xxxxxxx)"
                maxLength={11}
                minLength={11}
              />
            </div>

            {/* address */}
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
            </div>

            {/* location */}
            {/* <div>
            <label htmlFor="location">Phone #</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
            />
          </div> */}
          </div>
        </div>

        <button
          className="postAdBtn"
          type="button"
          //   onClick={handleSaveChanges}
        >
          Post Ad
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}
