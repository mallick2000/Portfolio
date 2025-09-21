import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a{" "}
          <span className="font-semibold text-teal-500 ">
            Frontend Developer
          </span>{" "}
          with a passion for building fast, responsive, and accessible websites.
          I specialize in{" "}
          <span className="font-medium">React, Tailwind CSS</span>, and modern
          JavaScript frameworks. I enjoy turning complex problems into simple,
          elegant solutions, and I&apos;m always eager to learn new
          technologies.
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          When I'm not coding, you can find me exploring UI/UX trends, sketching
          app ideas, or sipping coffee while reading tech blogs.
        </p>
      </div>
    </section>
  );
};

export default About;
