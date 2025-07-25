import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiMui,
  SiVercel,
  SiFlask,
  SiSpringboot,
  SiSupabase,
  SiRender,
} from "react-icons/si";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";

export const techStacks = [
  { icon: <FaHtml5 size={40} className="text-orange-500" />, language: "HTML" },
  { icon: <FaCss3Alt size={40} className="text-blue-500" />, language: "CSS" },
  {
    icon: <FaJs size={40} className="text-yellow-400" />,
    language: "JavaScript",
  },
  { icon: <FaReact size={40} className="text-blue-400" />, language: "React" },
  { icon: <img src="/Vite.svg" className="w-8 h-8" />, language: "Vite" },
  {
    icon: <SiNextdotjs size={40} className="text-black-500" />,
    language: "Next",
  },
  { icon: <SiMui size={40} className="text-sky-500" />, language: "MUI" },
  {
    icon: <SiTailwindcss size={40} className="text-blue-400" />,
    language: "Tailwind",
  },
  {
    icon: <SiSpringboot size={40} className="text-emerald-500" />,
    language: "SpringBoot",
  },
  {
    icon: <img src="/SQL.svg" alt="SQL" className="w-7 h-10" />,
    language: "SQL",
  },
  {
    icon: <SiSupabase size={40} className="text-emerald-300" />,
    language: "Supabase",
  },
  {
    icon: <SiFirebase size={40} className="text-orange-400" />,
    language: "Firebase",
  },
  { icon: <img src="/Python.svg" className="w-10 h-10" />, language: "Python" },
  { icon: <SiFlask size={40} className="text-blue-500" />, language: "Flask" },
  {
    icon: <img src="/Pandas.svg" alt="Pandas" className="w-10 h-10" />,
    language: "Pandas",
  },
  {
    icon: <img src="/NumPy.svg" alt="NumPy" className="w-10 h-10" />,
    language: "NumPy",
  },
  {
    icon: <img src="/Sklearn.svg" alt="Scikit-Learn" className="w-16 h-10" />,
    language: "Scikit-Learn",
  },
  {
    icon: (
      <img src="/HuggingFace.svg" alt="Hugging Face" className="w-10 h-10" />
    ),
    language: "Hugging Face",
  },
  { icon: <SiVercel size={40} className="text-black" />, language: "Vercel" },
  { icon: <SiRender size={40} className="text-black" />, language: "Render" },
  {
    icon: <PiMicrosoftExcelLogoBold size={40} className="text-green-600" />,
    language: "Excel",
  },
  {
    icon: <img src="/PowerBi.svg" alt="Power BI" className="w-10 h-10" />,
    language: "Power BI",
  },
];
