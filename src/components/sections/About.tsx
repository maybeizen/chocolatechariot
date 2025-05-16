import React from "react";
import { testimonials } from "../../data/testimonials";
import { Heart, Award, Users, Truck } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl font-serif text-primary-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Chocolate Chariot was born from two high school friends with a
              love for creativity, community, and of course — chocolate. What
              started as a school bake sale idea grew into a rolling dessert
              experience bringing handcrafted joy to local neighborhoods.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Co-founders <strong>Briar Chamberlin</strong> and{" "}
              <strong className="mr-1">Joshua Barnette</strong> combined their
              passion for sweets, tech, and community outreach to create a
              mobile treat truck that’s more than just candy — it’s an
              experience.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With seasonal rotations, build-your-box magic, and locally-sourced
              ingredients, we believe sweet moments should be accessible, fun,
              and full of flavor.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <Feature
                icon={<Heart className="h-8 w-8 text-secondary-500" />}
                title="Made with Love"
              >
                Handcrafted treats inspired by joy and creativity.
              </Feature>
              <Feature
                icon={<Award className="h-8 w-8 text-secondary-500" />}
                title="Premium Quality"
              >
                We use real ingredients — always fresh, never fake.
              </Feature>
              <Feature
                icon={<Users className="h-8 w-8 text-secondary-500" />}
                title="Community-Driven"
              >
                Supporting local events, fundraisers, and schools.
              </Feature>
              <Feature
                icon={<Truck className="h-8 w-8 text-secondary-500" />}
                title="Mobile Fun"
              >
                Sweetness that rolls into your neighborhood.
              </Feature>
            </div>
          </div>

          {/* Image + Quote */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/4110099/pexels-photo-4110099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Chocolate chef preparing truffles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl max-w-xs">
              <p className="italic text-primary-800 text-lg font-serif">
                "Great chocolate makes people smile — we just bring it closer to
                home."
              </p>
              <p className="mt-2 font-medium text-primary-900">
                — Briar Chamberlin, Co-founder
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif text-primary-900 text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-primary-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="mr-3 flex-shrink-0">{icon}</div>
    <div>
      <h3 className="font-semibold text-primary-800 text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  </div>
);

export default About;
