// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 border-b border-white shadow-md">
    <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">Mitra Muda</a>
        <div className="space-x-8">
        <a href="#about" className="text-white hover:text-gray-800">Tentang</a>
        <a href="#features" className="text-white hover:text-gray-800">Fitur</a>
        <a href="#contact" className="text-white hover:text-gray-800">Hubungi Kami</a>
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Masuk</a>
        </div>
    </div>
    </nav>
);
}

export default Navbar;