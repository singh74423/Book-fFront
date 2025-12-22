import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-backend-cjs3.onrender.com/book");
        const filtered = res.data.filter(
          (item) => item.category === "Free"
        );
        setBook(filtered);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  // 🔥 SIMPLE & SAFE SETTINGS
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <h1 className="font-semibold text-lg mb-2">
        Free Offered Books
      </h1>

      {/* 🔥 HEIGHT FIX */}
      <div style={{ minHeight: "200px" }}>
        <Slider {...settings}>
          {book.map((item) => (
            <div key={item.id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
