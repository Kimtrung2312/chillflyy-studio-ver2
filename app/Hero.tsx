"use client";
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/hero1.jpg",
    title: "Chụp ảnh Studio",
    desc: "Ảnh cá nhân, couple, profile chuyên nghiệp với ánh sáng chuẩn studio.",
  },
  {
    image: "/hero2.jpg",
    title: "Phục hồi ảnh cũ",
    desc: "Khôi phục ảnh mờ, rách, tô màu và nâng cấp chất lượng ảnh.",
  },
  {
    image: "/hero3.jpg",
    title: "Photobooth sự kiện",
    desc: "Setup photobooth dễ thương, in ảnh lấy liền cho tiệc cưới & sinh nhật.",
  },
  {
    image: "/hero4.jpg",
    title: "Chụp ảnh sự kiện",
    desc: "Bắt trọn khoảnh khắc quan trọng với chất lượng chuyên nghiệp.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5s

    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Background Image */}
      <Image
        key={current.image}
        src={current.image}
        alt={current.title}
        fill
        className="object-cover transition-opacity duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {current.title}
        </h2>

        <p className="text-gray-300 mb-8">
          {current.desc}
        </p>

        <a
          href="https://zalo.me/0901234567"
          className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Đặt lịch ngay
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}