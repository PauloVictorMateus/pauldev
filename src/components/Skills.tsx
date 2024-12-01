import React from "react";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui, SiNestjs, SiPrisma, SiTypescript } from "react-icons/si";

const Skills: React.FC = () => {
  const skills = [
    { name: "React", level: 100, icon: <FaReact size={"30px"} className="dark:text-gray-100" /> },
    { name: "Chakra Ui", level: 100, icon: <SiChakraui size={"30px"} className="dark:text-gray-100"/>  },
    { name: "TypeScript", level: 100, icon: <SiTypescript size={"30px"} className="dark:text-gray-100"/>  },
    { name: "Node.js", level: 100,  icon: <FaNodeJs size={"30px"} className="dark:text-gray-100"/>  },
    { name: "Tailwind CSS", level: 100,  icon: <RiTailwindCssFill size={"30px"} className="dark:text-gray-100"/> },
    { name: "Aws", level: 100,  icon: <FaAws size={"30px"} className="dark:text-gray-100"/>  },
    { name: "Prisma", level: 100,  icon: <SiPrisma size={"30px"} className="dark:text-gray-100"/>  },
    { name: "NestJs", level: 100,  icon: <SiNestjs size={"30px"} className="dark:text-gray-100"/>   },
      ];

  return (
    <section id="skills" className="min-h-screen bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              {skill.icon}
              <div className="flex justify-between mb-2">
                <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
