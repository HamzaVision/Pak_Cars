import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
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
            <div className="leftBtnUsed">
              <img src="/images/left-solid.svg" alt="" />
            </div>
            <div className="usedCarCard">
              <img
                className="usedCarImage"
                alt=""
                src="/images/used car 5.webp"
              />
              <h3 className="usedCarName">Toyota Vitz 2013</h3>
              <h4 className="usedCarPrice">PKR 2,785,000</h4>
              <div className="usedCarCity">Lahore</div>
            </div>

            <div className="usedCarCard">
              <img
                className="usedCarImage"
                alt=""
                src="/images/used car 5.webp"
              />
              <h3 className="usedCarName">Toyota Vitz 2013</h3>
              <h4 className="usedCarPrice">PKR 2,785,000</h4>
              <div className="usedCarCity">Lahore</div>
            </div>

            <div className="usedCarCard">
              <img
                className="usedCarImage"
                alt=""
                src="/images/used car 5.webp"
              />
              <h3 className="usedCarName">Toyota Vitz 2013</h3>
              <h4 className="usedCarPrice">PKR 2,785,000</h4>
              <div className="usedCarCity">Lahore</div>
            </div>

            <div className="usedCarCard">
              <img
                className="usedCarImage"
                alt=""
                src="/images/used car 5.webp"
              />
              <h3 className="usedCarName">Toyota Vitz 2013</h3>
              <h4 className="usedCarPrice">PKR 2,785,000</h4>
              <div className="usedCarCity">Lahore</div>
            </div>

            <div className="leftBtnUsed">
              <img src="/images/right-solid.svg" alt="" />
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* Browse New Cars Section */}

        <div className="browseUsedCarsBox">
          <p className="browseUsedCars">Featured New Cars</p>

          <div className="newCarCards">
            <div className="leftBtnNew">
              <img src="/images/left-solid.svg" alt="" />
            </div>

            <div className="newCarCard">
              <img className="newCarImage" alt="" src="/images/new car 2.jpg" />
              <h3 className="newCarName">Honda City</h3>
              <h4 className="newCarPrice">PKR 2,785,000</h4>
              <div className="newCarCity">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="newCarCard">
              <img className="newCarImage" alt="" src="/images/new car 2.jpg" />
              <h3 className="newCarName">Honda City</h3>
              <h4 className="newCarPrice">PKR 2,785,000</h4>
              <div className="newCarCity">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="newCarCard">
              <img className="newCarImage" alt="" src="/images/new car 2.jpg" />
              <h3 className="newCarName">Honda City</h3>
              <h4 className="newCarPrice">PKR 2,785,000</h4>
              <div className="newCarCity">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="newCarCard">
              <img className="newCarImage" alt="" src="/images/new car 2.jpg" />
              <h3 className="newCarName">Honda City</h3>
              <h4 className="newCarPrice">PKR 2,785,000</h4>
              <div className="newCarCity">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="leftBtnUsed">
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

          <div className="carToggle">
            <div className="newCarOn">New Car</div>
            <div className="usedCarOn">Used Car</div>
          </div>

          <div className="brandContainer">
            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>
          </div>

          <div className="brandContainer">
            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>

            <div className="carBrand">
              <img alt="" src="/images/Honda.png" />
              <p>Honda</p>
            </div>
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
