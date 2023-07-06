import React from "react";

import im1 from "../../assets/im1.jpg";
import im2 from "../../assets/im2.jpg";
import ap1 from "../../assets/ap1.jpg";
import im4 from "../../assets/im4.jpg";
import bedone from "../../assets/bedone.jpg";
import bedtwo from "../../assets/bedtwo.jpg";
import bathroomone from "../../assets/bathroomone.jpg";
import bathroomtwo from "../../assets/bathroomtwo.jpg";
import "./Feature.css";

const feature = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p>Selected Listings by City , State , & Zip based on views.</p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={im1} alt="img" />
        <img src={im2} alt="img" />
        <img src={bathroomtwo} alt="img" />
        <img src={bedtwo} alt="img" />
        <img src={im4} alt="img" />
        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>Garden Colony sector-6 , Mohali</h2>
            <p>House for sale</p>
            <p className="price"> Rs.32.9 lac</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>3</p>
              </div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>3</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,913</p>
              </div>
              <div className="info">
                <p className="bold">Est Paymennt:</p>
                <p>Rs.15500/sq.feet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>A Beautiful modern day home in the city with a full size fool.</p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      {/*sec-2*/}
      <div className="container">
        <img className="order-2" src={bedone} alt="img" />
        <img className="order-3" src={ap1} alt="img" />
        <img className="span-3 image-grid-row-2 order-1" src={im1} alt="img" />

        <img className="order-4" src={bathroomone} alt="img" />
        <img className="order-5" src={im4} alt="img" />
        <div className="span-2 right-img-details order-7">
          <div className="span-3 img-details order-6">
            <div className="top">
              <h2>Garden Colony sector-6 , Mohali</h2>
              <p>House for sale</p>
              <p className="price"> Rs.32.9 lac</p>
            </div>
            <div className="info-grid">
              <div>
                <div className="info">
                  <p className="bold">Bedrooms:</p>
                  <p>3</p>
                </div>
                <div className="info">
                  <p className="bold">Bathroom:</p>
                  <p>3</p>
                </div>
              </div>
              <div>
                <div className="info">
                  <p className="bold">Square Feet:</p>
                  <p>8,913</p>
                </div>
                <div className="info">
                  <p className="bold">Est Paymennt:</p>
                  <p>Rs.15500/sq.feet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default feature;
