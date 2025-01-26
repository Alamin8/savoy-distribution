import React, { useContext, useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import { brandlist } from "../../Components/ExploreBrand/DummyData";
import { ShopContext } from "../../context/ShopContext";
import FoodItem from "./FoodItem";
import productCatelgImg from "../../assets/catelg .jpg";
import fishImage from "../../assets/fish.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState("All");
  const { food_list } = useContext(ShopContext);

  return (
    <div className="">
      <Header />
      <div className="home-quality-content">
        <div className="quality-content-left">
          <p>
            Savoy Distribution’s mission is to increase the distribution of
            foods from Japan and the rest of Asia. Building on a century of
            success, Savoy Distribution today is strategically poised for
            growth. Every day, we serve growing numbers of Asian-American retail
            outlets, restaurants, and major North American retailers. And every
            day, we deliver healthy, safe, high-quality Asian food products
            across the continent from our strategically located distribution
            centers. Every day, in every way, Savoy Distribution is moving to
            higher ground.
          </p>
        </div>
        <div className="quality-content-right">
          <p>
            Quality Merchandising <br />& Good Service
          </p>
          <span className="quality-content-bar"></span>
        </div>
      </div>

      {/* ========= Product Catelouge=========== */}

      <div className="home-product-catelg">
        <div className="product-catelg-left">
          <h1 className="product-catelg-title">Product Catalog</h1>
          <span className="calelg-bar"></span>
          <Link className="viewallproductbtn" to="/">
            View All Products
          </Link>
        </div>
        <div className="product-catelg-right">
          <img src={productCatelgImg} alt="" />
        </div>
      </div>

      {/* =====Explore Brand==== */}
      <div className="explore-brand" id="explorebrand">
        <h1 className="home-heading">Explore Your Brand</h1>
        <p className="explore-brand-text">
          Choose world famous brand that you can enjoy the best of moment
        </p>
        <div className="explore-brand-list">
          {brandlist.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.brand_name ? "All" : item.brand_name
                  )
                }
                key={index}
                className={`explore-brand-item-list ${
                  category === item.brand_name ? "active" : ""
                }`}
              >
                <img src={item.brand_image} alt="" />
                <p>{item.brand_name}</p>
              </div>
            );
          })}
        </div>
        {/* <hr /> */}
      </div>

      {/* ====== Brand Food==== */}
      <div className="food-display" id="food-display">
        <h2>Top Categories Food</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            console.log(category);
            if (category === "All" || category === item.category) {
              return (
                <>
                  <FoodItem key={index} item={item} />
                </>
              );
            }
          })}
        </div>
      </div>

      {/* ======Home Contact====== */}

      <div className="home-contact">
        <div className="home-contact-left">
          <img src={fishImage} alt="" />
        </div>
        <div className="home-contact-right">
          <div className="home-contact-right-content">
            <h1>Contact Us</h1>
            <span></span>
            <h2>Phone</h2>
            <h3>+1 323-721-6100</h3>
            <Link to="" className="home-contact-btn">
              Contact Us
            </Link>
            <Link to="" className="home-newsletter-btn">
              Stay Connected with our Newsletter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
