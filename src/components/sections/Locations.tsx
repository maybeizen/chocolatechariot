import React from "react";
import { MapPin, Clock } from "lucide-react";
import { locations } from "../../data/locations";

const Locations: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="locations" className="section bg-primary-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-black mb-4">Find Us</h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            The Chocolate Chariot is always on the move! Check out our weekly
            schedule to find us in your neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => {
            const isOpenToday = location.days.includes(today);

            return (
              <div
                key={location.id}
                className={`rounded-lg overflow-hidden transition-transform hover:scale-105 ${
                  isOpenToday ? "bg-secondary-600 shadow-lg" : "bg-primary-800"
                }`}
              >
                <div className="p-6">
                  <div className="flex text-black justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{location.name}</h3>
                  </div>

                  <div className="flex items-start mb-3">
                    <MapPin className="h-5 w-5 text-secondary-300 mr-2 flex-shrink-0 mt-0.5" />
                    <p>{location.address}</p>
                  </div>

                  <div className="flex items-start mb-4">
                    <Clock className="h-5 w-5 text-secondary-300 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-black">{location.hours}</p>
                  </div>

                  <div className="border-t border-primary-700 pt-4">
                    <p className="text-black font-medium mb-2">
                      Days of Operation:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ].map((day) => (
                        <span
                          key={day}
                          className={`text-xs px-2 py-1 rounded ${
                            location.days.includes(day)
                              ? "bg-primary-600 text-black"
                              : "bg-primary-900 text-gray-400"
                          }`}
                        >
                          {day.slice(0, 3)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-primary-800 rounded-lg text-center">
          <h3 className="text-2xl font-serif mb-4">Special Events</h3>
          <p className="mb-4">
            We also cater for special events! Contact us to bring the Chocolate
            Chariot to your corporate event, wedding, or private party.
          </p>
          <button
            className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-medium px-6 py-3 rounded-md transition"
            onClick={() => (window.location.href = "#contact")}
          >
            Book for an Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Locations;
