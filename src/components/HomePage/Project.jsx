import Image from "next/image";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS. Features smooth animations, dark mode, and responsive design.",
    image: "/img1.jpg",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://your-portfolio.com",
    code: "https://github.com/yourname/portfolio",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A sleek weather app using OpenWeather API. Displays current conditions, forecasts, and dynamic background based on weather.",
    image: "/img1.jpg",
    tech: ["React", "API", "CSS"],
    live: "https://your-weather-app.com",
    code: "https://github.com/yourname/weather-app",
  },
  {
    id: 3,
    title: "Chat App",
    description:
      "A realtime chat app built with Socket.io and React. Supports multiple rooms and emojis.",
    image: "/img1.jpg",
    tech: ["React", "Socket.io", "Node.js"],
    live: "https://your-chat-app.com",
    code: "https://github.com/yourname/chat-app",
  },
  {
    id: 4,
    title: "E-commerce Store",
    description:
      "A full-featured e-commerce website with payment integration and admin dashboard.",
    image: "/img1.jpg",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    live: "https://your-store.com",
    code: "https://github.com/yourname/ecommerce-store",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-28"
    >
      <div>
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid gap-6 grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-40 object-contain"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 dark:bg-indigo-600 text-indigo-800 dark:text-white text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
