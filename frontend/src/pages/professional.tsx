import { FaReact, FaNodeJs, FaPython, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiGoogleanalytics,
  SiDbeaver,
  SiPostgresql,
  SiGooglecolab,
  SiMysql,
  SiTableau,
  SiGooglebigquery,
} from "react-icons/si";
import { motion } from "framer-motion";

const techStacks = [
  { name: "Python", icon: <FaPython className="text-blue-500 text-3xl" /> },
  {
    name: "Looker Studio",
    icon: <SiGoogleanalytics className="text-red-500 text-3xl" />,
  },
  { name: "DBeaver", icon: <SiDbeaver className="text-blue-400 text-3xl" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500 text-3xl" />,
  },
  {
    name: "Google Colab",
    icon: <SiGooglecolab className="text-orange-400 text-3xl" />,
  },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
  },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" /> },
  {
    name: "Tableau",
    icon: <SiTableau className="text-blue-600 text-3xl" />,
  },
  {
    name: "Google BigQuery",
    icon: <SiGooglebigquery className="text-blue-500 text-3xl" />,
  },
];

const InfiniteScroll = () => {
  return (
    <div className="bg-[var(--base-color)] p-4 rounded-xl shadow-md text-white max-w-[22rem] mx-auto mt-6 overflow-hidden flex flex-col items-center text-center">
      <h2 className="text-lg font-semibold text-center mb-3 w-full">
        Tech Stacks I'm Familian With
      </h2>
      <div className="relative w-full overflow-hidden flex flex-col items-center">
        {[0, 1].map((row) => (
          <motion.div
            key={row}
            className="flex space-x-4 mb-3"
            animate={{
              x: row === 0 ? [0, -1000] : [0, 1000],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 60,
            }}
            style={{ display: "flex", flexWrap: "nowrap" }}
          >
            {Array(100)
              .fill([...techStacks])
              .flat()
              .map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[80px]"
                >
                  {tech.icon}
                  <span className="text-xs mt-1">{tech.name}</span>
                </div>
              ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
