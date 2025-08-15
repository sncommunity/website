import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "Join", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", form);
      setStatus("Thanks! We received your message.");
      setForm({ name: "", email: "", phone: "", reason: "Join", message: "" });
    } catch (e) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-nepaliBlue mb-6">Contact Us</h2>
        <form onSubmit={submit} className="grid gap-4 bg-white p-6 rounded-xl shadow">
          <input className="border p-3 rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/>
          <input className="border p-3 rounded" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
          <input className="border p-3 rounded" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/>
          <select className="border p-3 rounded" value={form.reason} onChange={e=>setForm({...form, reason:e.target.value})}>
            <option>Join</option>
            <option>Language School</option>
            <option>Suggestion</option>
            <option>Other</option>
          </select>
          <textarea className="border p-3 rounded" placeholder="Message" rows="4" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required/>
          <button className="bg-nepaliRed text-white px-6 py-3 rounded-lg">Send</button>
          {status && <p className="text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
}
