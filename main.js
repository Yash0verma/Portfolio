import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const projects = [
  {
    title: "Aspect Extraction Using Bi-LSTM with Attention",
    description:
      "Developed a machine learning model for aspect-based sentiment analysis using Bi-LSTM with Attention mechanism.",
    link: "#",
  },
  {
    title: "Sentiment Analysis on Social Media Data",
    description:
      "Analyzed social media data to determine sentiment trends using NLP and machine learning techniques.",
    link: "#",
  },
  {
    title: "Image Classification with CNN",
    description:
      "Implemented a Convolutional Neural Network (CNN) to classify images with high accuracy.",
    link: "#",
  },
  {
    title: "Web Scraper for E-commerce Data",
    description:
      "Built a web scraper using Python and Selenium to collect and analyze product data from e-commerce websites.",
    link: "#",
  },
  {
    title: "Sales Forecasting Using Time Series Analysis",
    description:
      "Developed a time series model to predict future sales based on historical data.",
    link: "#",
  },
];

const achievements = [
  "Completed Cognizant Artificial Intelligence Job Simulation on Forage",
  "Proficient in Python, Machine Learning, and Data Science Tools",
  "Telephonic interview with Medusa Pharmaceuticals for Data Analyst position",
  "Built multiple data-driven projects demonstrating machine learning expertise",
];

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="text-center py-8 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="D:\pic4.jpg"
            alt="Saurabh Verma"
            className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold">
            Saurabh Verma - Data Scientist Portfolio
          </h1>
          <p className="text-gray-600 mt-2">
            Machine Learning Enthusiast | Data Science Specialist
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/Saurabhv15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <Github size={20} /> GitHub
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/saurabh-verma-5385155b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <Linkedin size={20} /> LinkedIn
              </Button>
            </a>
          </div>
        </motion.div>
      </header>

      <section className="py-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            Passionate about leveraging data to uncover insights and drive impactful solutions, I am a dedicated machine learning enthusiast with expertise in cutting-edge technologies. My strong foundation in programming, data analysis, and AI development sets me apart from the crowd. I thrive in solving challenging problems and bringing innovative ideas to life, ensuring a positive and lasting impression on hiring teams.
          </p>
        </div>
      </section>

      <section className="py-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="hover:shadow-2xl transition">
                <CardContent>
                  <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src="/path-to-project-image.jpg"
                      alt={project.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mt-4 inline-block"
                  >
                    Learn More
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Achievements
        </motion.h2>
        <ul className="list-disc list-inside mx-auto max-w-3xl">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              className="text-gray-700 mb-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {achievement}
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="py-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Educational Background
        </motion.h2>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            B.Tech in Information Technology - Rajkiya Engineering College Ambedkar Nagar (Graduation Year: 2024)
          </p>
          <p className="text-gray-700 mb-4">
            Proficient in various technologies including Python, Machine Learning, and Data Visualization tools such as Power BI and Tableau.
          </p>
          <div className="relative w-full h-48">
            <img
              src="/path-to-skill-graph.jpg"
              alt="Skill Graph"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <a
            href="mailto:saurabh@example.com"
            className="text-blue-500 underline inline-flex items-center gap-2"
          >
            <Mail size={20} /> saurabh@example.com
          </a>
          <p className="text-gray-700 mt-2">Mobile: 6388761029</p>
          <p className="text-gray-700 mt-2">Address: Kanpur, U.P 208019</p>
        </div>
      </section>

      <section className="py-8">
        <motion.h2
          className="text-3xl font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hire Me
        </motion.h2>
        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Looking for a skilled Data Scientist? Let's work together to create impactful solutions.
          </p>
          <a
            href="mailto:saurabh@example.com"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition inline-block"
          >
            Contact Me
          </a>
        </div>
      </section>

      <footer className="text-center py-8">
        <motion.a
          href="D:\Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Download Resume
        </motion.a>
        <p className="text-gray-600 mt-2">&copy; 2025 Saurabh Verma</p>
      </footer>
    </div>
  );
};

export default Portfolio;
