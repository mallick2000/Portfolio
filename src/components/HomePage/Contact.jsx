import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <Mail
                size={20}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <span>subhranshumallick56@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <Phone
                size={20}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <span>+91-9348628756</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
              <MapPin
                size={20}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <span>Bhubaneswar, Odisha, India</span>
            </div>
          </div>

          {/* Contact Form */}
          {/* <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted!");
            }}
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
