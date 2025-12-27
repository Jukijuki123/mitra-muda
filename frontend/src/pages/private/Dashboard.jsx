import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdeaCard } from '../../components/IdeaCard';
import api from '../../api/axios';
import { getUser, clearAuth } from '../../utils/auth';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil user dari localStorage (cepat, biar tidak blank)
    const user = getUser();
    if (!user) {
      navigate('/login');
      return;
    }
    setProfile(user);

  

    // Ambil data dashboard dari API
    api.get('/dashboard')
      .then(res => {
        setProfile(res.data.user);
        setStats(res.data.stats);
        setIdeas(res.data.ideas);
      })
      .catch(err => {
        if (err.response?.status === 401) {
          clearAuth();
          navigate('/login');
        } else {
          setError('Gagal memuat dashboard.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  // Loading state
  if (loading) {
    return <div className="p-8">Memuat dashboard...</div>;
  }

  // Safety check
  if (!profile) {
    return <div className="p-8">Data pengguna tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-8">
        {/* Header */}
        <div className="mb-6 p-6 bg-primary rounded-xl">
          <h1 className="text-3xl mb-1 font-bold text-white">
            Selamat Datang, {profile.name || profile.email}
          </h1>
          <p className='text-white mb-2'>Dari ide jadi realita, wujukan UMKM kekinian</p>
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard title="Total Ide" value={stats.total_ideas} />
            <StatCard title="Ide Anda" value={stats.your_ideas} />
            <StatCard title="Kolaborasi Aktif" value="0" />
          </div>
        )}

        {/* Ideas */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Ide Populer
        </h2>

        {ideas.length === 0 ? (
          <p className="text-gray-500">Belum ada ide yang tersedia.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {ideas.map((idea) => (
            <IdeaCard
              key={idea.id}
              judul={idea.judul}
              deskripsi={idea.deskripsi}
              kategori={{ label: idea.kategori }}
              likes={idea.likes_count}
              comments={idea.comments_count}
              cta="Lihat Detail"
              onClick={() => navigate(`/ideas/${idea.id}`)}
            />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

// Komponen kecil untuk statistik (aman & sederhana)
function StatCard({ title, value }) {
  return (
    <div className="bg-white border border-primary p-6 rounded-xl">
      <p className="text-sm text-gray-800">{title}</p>
      <p className="text-4xl font-bold text-black mt-2">
        {value}
      </p>
    </div>
  );
}

export default Dashboard;
