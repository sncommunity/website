import { useEffect, useState } from "react";
import axios from "axios";

export default function Board() {
  const [members, setMembers] = useState([]);
  useEffect(() => { axios.get("/api/members").then((res) => setMembers(res.data)); }, []);

  return (
    <section id="board" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-nepaliBlue mb-8">Executive Board</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m._id} className="p-4 bg-gray-50 rounded-xl shadow">
              <img src={m.photoUrl} alt={m.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-3 font-semibold">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.role}</p>
              <p className="text-sm mt-2">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
