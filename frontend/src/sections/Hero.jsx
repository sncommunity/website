export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[85vh] flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <img src="/logo.png" alt="Community Logo" className="w-32 mb-6 drop-shadow" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Connecting the Nepalese Community in Strathfield
      </h1>
      <p className="max-w-2xl text-center mb-6 px-4">
        Language school, cultural festivals, and community support for Nepalese families in the Strathfield area.
      </p>
      <div className="flex gap-4">
        <a href="#contact" className="bg-nepaliRed px-6 py-3 rounded-lg hover:bg-red-700">Join Us</a>
        <a href="#activities" className="bg-white text-nepaliBlue px-6 py-3 rounded-lg hover:bg-gray-100">Learn Nepali</a>
      </div>
    </section>
  );
}
