// src/components/Hero.jsx
import React from 'react';

function Hero() {
return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-32">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Konten Kiri (Teks & Tombol CTA) */}
        <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Wujudkan Ide Inovatif, Dukung UMKM Lokal
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
            Jembatani generasi muda dengan UMKM untuk menciptakan solusi bisnis yang berkelanjutan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
            href="/ideboard" // Ganti dengan rute ke Ideboard Anda
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
            Cari Ide
            </a>
            <a 
            href="/investasi" // Ganti dengan rute ke halaman Investasi Anda
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
            Investasi
            </a>
        </div>
        </div>

        {/* Konten Kanan (Gambar) */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
        {/* Ganti URL gambar dengan gambar yang relevan. Anda bisa upload ke folder public di proyek React Anda */}
        <img 
            src="https://via.placeholder.com/600x400/805ad5/ffffff?text=Inovasi+UMKM" 
            alt="Ilustrasi Inovasi UMKM" 
            className="rounded-lg shadow-2xl max-w-full h-auto"
        />
        </div>
    </div>
    </section>
);
}

export default Hero;