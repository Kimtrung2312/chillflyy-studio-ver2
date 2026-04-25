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
      <section id="portfolio" className="py-16 px-6 bg-gray-950">
        <h3 className="text-3xl font-bold mb-10 text-center">Portfolio</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-800 h-48 rounded-xl"></div>
          <div className="bg-gray-800 h-48 rounded-xl"></div>
          <div className="bg-gray-800 h-48 rounded-xl"></div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Bảng giá</h3>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-gray-900 rounded-2xl text-center">
            <h4 className="text-xl font-semibold mb-3">Basic</h4>
            <p className="text-2xl font-bold mb-4">500K</p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl text-center">
            <h4 className="text-xl font-semibold mb-3">Standard</h4>
            <p className="text-2xl font-bold mb-4">1.5M</p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl text-center">
            <h4 className="text-xl font-semibold mb-3">Premium</h4>
            <p className="text-2xl font-bold mb-4">3M</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-950 text-center">
        <h3 className="text-3xl font-bold mb-6">Liên hệ</h3>
        <p className="text-gray-400 mb-4">Zalo / Facebook / Email</p>
        <a
          href="https://zalo.me/0932365196"
          className="bg-white text-black px-6 py-3 rounded-xl"
        >
          Nhắn tin ngay
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 ChillFlyy Studio
      </footer>
    </div>
  );
}