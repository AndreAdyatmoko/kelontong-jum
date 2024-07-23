import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


import garuda from "../../assets/brand/garuda.jpg";
import kelinci from "../../assets/brand/duakelinci.jpg";
import aqua from "../../assets/brand/aqua.jpg";
import indomie from "../../assets/brand/indomie.jpeg";
import miesedap from "../../assets/brand/miesedap.png";
import lemineral from "../../assets/brand/lemineral.jpeg";
import nabati from "../../assets/brand/nabati.png";
import product1 from "../../assets/product/indomiee.png";
import product2 from "../../assets/product/kacang.jpeg";
import product3 from "../../assets/product/product1.png";
import product4 from "../../assets/product/roti.jpg";

const Picture = ({ imgSrc, imgAlt }) => (
  <div className="flex items-center gap-4">
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-16 h-16 object-contain rounded-md"
    />
  </div>
);

const Product = ({ imgSrc, imgAlt, title, price }) => (
  <div className="flex flex-col bg-white p-4 rounded-md shadow-lg w-48">
    <div className="border border-gray-300 rounded-md p-4">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-32 object-cover rounded-md"
      />
    </div>
    <div>
      <p className="text-lg text-button-hover font-bold">{title}</p>
    </div>
    <div className="flex  items-center mt-2 justify-between">
      <p className="text-lg font-semibold mt-1">{price}</p>
      <IoCartOutline className="w-6 h-6 cursor-pointer" />
    </div>
  </div>
);

const Content2 = () => {
  return (
    <div className="bg-primary-text px-24">
      <div className="flex justify-between px-20 py-4">
        <Picture imgSrc={garuda} imgAlt="Garuda" />
        <Picture imgSrc={kelinci} imgAlt="Kelinci" />
        <Picture imgSrc={aqua} imgAlt="Aqua" />
        <Picture imgSrc={indomie} imgAlt="Indomie" />
        <Picture imgSrc={miesedap} imgAlt="Miesedap" />
        <Picture imgSrc={lemineral} imgAlt="LemIneral" />
        <Picture imgSrc={nabati} imgAlt="Nabati" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center px-16">
          <h2 className="text-left text-3xl font-bold">Produk Pilihan</h2>
          <div className="flex gap-4">
            <FaArrowLeft className="inline-block cursor-pointer" />
            <FaArrowRight className="inline-block cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="px-16 py-4 flex justify-between flex-wrap gap-6">
        <Product
          imgSrc={product1}
          imgAlt="Product 1"
          title="Indomie"
          price="Rp. 15.000"
        />
        <Product
          imgSrc={product2}
          imgAlt="Product 2"
          title="Kacang"
          price="Rp. 12.000"
        />
        <Product
          imgSrc={product3}
          imgAlt="Product 3"
          title="Produk 3"
          price="Rp. 10.000"
        />
        <Product
          imgSrc={product4}
          imgAlt="Product 4"
          title="Roti"
          price="Rp. 8.000"
        />
      </div>
    </div>
  );
};

export default Content2;
