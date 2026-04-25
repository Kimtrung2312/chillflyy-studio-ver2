import Image from "next/image";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
  
  {/* Logo (click về đầu trang) */}
  <a
    href="#"
    className="px-4 py-2 bg-black text-white font-bold rounded-xl hover:opacity-80 transition"
  >
    ChillFlyy Studio
  </a>

  {/* Menu */}
  <nav className="flex gap-4">
    <a
      href="#services"
      className="px-4 py-2 bg-black text-white rounded-xl hover:bg-white hover:text-black transition"
    >
      Dịch vụ
    </a>

    <a
      href="#portfolio"
      className="px-4 py-2 bg-black text-white rounded-xl hover:bg-white hover:text-black transition"
    >
      Portfolio
    </a>

    <a
      href="#pricing"
      className="px-4 py-2 bg-black text-white rounded-xl hover:bg-white hover:text-black transition"
    >
      Bảng giá
    </a>

    <a
      href="#contact"
      className="px-4 py-2 bg-black text-white rounded-xl hover:bg-white hover:text-black transition"
    >
      Liên hệ
    </a>
  </nav>
</header>
		{/* Hero */}
		<Hero />
   
   {/* Services */}
      <section id="services" className="py-16 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Dịch vụ</h3>
        <div className="grid md:grid-cols-4 gap-8">
          
          <div className="p-6 bg-gray-900 rounded-2xl">
            <h4 className="text-xl font-semibold mb-3">Studio</h4>
            <p className="text-gray-400">
              Chụp ảnh cá nhân, couple, profile chuyên nghiệp.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl">
            <h4 className="text-xl font-semibold mb-3">Phục hồi ảnh</h4>
            <p className="text-gray-400">
              Khôi phục ảnh cũ, ảnh mờ, tô màu ảnh.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-2xl">
            <h4 className="text-xl font-semibold mb-3">Thể thao</h4>
            <p className="text-gray-400">
              Chụp giải đấu, bắt khoảnh khắc tốc độ cao.
            </p>
          </div>

          <div className="p-6 bg-pink-900 rounded-2xl border border-pink-500">
            <h4 className="text-xl font-semibold mb-3">Photobooth</h4>
            <p className="text-gray-300">
              Cho thuê photobooth sự kiện, tiệc cưới, sinh nhật. 
              Concept dễ thương, in ảnh lấy liền.
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
          href="https://chat.zalo.me/"
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