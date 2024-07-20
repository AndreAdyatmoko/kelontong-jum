import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS dari carousel
import content from "../../assets/mainContent.jpg";
import conten1 from "../../assets/2.jpg";
import conten2 from "../../assets/3.jpg";
import box from "../../assets/first.png";
import truck from "../../assets/delivery-truck.png";
import watch from "../../assets/24-hours.png";
import payment from "../../assets/shield.png";

// Komponen Feature untuk fitur individual
const Feature = ({ imgSrc, imgAlt, title, description }) => (
  <div className="flex items-center gap-4">
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-10 h-10 object-contain rounded-md"
    />
    <div className="text-left">
      <p className="text-secondary-text font-bold whitespace-nowrap ">
        {title}
      </p>
      <p className="text-fourth-text whitespace-nowrap ">{description}</p>
    </div>
  </div>
);

function Content() {
  return (
    <div className="bg-primary-text px-16 py-8">
      <div className="flex justify-center relative">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showArrows={true} // Menampilkan panah navigasi
          autoPlay={false} // Nonaktifkan autoplay
          emulateTouch={true} // Menambahkan dukungan sentuhan untuk perangkat mobile
        >
          <div className="relative">
            <img
              src={content}
              alt="Beautiful of shop 1"
              className="rounded-b-3xl w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 bg-gradient-to-b from-transparent via-black to-black bg-opacity-70 rounded-lg max-w-lg">
                <p className="text-white text-4xl font-bold mb-2">
                  Selamat datang di
                  <br />
                  <span className="text-yellow-400 text-5xl font-extrabold">
                    Toko Bu Jum
                  </span>
                </p>
                <p className="text-white text-lg font-medium mt-2">
                  Kami menyediakan berbagai makanan pokok.
                </p>
                <p className="text-white text-xl font-semibold mt-2">
                  Selamat berbelanja!
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
              <div className="bg-primary-text p-6 rounded-md flex flex-wrap items-center gap-4">
                <Feature
                  imgSrc={box}
                  imgAlt="box"
                  title="Diskon"
                  description="Untuk produk tertentu"
                />
                <Feature
                  imgSrc={truck}
                  imgAlt="truck"
                  title="Gratis Ongkir"
                  description="Gratis ongkir"
                />
                <Feature
                  imgSrc={watch}
                  imgAlt="jam"
                  title="24 Jam"
                  description="Kami buka 24 jam"
                />
                <Feature
                  imgSrc={payment}
                  imgAlt="Payment"
                  title="Pembayaran instan"
                  description="Kami menerima semua metode pembayaran"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={conten1}
              alt="Beautiful of shop 2"
              className="rounded-b-3xl w-full h-screen object-cover"
            />
          </div>
          <div className="relative">
            <img
              src={conten2}
              alt="Beautiful of shop 3"
              className="rounded-b-3xl w-full h-screen object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Content;
