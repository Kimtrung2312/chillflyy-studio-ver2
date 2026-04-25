"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/hero1.jpg",
    title: "Lưu giữ khoảnh khắc",
    desc: "Chụp ảnh studio chuyên nghiệp, cá nhân, couple.",
  },
  {
    image: "/hero2.jpg",
    title: "Phục hồi ảnh cũ",
    desc: "Khôi phục ảnh mờ, rách, nâng cấp chất lượng.",
  },
  {
    image: "/hero3.jpg",
    title: "Photobooth sự kiện",
    desc: "In ảnh lấy liền, concept dễ thương.",
  },
  {
    image: "/hero4.jpg",
    title: "Chụp ảnh sự kiện",
    desc: "Bắt trọn khoảnh khắc chuyên nghiệp.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  //  Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="w-full px-6 pt-6">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-xl">

        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-[500px] md:h-[600px] px-8 md:px-16 text-white max-w-2xl">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {slides[index].title}
          </h1>

          <p className="text-gray-200 mb-8 text-lg">
            {slides[index].desc}
          </p>

          <div className="flex gap-4">
            <a
              href="https://zalo.me/84901234567"
              className="bg-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Đặt lịch ngay
            </a>

            <a
              href="#portfolio"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition"
            >
              Xem dự án
            </a>
          </div>
        </div>

        {/* Arrow Left */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 rounded-full hover:bg-white transition"
        >
          ←
        </button>

        {/* Arrow Right */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 rounded-full hover:bg-white transition"
        >
          →
        </button>

      </div>
    </section>
  );
}