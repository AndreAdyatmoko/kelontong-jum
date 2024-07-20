import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"; // Jika menggunakan React Router

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="bg-primary px-44 py-2 text-primary-text flex justify-between">
        <p className="flex items-center">
          <TiTick className="text-xl" />
          Gratis ongkir untuk wilayah Srimulyo Bansari
        </p>
        <div className="flex gap-2">
          <button className="text-primary-text">Pertanyaan</button>
          <button className="text-primary-text">Mengenai</button>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="flex justify-between px-44 py-4 items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-md" />
            <p className="text-secondary-text font-bold">Bu Jum</p>
          </div>
          <div className="flex items-center gap-2 bg-primary-text rounded-md p-1">
            <input
              type="text"
              placeholder="Cari barang mu disini..."
              className="p-1 text-black focus:outline-none w-full" // Adjust width for responsiveness
            />
            <IoIosSearch className="text-gray-600" />
          </div>
          <div className="flex gap-2 text-secondary-text">
            <div className="bg-primary-text rounded-lg flex items-center justify-center p-1 gap-2 cursor-pointer">
              <IoCartOutline className="text-gray-600 w-6 h-6" />
              <span>Cart</span>
            </div>
            <div className="bg-primary-text rounded-lg flex items-center justify-center w-10 h-10 cursor-pointer">
              <FaRegHeart className="text-gray-600 w-6 h-6" />
            </div>
            <div className="bg-primary-text rounded-lg flex items-center justify-center w-10 h-10 cursor-pointer">
              <RxAvatar className="text-gray-600 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      {/* Navbar second section */}
      <div className="bg-primary-text px-44 py-2 text-primary-text flex justify-between border-b-2">
        <div className="flex gap-2">
          <div className="border border-third-text rounded-md p-2 flex gap-2 cursor-pointer">
            <GiHamburgerMenu className="text-secondary-text w-6 h-6" />
            <span className="font-bold text-secondary-text">Kategori</span>
          </div>
          <div className="flex gap-2 p-2">
            <Link to="/" className="text-third-text hover:text-button-hover">
              Home
            </Link>
            <Link
              to="/shop"
              className="text-third-text hover:text-button-hover"
            >
              Shop
            </Link>
            <Link
              to="/product"
              className="text-third-text hover:text-button-hover"
            >
              Product
            </Link>
            <Link
              to="/pages"
              className="text-third-text hover:text-button-hover"
            >
              Pages
            </Link>
            <Link
              to="/about"
              className="text-third-text hover:text-button-hover"
            >
              About
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-secondary-text font-bold mr-2">Contact:</span>
            <p className="text-third-text">(808) 555-0111</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
