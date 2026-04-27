import Image from "next/image";
import Hero from "./Hero";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* Navbar */}
      <header className="w-full px-8 py-6 sticky top-0 z-50">
	<div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-md border border-gray-200">

    {/* Logo */}
    <a className="text-2xl font-bold text-green-700 tracking-wide">
      ChillFly Studio
    </a>

    {/* Menu */}
    <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
      <a href="#" className="hover:text-green-700 transition">Home</a>
      <a href="#services" className="hover:text-green-700 transition">Dịch vụ</a>
      <a href="#pricing" className="hover:text-green-700 transition">Bảng giá</a>
      <a href="#portfolio" className="hover:text-green-700 transition">Dự án</a>
    </nav>

    {/* Right side */}
    <div className="flex items-center gap-6">

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-transparent outline-none text-sm px-2"
        />
      </div>

      {/* Contact */}
      <a
		href="https://zalo.me/0932365196"
		target="_blank"
		rel="noopener noreferrer"
	className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-700 transition"
	>
	<Phone size={18} />
	Liên hệ
	</a>

    </div>

  </div>
</header>
		{/* Hero */}
		<Hero />
   
   {/* Services */}
      <section id="services" className="py-20 px-6 bg-[#f6f8f7]">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h3 className="text-4xl font-bold mb-4">
      Dịch vụ của chúng tôi
    </h3>
    <p className="text-white-500">
      Giải pháp hình ảnh chuyên nghiệp cho mọi nhu cầu của bạn
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    
    {/* Studio */}
    <div className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 mb-4">
        📸
      </div>
      <h4 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition">
        Studio
      </h4>
      <p className="text-gray-500 text-sm">
        Chụp ảnh cá nhân, couple, profile chuyên nghiệp với ánh sáng chuẩn studio.
      </p>
    </div>

    {/* Phục hồi ảnh */}
    <div className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 mb-4">
        🖼
      </div>
      <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
        Phục hồi ảnh
      </h4>
      <p className="text-gray-500 text-sm">
        Khôi phục ảnh cũ, ảnh mờ, rách, nâng cấp chất lượng và tô màu.
      </p>
    </div>

    {/* Sự kiện */}
    <div className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-100 mb-4">
        ⚡
      </div>
      <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-600 transition">
        Thể thao
      </h4>
      <p className="text-gray-500 text-sm">
        Bắt trọn khoảnh khắc tốc độ cao trong các giải đấu và sự kiện thể thao.
      </p>
    </div>

    {/* Photobooth */}
    <div className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 mb-4">
        🎉
      </div>
      <h4 className="text-lg font-semibold mb-2 group-hover:text-pink-600 transition">
        Photobooth
      </h4>
      <p className="text-gray-500 text-sm">
        Cho thuê photobooth sự kiện, concept dễ thương, in ảnh lấy liền.
      </p>
    </div>

  </div>
</section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    <h3 className="text-4xl font-bold text-center mb-12">
      Dự án nổi bật
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Ảnh lớn bên trái */}
      <div className="md:col-span-2 overflow-hidden rounded-3xl">
        <img
          src="/p1.jpg"
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Ảnh nhỏ bên phải */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src="/p2.jpg"
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Ảnh nhỏ bên trái */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src="/p3.jpg"
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* Ảnh lớn bên phải */}
      <div className="md:col-span-2 overflow-hidden rounded-3xl">
        <img
          src="/p4.jpg"
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

    </div>

  </div>
</section>

      <section id="pricing" className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    <h3 className="text-4xl font-bold text-center mb-12">
      Bảng giá
    </h3>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Basic */}
      <div className="bg-white p-8 rounded-3xl shadow-sm text-center transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
        <h4 className="text-xl font-semibold mb-4">Basic</h4>

        <p className="text-3xl font-bold text-green-600 mb-6">
          500K
        </p>

        <ul className="text-gray-500 space-y-2 mb-6">
          <li>✔ 5 ảnh chỉnh sửa</li>
          <li>✔ 1 concept</li>
          <li>✔ 30 phút chụp</li>
        </ul>

        <a
          href="https://zalo.me/0901234567"
          className="block bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
        >
          Đặt lịch
        </a>
      </div>

      {/* Standard (highlight) */}
      <div className="bg-green-600 text-white p-8 rounded-3xl shadow-lg text-center transition duration-300 hover:-translate-y-3 hover:shadow-2xl scale-105">
        <h4 className="text-xl font-semibold mb-4">Standard</h4>

        <p className="text-3xl font-bold mb-6">
          1.5M
        </p>

        <ul className="text-green-100 space-y-2 mb-6">
          <li>✔ 10 ảnh chỉnh sửa</li>
          <li>✔ 2 concept</li>
          <li>✔ 1 giờ chụp</li>
        </ul>

        <a
          href="https://zalo.me/0901234567"
          className="block bg-white text-green-600 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Đặt lịch
        </a>
      </div>

      {/* Premium */}
      <div className="bg-white p-8 rounded-3xl shadow-sm text-center transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
        <h4 className="text-xl font-semibold mb-4">Premium</h4>

        <p className="text-3xl font-bold text-green-600 mb-6">
          3M
        </p>

        <ul className="text-gray-500 space-y-2 mb-6">
          <li>✔ 20 ảnh chỉnh sửa</li>
          <li>✔ 3 concept</li>
          <li>✔ 2 giờ chụp</li>
        </ul>

        <a
          href="https://zalo.me/0901234567"
          className="block bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
        >
          Đặt lịch
        </a>
      </div>

    </div>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">

    <h3 className="text-4xl font-bold mb-6">
      Liên hệ với chúng tôi
    </h3>

    <p className="text-gray-500 mb-10">
      Đặt lịch chụp ảnh hoặc thuê photobooth ngay hôm nay
    </p>

    {/* Box contact */}
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      {/* Zalo */}
      <a
        href="https://zalo.me/0901234567"
        target="_blank"
        rel="noopener noreferrer"
        className="p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition hover:-translate-y-2"
      >
        <div className="text-3xl mb-3">📱</div>
        <h4 className="font-semibold mb-1">Zalo</h4>
        <p className="text-gray-500 text-sm">Chat nhanh</p>
      </a>

      {/* Facebook */}
      <a
  href="https://www.facebook.com/hkimtrung01/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition hover:-translate-y-2"
>
  <div className="text-3xl mb-3">💬</div>
  <h4 className="font-semibold mb-1">Facebook</h4>
  <p className="text-gray-500 text-sm">Inbox fanpage</p>
</a>

      {/* Email */}
     <a
  href="mailto:huynhkimtrung173@gmail.com"
  className="p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition hover:-translate-y-2"
>
  <div className="text-3xl mb-3">✉️</div>
  <h4 className="font-semibold mb-1">Email</h4>
  <p className="text-gray-500 text-sm">Gửi mail cho chúng tôi</p>
</a>

    </div>

    {/* CTA lớn */}
    <a
      href="https://zalo.me/0932365196"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition"
    >
      Liên hệ ngay
    </a>

  </div>
</section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 ChillFlyy Studio
      </footer>
    </div>
  );
}