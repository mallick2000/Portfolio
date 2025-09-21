import React from "react";
import {
  Code,
  Monitor,
  Server,
  GitBranch,
  Github,
  Figma,
  Terminal,
  Cloud,
  Wrench,
  FileCode,
  LayoutDashboard,
  Palette,
  Zap,
} from "lucide-react";

const techStack = {
  Frontend: [
    { name: "HTML", icon: <FileCode size={20} /> },
    { name: "CSS", icon: <Palette size={20} /> },
    { name: "JavaScript", icon: <Zap size={20} /> },
    { name: "React", icon: <LayoutDashboard size={20} /> },
    { name: "Next.js", icon: <Monitor size={20} /> },
    { name: "Tailwind CSS", icon: <Palette size={20} /> },
  ],
  Backend: [
    { name: "Node.js", icon: <Server size={20} /> },
    { name: "Express", icon: <Wrench size={20} /> },
    { name: "MongoDB", icon: <Cloud size={20} /> },
  ],
  "Tools & Others": [
    { name: "Git", icon: <GitBranch size={20} /> },
    { name: "GitHub", icon: <Github size={20} /> },
    { name: "VS Code", icon: <Code size={20} /> },
    { name: "Figma", icon: <Figma size={20} /> },
    { name: "Vite", icon: <Terminal size={20} /> },
  ],
};

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Tech Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-4 text-left">
          {Object.entries(techStack).map(([category, tools]) => (
            <div
              key={category}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="flex items-center gap-3 text-gray-800 dark:text-gray-300 text-base"
                  >
                    <span className="text-indigo-500">{tool.icon}</span>
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
