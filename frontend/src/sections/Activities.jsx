export default function Activities() {
  return (
    <section id="activities" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-nepaliBlue mb-8">Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Nepalese Language School</h3>
            <p className="text-gray-700">Weekly classes for kids to learn Nepali language and culture.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Festival Celebrations</h3>
            <p className="text-gray-700">Dashain, Tihar and more — inclusive community gatherings.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Community Support</h3>
            <p className="text-gray-700">Workshops, sports days, BBQs and local partnerships.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
