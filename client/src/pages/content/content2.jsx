import React from "react";
import garuda from "../../assets/brand/garuda.jpg";
import kelinci from "../../assets/brand/duakelinci.jpg";
import aqua from "../../assets/brand/aqua.jpg";
import indomie from "../../assets/brand/indomie.jpeg";
import miesedap from "../../assets/brand/miesedap.png";
import lemineral from "../../assets/brand/lemineral.jpeg";
import nabati from "../../assets/brand/nabati.png";

const Picture = ({ imgSrc, imgAlt }) => (
  <div className="flex items-center gap-4">
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-16 h-16 object-contain rounded-md"
    />
  </div>
);

const Content2 = () => {
  return (
    <div className="bg-primary-text">
      <div className="bg-primary-text flex justify-center gap-14 p-4">
        <Picture imgSrc={garuda} imgAlt="Garuda" />
        <Picture imgSrc={kelinci} imgAlt="Kelinci" />
        <Picture imgSrc={aqua} imgAlt="Aqua" />
        <Picture imgSrc={indomie} imgAlt="Indomie" />
        <Picture imgSrc={miesedap} imgAlt="Miesedap" />
        <Picture imgSrc={lemineral} imgAlt="LemIneral" />
        <Picture imgSrc={nabati} imgAlt="Nabati" />
      </div>
      <div>Gambar Product</div>
      <div>Gambar Product Terlaris</div>
    </div>
  );
};

export default Content2;
