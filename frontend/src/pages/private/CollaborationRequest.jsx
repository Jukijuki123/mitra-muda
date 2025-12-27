import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const CollaborationRequest = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  const fetchRequests = () => {
    api.get('/collaborations/incoming')
      .then(res => setRequests(res.data));
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleRespond = (id, status) => {
    api.post(`/collaborations/${id}/respond`, { status })
      .then(fetchRequests);
  };

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-xl font-bold mb-6">
        Kolaborasi
      </h1>

      {requests.length === 0 ? (
        <p className="text-gray-500">Belum ada kolaborasi.</p>
      ) : (
        <div className="space-y-4">
          {requests.map(r => (
            <div
              key={r.id}
              className="border rounded-xl p-4 bg-white"
            >
              <p className="font-semibold text-gray-900">
                {r.requester.name}
              </p>

              <p className="text-sm text-gray-600 mb-3">
                Ide: <span className="font-medium">{r.idea.judul}</span>
              </p>

              {/* STATUS HANDLING */}
              {r.status === 'pending' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleRespond(r.id, 'accepted')}
                    className="bg-green-600 text-white px-4 py-1.5 rounded-lg"
                  >
                    Terima
                  </button>
                  <button
                    onClick={() => handleRespond(r.id, 'rejected')}
                    className="bg-red-600 text-white px-4 py-1.5 rounded-lg"
                  >
                    Tolak
                  </button>
                </div>
              )}

              {r.status === 'accepted' && (
                <div className="flex items-center justify-between">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold">
                    ✅ Kolaborasi Aktif
                  </span>

                  <button
                    onClick={() => navigate(`/collaborations/${r.id}/chat`)}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-lg"
                  >
                    Buka Chat
                  </button>
                </div>
              )}

              {r.status === 'rejected' && (
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm font-semibold">
                  ❌ Ditolak
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollaborationRequest;
