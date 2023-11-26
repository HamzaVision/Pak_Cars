import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import "../Styles/myAds.css";
import AdCard from "./adCard";

const MyAds = ({ userId }) => {
  const { id } = useParams();
  const [postedAds, setPostedAds] = useState([]);
  const [change, setChange] = useState(0);

  useEffect(() => {
    // Fetch posted ads for the given user
    const fetchPostedAds = async () => {
      try {
        console.log("Fetching posted ads for user:", id);
        const response = await axios.get(
          `http://localhost:3005/api/ads/user/${id}`
        );
        setPostedAds(response.data);
      } catch (error) {
        console.error("Error fetching posted ads:", error);
      }
    };

    fetchPostedAds();
  }, [id, change]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="postedAdsSection">
        <h2 className="tiltePostedAd">Your Posted Cars</h2>
        {postedAds.length === 0 ? (
          <p className="noPostedAds">
            No posted ads yet.{" "}
            <Link className="linkToPostAd" to={`/postCarAdd/${id}`}>
              {" "}
              Post an Ad now on one click
            </Link>
          </p>
        ) : (
          <div className="postedAdsContainer">
            {postedAds.map((ad) => (
              <div className="postedAd">
                <AdCard
                  key={ad._id}
                  carData={ad.carId}
                  adData={ad}
                  onDelete={setChange}
                />
              </div>
            ))}
          </div>
        )}{" "}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyAds;
