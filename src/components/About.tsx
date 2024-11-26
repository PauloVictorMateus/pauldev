import React from "react";
import Avatar from "../assets/paulo-nascimento.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PortugueseCurriculum from "../documents/portuguese-paulo-nascimento.pdf"
import EnglishCurriculum from "../documents/english-paulo-nascimento.pdf"


const timelineData = [
  {
    period: "Mai 2024 - Presente",
    title: "Desenvolvedor Full-Stack Junior II",
    description: "Lovel Technology",
  },
  {
    period: "Jul 2023 - Mai 2024",
    title: "Desenvolvedor Full-Stack Junior",
    description: "Lovel Technology",
  },
  {
    period: "Mai 2022 - Jul 2023",
    title: "Estágio em Desenvolvimento Front-End",
    description: "Lovel Technology",
  },
  {
    period: "Jan 2022 - Jun 2022",
    title: "Desenvolvedor Front-End Junior",
    description: "Lider Projetos",
  },
  {
    period: "2021",
    title: "Estágio em Desenvolvimento Frontend",
    description: "neWave Telecom",
  },
  {
    period: "2019",
    title: "Início na Programação",
    description: "Primeiros passos com HTML, CSS e JavaScript",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Sobre Mim
          </h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
              <img
                src={Avatar}
                alt="Paulo Nascimento"
                className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover"
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Paulo Nascimento
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Desenvolvedor Full Stack apaixonado por criar soluções web
                  inovadoras. Com experiência em React, TypeScript, e Nest.Js.
                </p>
                <div className="flex justify-center sm:justify-start gap-4">
                  <div className="flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <FaGithub />
                    <a
                      href="https://github.com/PauloVictorMateus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                    <FaLinkedin />
                    <a
                      href="https://www.linkedin.com/in/paulo-victor-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                {/* Botões de Download */}
                <div className="mt-6 flex gap-4 justify-center sm:justify-start">
                  <a
                    href={PortugueseCurriculum}
                    download="Curriculo_Paulo_Nascimento_PT.pdf"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500 transition-colors"
                  >
                    Baixar Currículo (PT)
                  </a>
                  <a
                    href={EnglishCurriculum}
                    download="Curriculum_Paulo_Nascimento_EN.pdf"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                  >
                    Download CV (EN)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-600"></div>
                  </div>
                  <div className="relative z-10 w-6 h-6 flex items-center justify-center bg-blue-500 rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.period}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
