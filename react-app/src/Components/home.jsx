import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";

export default function Home() {
  const [brands, setBrands] = useState([]);
  const [ads, setAds] = useState([]);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });

  useEffect(() => {
    const fetchUsedCars = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/ads`);
        setAds(response.data);
      } catch (error) {
        console.error("Error fetching used cars ads:", error);
      }
    };

    const fetchBrands = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/brands`);
        setBrands(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
    fetchUsedCars();
  }, []);

  const handleLeftClick = () => {
    setVisibleRange({
      start: Math.max(visibleRange.start - 1, 0),
      end: Math.max(visibleRange.end - 1, 3),
    });
  };

  const handleRightClick = () => {
    setVisibleRange({
      start: Math.min(visibleRange.start + 1, ads.length - 4),
      end: Math.min(visibleRange.end + 1, ads.length - 1),
    });
  };
  return (
    <div>
      <Navbar />
      <div className="homepage">
        <div className="rectangleBannerDiv">
          <p className="greatQualityCars">
            {`Great quality cars and `} <br /> no-haggle prices <span>.</span>{" "}
          </p>

          <div className="imageCont">
            <img
              className="container11Icon"
              alt="PakCar"
              src="/images/cars-container.webp"
            />
          </div>
        </div>

        <div className="searchBoxRectangle">
          <div className="findUsedCar">Find Used Cars in Pakistan</div>
          <div className="thousandsOfNew">
            Thousands of new cars , used cars for sale in Pakistan and we have
            right one for you
          </div>
          <div className="searchBox">
            <input
              className="carMakeOr"
              type="text"
              name=""
              id=""
              placeholder="Car Make or Model"
            />
          </div>
        </div>

        {/* Browse Used Cars Section */}
        <div className="browseUsedCarsBox">
          <p className="browseUsedCars">Browse Used Cars</p>

          <div className="usedCarCards">
            <div className="leftBtnUsed" onClick={handleLeftClick}>
              <img src="/images/left-solid.svg" alt="" />
            </div>

            <div className="adsList">
              {ads.slice(visibleRange.start, visibleRange.end + 1).map((ad) => (
                <div key={ad._id} className="usedCarCard">
                  <img
                    className="usedCarImage"
                    alt=""
                    src="/images/used car 5.webp"
                  />
                  <h3 className="usedCarName">{`${ad.carId.model} ${ad.carId.year}`}</h3>
                  <h4 className="usedCarPrice">{`PKR ${ad.carId.price}`}</h4>
                  <div className="usedCarCity">{ad.carId.registrationCity}</div>
                </div>
              ))}
            </div>

            <div className="leftBtnUsed" onClick={handleRightClick}>
              <img src="/images/right-solid.svg" alt="" />
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* features section */}

        <div className="rectangleParent1">
          <div className="carshopFeaturebox1Icon">
            <img alt="" src="/images/CarShop-FeatureBox.webp" />
          </div>

          <div className="stepInsideYourContainer">
            <p>
              Step inside your comfort zone <span className="span">.</span>
            </p>
          </div>

          <div className="fearureTray">
            <div className="compFeature">
              <img alt="" src="/images/hp-no-haggle 1.svg" />
              <div>
                <h6>No haggle, no pressure</h6>
                <p>We post our lowest price on the window of every vehicle.</p>
              </div>
            </div>

            <div className="compFeature">
              <img alt="" src="/images/hp-1-50 1.svg" />
              <div>
                <h6>1 in 50</h6>
                <p>
                  We’re insanely selective. Only a fraction of pre-owned cars
                  meets our standards.
                </p>
              </div>
            </div>
          </div>

          <div className="fearureTray">
            <div className="compFeature">
              <img alt="" src="/images/hp-like-new 1.svg" />
              <div>
                <h6>Cars like new</h6>
                <p>
                  PakCar cars look and drive like new, but save you thousands.
                </p>
              </div>
            </div>

            <div className="compFeature">
              <img alt="" src="/images/hp-lifetime-engine 1.svg" />
              <div>
                <h6>Forever</h6>
                <p>Our Lifetime Engine Guarantee lasts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* favourite brand */}

        <div className="sectionBrand">
          <p className="textBrand">Shop your favorite brand</p>

          <div className="brandContainer">
            {brands.map((brand, index) => (
              <div key={index} className="carBrand">
                <img alt={brand.brandName} src="/images/Honda.png" />
                <p>{brand.brandName}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ddddddddd */}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
