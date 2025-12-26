import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Network,
  Layers,
  TrendingUp,
  Lightbulb,
  Handshake,
  Trophy,
  PiggyBank,
  UserPlus,
  FileText,
  Search,
  Wallet,
  Target,
  Eye,
  DollarSign,
} from "lucide-react";
import hero from "../../assets/brain.jpg";

export default function Landing() {
  // Data fitur utama
  const features = [
    { icon: Lightbulb, title: "Ideboard", description: "Unggah dan jelajahi ide inovatif sesuai kategori." },
    { icon: Handshake, title: "Kolaborasi", description: "Temukan tim dengan skill berbeda untuk mewujudkan ide." },
    { icon: Trophy, title: "Tantangan", description: "Ikuti kompetisi bisnis dengan hadiah menarik." },
    { icon: DollarSign, title: "Crowdfunding", description: "Buka kampanye pendanaan untuk ide Anda." },
  ];

  // Data keunggulan
  const advantages = [
    {
      icon: Users,
      title: "Akses ke Ribuan Ide & Inovator Muda",
      description: "Temukan ide-ide kreatif dari generasi muda dan kolaborasi dengan inovator berbakat di seluruh Indonesia.",
    },
    {
      icon: Network,
      title: "Jaringan Mentor dan Investor Terpercaya",
      description: "Terhubung dengan mentor berpengalaman dan investor yang siap mendukung perjalanan bisnis Anda.",
    },
    {
      icon: Layers,
      title: "Satu Platform, Semua Kebutuhan UMKM",
      description: "Dari ide hingga pendanaan, semua yang Anda butuhkan untuk mengembangkan UMKM ada di sini.",
    },
  ];

  // Data langkah
  const steps = [
    { icon: UserPlus, step: "Daftar Gratis", description: "Buat akun di Mitra Muda" },
    { icon: Search, step: "Unggah atau Cari Ide", description: "Temukan inspirasi bisnis" },
    { icon: Users, step: "Bentuk Tim & Ikut Tantangan", description: "Kolaborasi dan kembangkan ide" },
    { icon: Wallet, step: "Dapatkan Pendanaan", description: "Jalankan bisnis Anda" },
  ];

  return (
    <div className="bg-whiteGray min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="bg-white flex flex-col md:flex-row items-center justify-between flex-1 px-8 md:px-16 py-12">
        {/* Text */}
        <motion.div
          className="max-w-lg text-center md:text-left mt-20 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
            Inovasi untuk UMKM, dari Ide ke Realita
          </h2>
          <p className="text-gray-800 text-lg">
            Platform yang menghubungkan kreativitas anak muda dengan kebutuhan nyata pelaku usaha.
          </p>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Link to="/login" className="btn-primary">
              Masuk
            </Link>
            <Link to="/register" className="btn-secondary bg-white text-primary px-4 py-2 rounded-lg">
              Daftar
            </Link>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="mt-10 md:mt-0 md:ml-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={hero} alt="illustration" className="w-full max-w-md rounded-xl" />
        </motion.div>        
      </main>



    <section id="tentang" className="bg-white py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Main content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6 text-balance">Tentang Mitra Muda</h2>
              <div className=" text-gray-700">
                <p className="text-pretty">
                  Mitra Muda adalah platform kolaborasi digital yang menjembatani generasi muda inovatif dengan UMKM
                  yang membutuhkan solusi nyata. Kami menyediakan ekosistem lengkap untuk mengembangkan ide — mulai dari
                  konsep, pembentukan tim, hingga mendapatkan pendanaan.
                </p>
                <p className="text-pretty">
                  Dengan Mitra Muda, kreativitas anak muda tidak lagi hanya sekadar ide, tetapi bisa menjadi solusi
                  nyata yang berdampak bagi UMKM dan perekonomian Indonesia.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
                        {/* Vision Card */}
            <div
              className="relative overflow-hidden p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-secondary-light"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Visi</h3>
                  <p className="leading-relaxed text-sm text-pretty">
                    Menjadi ekosistem digital terdepan yang menghubungkan inovasi anak muda dengan kebutuhan UMKM di
                    seluruh Indonesia.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
            </div>


            {/* Mission Card */}
            <div
              className="relative overflow-hidden p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-primary"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-white"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Misi</h3>
                  <p className="text-sm leading-relaxed text-pretty">
                    Memberdayakan generasi muda untuk menciptakan solusi inovatif yang membantu UMKM bertumbuh.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>



    <div className="min-h-screen bg-white z-0">
        <div className="relative top-1">
          <svg
            className="w-full h-24 md:h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
              fill="#0046FF"
              opacity="0.8"
            />
            <path
              d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 L1200,120 L0,120 Z"
              fill="#0046FF"
              opacity="0.6"
            />
            <path
              d="M0,100 C300,60 500,100 800,80 C900,70 1100,90 1200,100 L1200,120 L0,120 Z"
              fill="#0046FF"
              opacity="0.4"
            />
          </svg>
        </div>
      {/* Features Section */}
      <section id="fitur" className="bg-primary-dark px-8 md:px-16 py-12 md:py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fitur Utama Kami
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-primary p-6 rounded-tr-4xl rounded-bl-4xl rounded-xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">
                <feature.icon size={40} strokeWidth={1.5} className="mx-auto text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>



      {/* Why Us Section */}
      <section id="keunggulan" className="px-8 md:px-20 py-16 mt-10">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Kenapa Mitra Muda?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-primary p-6 rounded-xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <advantage.icon size={48} strokeWidth={1.5} className="mx-auto text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
              <p className="text-indigo-100 text-sm">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition mt-8">
          <TrendingUp size={48} strokeWidth={1.5} className="mx-auto text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">10.000+ Ide Diunggah</h3>
          <p className="text-indigo-100 text-sm">Bergabunglah dengan komunitas inovator dan wujudkan ide Anda!</p>
        </div>
      </section>

      {/* Steps Section */}
      <section id="carakerja" className="px-8 md:px-16 py-16 mt-10">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-secondary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Bagaimana Cara Kerjanya?
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-8 relative">
          {/* Vertical Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full bg-secondary h-full top-0 z-0"
            aria-hidden="true"
          ></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center relative z-10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 bg-amber-500 mr-6 rounded-full flex items-center justify-center">
                <step.icon size={28} strokeWidth={1.5} className="text-white" />
              </div>

              {/* Description */}
              <div className="bg-primary p-4 rounded-xl shadow-lg flex-1 hover:shadow-xl transform hover:scale-105 transition">
                <h3 className="text-xl font-semibold text-white mb-1">{step.step}</h3>
                <p className="text-indigo-100 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 md:px-16 py-16 mt-10 bg-gradient-to-br from-primary via-primary-light to-primary-dark">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Siap Memulai Perjalananmu?</h2>
          <p className="text-indigo-100 text-lg mb-10">
            Gabung bersama ribuan inovator dan pelaku UMKM sekarang juga.
          </p>
          <Link to="/register" className="btn-primary">
            Daftar Gratis
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
