    import { Outlet, Link } from "react-router-dom";
    import { motion } from 'framer-motion';
    import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
    import { useState, useEffect} from "react";
    import { Link as ScrollLink } from "react-scroll";



    export default function PublicLayout() {
        const [isScrolled, setIsScrolled] = useState(false)

        useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
        }, [])


    return (
    <div className=" text-white flex flex-col">
    {/* Navbar */}
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between text-primary items-center px-8 py-4 border-b transition-all duration-300 ${
        isScrolled ? "bg-primary-dark/65 border-indigo-100 text-white backdrop-blur-sm" : "bg-transparent border-indigo-100"}`}>
        <h1 className="text-2xl font-extrabold ">
        <Link to="/">Mitra Muda</Link>
        </h1>
        <nav className="space-x-8 hidden md:flex">
            <ScrollLink to="tentang" smooth={true} duration={600} offset={-40} className="cursor-pointer hover:text-primary-light">
                Tentang
            </ScrollLink>
            <ScrollLink to="fitur" smooth={true} duration={600} offset={-40} className="cursor-pointer hover:text-primary-light">
                Fitur
            </ScrollLink>
            <ScrollLink to="keunggulan" smooth={true} duration={600} offset={-40} className="cursor-pointer hover:text-primary-light">
                Keunggulan
            </ScrollLink>
            <ScrollLink to="carakerja" smooth={true} duration={600} offset={-40} className="cursor-pointer hover:text-primary-light">
                Cara Kerja
            </ScrollLink>
        </nav>
        <div className="space-x-3">
        <Link to="/login" className="px-4 py-2 rounded-lg bg-whiteGray text-secondary hover:bg-secondary hover:text-white">Login</Link>
        <Link to="/register" className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary-light text-white">Daftar</Link>
        </div>
    </header>

    {/* Konten Halaman */}
    <main className="flex-1">
        <Outlet />
    </main>

    {/* Footer */}
    <footer className="bg-white mt-10 pt-4">
        <div className="container bg-whiteGray rounded-t-4xl mx-auto py-10 px-8 md:px-16">
        <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-extrabold text-secondary">Mitra Muda</h1>
            <p className="text-gray-600 text-sm mt-4">
                Menghubungkan inovasi anak muda dengan UMKM
            </p>
            </div>

            {/* Navigasi */}
            <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-secondary mb-4">Navigasi</h3>
        <nav className="space-y-2 flex flex-col text-gray-600">
            <ScrollLink to="tentang" smooth={true} duration={600} offset={-40} className="cursor-pointer hover:text-secondary">
                Tentang
            </ScrollLink>
            <ScrollLink to="fitur" smooth={true} duration={600} offset={-40} className="cursor-pointer hover:text-secondary">
                Fitur
            </ScrollLink>
            <ScrollLink to="keunggulan" smooth={true} duration={600} offset={-40} className="cursor-pointer hover:text-secondary">
                Keunggulan
            </ScrollLink>
            <ScrollLink to="carakerja" smooth={true} duration={600} offset={-40} className="cursor-pointer hover:text-secondary">
                Cara Kerja
            </ScrollLink>
        </nav>
            </div>

            {/* Sosial Media */}
            <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-secondary mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
                {[
                { icon: FaFacebookF, href: 'https://facebook.com' },
                { icon: FaInstagram, href: 'https://instagram.com' },
                { icon: FaLinkedinIn, href: 'https://linkedin.com' },
                ].map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-secondary transition"
                >
                    <social.icon className="w-6 h-6" />
                </a>
                ))}
            </div>
            </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
            className="mt-8 pt-8 border-t border-secondary text-center text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            © {new Date().getFullYear()} Mitra Muda. Semua Hak Dilindungi.
        </motion.div>
        </div>
    </footer>
    </div>
    );
    }
