import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events").then((res) => setEvents(res.data));
  }, []);

  const settings = { dots: true, infinite: true, slidesToShow: 1, slidesToScroll: 1 };

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-nepaliBlue mb-8">Upcoming Events</h2>
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event._id} className="p-4">
              {event.images?.length ? (
                <img src={event.images[0]} alt={event.title} className="rounded-lg w-full h-64 object-cover" />
              ) : null}
              <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
