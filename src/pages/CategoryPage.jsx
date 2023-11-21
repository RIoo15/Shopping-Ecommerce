import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="felx flex-col p-5">
        <h1 className="text-[30px]">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>

            <select className="ml-3 border-2 border-silver mobile:mt-3">
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <select className="ml-3 border-2 border-silver mobile:">
              <option selected disabled>
                Color
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
            </select>
          </div>

          <div>
            <p className="flex mobile:flex-col mobile:items-end">Sort by</p>
            <select className="ml-3 border-2 border-silver">
              <option>Newest (first)</option>
              <option>Oldest (first)</option>
              <option>Price (Asc)</option>
              <option>Price (Desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
