import React from "react";
import logo from "../../assets/logo.png";
import bca from "../../assets/bca1.jpg";
import ButtonPrimary from "../../components/button/button";

const Footer = () => {
  return (
    <footer className="bg-primary-text px-44 py-4">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Footer pojok kiri */}
        <div className="flex flex-col md:w-1/4 gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-md" />
            <p className="text-secondary-text font-bold">Bu Jum</p>
          </div>
          <p className="text-third-text">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
        </div>

        {/* Footer 2 */}
        <div className="flex flex-col md:w-1/4 gap-2">
          <p className="font-bold text-third-text">Category</p>
          <p>Ciki</p>
          <p>Category</p>
          <p>Category</p>
          <p>Category</p>
          <p>Category</p>
          <p>Category</p>
        </div>

        {/* Footer 3 */}
        <div className="flex flex-col md:w-1/4 gap-2">
          <p className="font-bold text-third-text">Support</p>
          <p>Help</p>
          <p>Term of Use</p>
          <p>Privacy</p>
        </div>

        {/* Footer pojok kanan */}
        <div className="flex flex-col md:w-1/4 gap-2 mr-8">
          <p className="font-bold text-third-text">Kabar Terbaru</p>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Cari artikelmu disini..."
              className="p-1 text-black focus:outline-none border border-gray-300 rounded-md flex-grow"
            />
            <ButtonPrimary className="p-4" text="Coba" />
          </div>
          <p className="text-third-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure sequi et, odio rem expedita magni quam, ea nobis culpa cumque aliquam! Nesciunt quasi veritatis reprehenderit, ipsa voluptate odit cum?
          </p>
        </div>
      </div>
      <div className="bg-primary-text flex border-t-2 justify-between rounded-sm">
        <p className="text-secondary-text text-left p-2">@ 2021 - Blogy - Designed & Develop by Andre Adyatmoko</p>
        <img src={bca} alt="bca" className="w-10 h-10 rounded-md" />
      </div>
    </footer>
  );
};

export default Footer;
