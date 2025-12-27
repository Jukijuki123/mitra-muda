import { useEffect, useState } from "react";
import api from "../../api/axios";

const CollaborationRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    api.get('/collaborations/incoming')
      .then(res => setRequests(res.data));
  }, []);

  const handleRespond = (id, status) => {
    api.post(`/collaborations/${id}/respond`, { status })
      .then(() => {
        setRequests(prev => prev.filter(r => r.id !== id));
      });
  };

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-xl font-bold mb-4">
        Permintaan Kolaborasi
      </h1>

      {requests.length === 0 ? (
        <p className="text-gray-500">Tidak ada permintaan.</p>
      ) : (
        <div className="space-y-4">
          {requests.map(r => (
            <div
              key={r.id}
              className="border rounded-xl p-4"
            >
              <p className="font-semibold">
                {r.requester.name}
              </p>
              <p className="text-sm text-gray-600">
                Ingin berkolaborasi di ide: {r.idea.judul}
              </p>

              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => handleRespond(r.id, 'accepted')}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Terima
                </button>
                <button
                  onClick={() => handleRespond(r.id, 'rejected')}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Tolak
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollaborationRequest;
