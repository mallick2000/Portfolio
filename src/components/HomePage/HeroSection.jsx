import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const BannerSection = () => {
  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I&apos;m{" "}
            <span className="text-teal-500">Subhranshu Mallick</span> — a
            Frontend Developer
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            I craft responsive and interactive web experiences using modern
            tools like <strong>React</strong>, <strong>JavaScript</strong>, and{" "}
            <strong>Tailwind CSS</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="#projects">
              <Button
                variant="default"
                className="bg-teal-500 hover:bg-teal-600 text-white"
              >
                View My Work
              </Button>
            </Link>

            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                Download Resume
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end">
          <Image
            src="/img1.jpg"
            alt="Subhranshu Mallick"
            width={600}
            height={400}
            priority
            className="rounded-lg object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
