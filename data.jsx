
import HeroLight from "./images/hero-light.jpg";
import ProfilePic from "./images/profile-pic.jpg";

export { HeroLight as Light };
export { ProfilePic };

import SMUlogo from "./images/smu-logo.png";
export { SMUlogo };

import CJClogo from "./images/cjc-logo.png";
export { CJClogo };

import { FaHtml5, FaPython, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaGithub, FaDocker, FaFigma, FaLinkedin } from "react-icons/fa";
import { IoLogoVue, IoLogoJavascript, IoLogoYoutube } from "react-icons/io5";
import { SiPandas, SiScikitlearn, SiFlask } from "react-icons/si";

export { FaGithub as GithubIcon }
export { IoLogoYoutube as YoutubeIcon }
export { FaLinkedin as LinkedInIcon }

import dataMiningPic from "./images/dataMining-pic.png";
import wad2Pic from "./images/wad2-pic.png";
import esdPic from "./images/esd-pic.png";
import mlaPic from "./images/mla-pic.png";
import spmPic from "./images/spm-pic.png";


export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 size={40}/>,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt size={40}/>,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <IoLogoJavascript size={40} />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <IoLogoVue size={40}/>,
    name: "Vue.js",
  },
  {
    id: 5,
    skill: <FaReact size={40}/>,
    name: "React",
  },
  {
    id: 6,
    skill: <FaBootstrap size={40} />,
    name: "BootStrap",
  },
  {
    id: 7,
    skill: <FaPython size={40} />,
    name: "Python",
  },
  {
    id: 8,
    skill: <SiFlask size={40} />,
    name: "Flask",
  },
  {
    id: 9,
    skill: <SiPandas size={40} />,
    name: "Pandas",
  },
  {
    id: 10,
    skill: <SiScikitlearn size={40} />,
    name: "SciKit-Learn",
  },
];

export const toolsData = [
  {
    id: 1,
    tool: <FaGitAlt size={40} />,
    name: "Git",
  },
  {
    id: 2,
    tool: <FaGithub size={40} />,
    name: "GitHub",
  },
  {
    id: 3,
    tool: <FaDocker size={40} />,
    name: "Docker",
  },
  {
    id: 4,
    tool: <FaFigma size={40} />,
    name: "Figma",
  },
];


export const projectData = [
  {
    id: 1,
    name: "IS216 Web Application Development II Project",
    image: wad2Pic,
    description: "calendaREADY is a web application enables students to view events based on their personal preferences. It is a platform for students to easily sign up for events, and the event details will be added to their calendar. All other information from clubs will be categorised in the Events Page, which mitigates the challenges caused by the flood of event invitation emails.",
    skills: ["HTML", "CSS", "JavaScript", "Firebase", "Vue.js", "Bootstrap"],
    repo: "https://github.com/v1ghn35h/IS216-Web-Application-Develpment-II",
    youtubeLink: ""
  },
  {
    id: 2,
    name: "IS213 Enterprise Solution Development",
    image: esdPic,
    description: "GreenRibbon provides industries and companies a platform to sustainably distribute their office equipment to other companies that would benefit from it. This solution will reduce the waste being dumped in landfills by giving functional equipment a second lease of life. This is both a sustainable and cost-efficient means to reducing logistic waste in the industries.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "Flask", "MongoDB", "Docker", "RAbbitMQ", "Postman"],
    repo: "https://github.com/v1ghn35h/IS213-Enterprise-Solution-Development",
    youtubeLink: "https://youtu.be/ws9Hmhkjp0oa"
  },
  {
    id: 3,
    name: "IS424 Data Mining and Business Analytics",
    image: dataMiningPic,
    description: "Predicting Diabetes using Health Indicators - Diabetes is one of the most prevalent chronic diseases today. Just in 2017 alone, the IDF estimated that diabetes was responsible for four million deaths, with half of them occurring prematurely before the age of 60 on average. Therefore, this project aims to predict if a person has diabetes or not based on health indicators.",
    skills: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn", "Machine Learning"],
    repo: "https://github.com/v1ghn35h/IS424-Data-Mining-and-Business-Analytics",
    youtubeLink: ""
  },
  {
    id: 4,
    name: "IS460 Machine Learning and Applications",
    image: mlaPic,
    description: "Stress levels in Singapore remain significantly higher compared to the global average. There has been a rise of social media rage or otherwise called venting, especially during the COVID-19 pandemic. These ventings were done for attention or validation, emotional release, or due to the pressure for people to share their feelings. Therefore, this project aims to predict if a person is stressed based on their social media posts.",
    skills: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn", "Machine Learning"],
    repo: "https://github.com/v1ghn35h/IS460-Machine-Learning-and-Applications",
    youtubeLink: "",
  },
  {
    id: 5,
    name: "IS212 Software Project Management",
    image: spmPic,
    description: "SBRP is web-based application that serve as a platform to facilitate job postings within a company and ease of applications for employees according to skills matching and their career aspirations. It also provides a platform for employees to apply for internal job postings and for managers to post job openings. The application also provides a platform for managers to view the skills of their employees.",
    skills:  ["HTML", "CSS", "JavaScript", "Vue.js", "Vuetify", "Python", "Flask", "SQL", "Postman", "Agile Methodology (Scrum)"],
    repo: "https://github.com/v1ghn35h/IS212-Software-Project-Management",
    youtubeLink: "",
  },
]


export const introSocialsData = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vighnesh-ramasamy-34b400154/",
    icon: <FaLinkedin size={20}/>,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/v1ghn35h",
    icon: <FaGithub size={20}/>,
  },  
]
export const footerSocialsData = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vighnesh-ramasamy-34b400154/",
    icon: <FaLinkedin size={40} color="white"/>,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/v1ghn35h",
    icon: <FaGithub size={40} color="white" />,
  },  
]
