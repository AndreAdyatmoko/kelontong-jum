import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS dari carousel
import content from "../../assets/mainContent.jpg";
import conten1 from "../../assets/2.jpg";
import conten2 from "../../assets/3.jpg";

function Content() {
  return (
    <div className="bg-primary-text px-16 py-8">
      <div className="flex justify-center">
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
                  <span className="text-yellow-400 text-5xl font-extrabold">Toko Bu Jum</span>
                </p>
                <p className="text-white text-lg font-medium mt-2">
                  Kami menyediakan berbagai makanan pokok.
                </p>
                <p className="text-white text-xl font-semibold mt-2">
                  Selamat berbelanja!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={conten1}
              alt="Beautiful of shop 2"
              className="rounded-b-3xl w-full h-screen object-cover"
            />
          </div>
          <div>
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
