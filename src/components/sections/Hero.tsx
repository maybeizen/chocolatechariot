import React from "react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-custom text-white pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 leading-tight">
            Chocolate That{" "}
            <span className="text-secondary-400">Comes to You</span>
            <span className="block">Fresh, Fun, & Custom</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Handcrafted sweets, nostalgic candies, and build-your-own boxes —
            all from a mobile dessert truck made to sweeten your day.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = "#menu")}
            >
              Explore Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              onClick={() => (window.location.href = "#locations")}
            >
              Find Us
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <div className="bg-black bg-opacity-50 px-4 py-3 rounded-lg">
              <p className="text-secondary-400 font-bold">
                Mobile & Community-Based
              </p>
              <p className="text-sm">
                We pop up where you live, work, and play.
              </p>
            </div>
            <div className="bg-black bg-opacity-50 px-4 py-3 rounded-lg">
              <p className="text-secondary-400 font-bold">Build-Your-Box</p>
              <p className="text-sm">
                Create your perfect mix of chocolate and candy.
              </p>
            </div>
            <div className="bg-black bg-opacity-50 px-4 py-3 rounded-lg">
              <p className="text-secondary-400 font-bold">
                Handcrafted & Local
              </p>
              <p className="text-sm">
                Small-batch sweets using local ingredients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#menu" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
