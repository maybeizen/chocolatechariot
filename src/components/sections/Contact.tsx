import React, { useState } from "react";
import Button from "../ui/Button";
import { Mail, Phone, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-primary-50 text-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4">Contact Us</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Want to book Chocolate Chariot for an event? Got questions or sweet
            ideas? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 shadow-inner">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-black mb-2">
                  Message Sent!
                </h3>
                <p className="text-black">
                  We’ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-black font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-black font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-black font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-black font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-400"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-ful"
                >
                  <span className="text-black">Send</span>
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-primary-800 text-black p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Phone className="h-6 w-6 text-black" />}
                  label="Phone"
                  lines={["(555) 123-4567", "Mon–Fri, 9am–5pm"]}
                />
                <ContactInfo
                  icon={<Mail className="h-6 w-6 text-black" />}
                  label="Email"
                  lines={["info@chocolatechariot.com", "Response in 24 hours"]}
                />
              </div>
            </div>

            <div className="bg-secondary-500 p-8 rounded-xl shadow-lg text-black">
              <h3 className="text-2xl font-serif mb-4">
                Special Orders & Events
              </h3>
              <p className="mb-6">We create custom packages for:</p>
              <ul className="space-y-3 mb-6 list-disc pl-6 text-black">
                <li>Corporate events & client gifts</li>
                <li>Weddings & private celebrations</li>
                <li>Holiday and seasonal parties</li>
                <li>Custom-branded chocolates</li>
              </ul>
              <p className="text-sm italic text-black">
                Please contact us at least 2 weeks in advance for special events
                or bulk orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  label: string;
  lines: string[];
}> = ({ icon, label, lines }) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">{icon}</div>
    <div>
      <h4 className="font-medium text-lg">{label}</h4>
      {lines.map((line, index) => (
        <p className="text-sm text-black" key={index}>
          {line}
        </p>
      ))}
    </div>
  </div>
);

export default Contact;
