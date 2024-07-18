import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";



const Navbar = () => {
  return (
    <div>
      <div className="bg-primary px-44 py-2 text-primary-text flex justify-between">
        <p>Gratis ongkir untuk wilayah Srimulyo Bansari</p>
        <div className="flex gap-2">
          <p>Pertanyaan</p>
          <p>Mengenai</p>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="flex justify-between px-44 py-4 items-center">
          <div>
            <p className="text-secondary-text">Bu Jum</p>
          </div>
          <div className="flex items-center gap-2 bg-primary-text rounded-md p-1">
            <input
              type="text"
              placeholder="Cari barang mu disini..."
              className="p-1 text-black focus:outline-none"
            />
            <IoIosSearch className="text-gray-600" />
          </div>
          <div className="flex gap-2 text-secondary-text">
            <div className="bg-primary-text rounded-lg flex items-center justify-center p-1 gap-2 ">
              <IoCartOutline className="text-gray-600 w-6 h-6" />
              <p>Cart</p>
            </div>
            <div className="bg-primary-text rounded-lg flex items-center justify-center w-10 h-10">
              <FaRegHeart className="text-gray-600 w-6 h-6" />
            </div>
            <div className="bg-primary-text rounded-lg flex items-center justify-center w-10 h-10">
              <RxAvatar className="text-gray-600 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
