import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaJava,
} from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Data Structures and Algorithms",
    icon: FaHashnode,
  },
  {
    interest: "Block Chain",
    icon: FcElectronics,
  },
  {
    interest: "Data Science & Machine Learning",
    icon: GiArchiveResearch,
  },
  {
    interest: "Cloud",
    icon: BsFileBarGraph,
  },
  {
    interest: "Linux",
    icon: AiFillCode,
  },
  {
    interest: "Tech Blog",
    icon: BsRobot,
  },
  {
    interest: "Web Development",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },

  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "C/C++/C#",
    icon: TbBrandCpp,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "PugJs",
    icon: SiPug,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Markdown",
    icon: BsMarkdown,
  },
];

export const workData = [
  {
    company: "Acuity KNowledge Partners",
    designation: "Software Engineer 1",
    duration: "May 2023 - Present",
    companyImg: "1ds.png",
    description: (
      <>
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>UI Magic Makeover: </span>
            Worked my code wizardry with React and .NET to give our fintech Web
            app a glam makeover. It&apos not just finance; it&apos fintech with
            style and pizzazz!
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Speedy Gonzalez Coding: </span>
            Infused some turbocharged energy into the code, making our fintech
            Web app faster than a caffeinated cheetah. Thanks to React and .NET,
            it&apos not just finance – it&apos a high-speed financial
            rollercoaster! 🚀
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Cognizant",
    designation: "Full Stack Java Engineer",
    duration: "Jan 2022 - May 2023",
    companyImg: "fmr.png",
    description: (
      <>
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>
              Java Jazz for Cigna&apos Wellness Wonderland:
            </span>{" "}
            Danced through Java wonders to jazz up Cigna&apos health Web app,
            turning it into a sleek wellness experience. It&apos not just
            health; it&apos a Java-powered wellness groove!
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>
              Java Turbocharge for Health Hustle:
            </span>
            Infused Java energy into the code, making our health Web app zoom
            like a sports car. Thanks to Java, it&apos not just health; it&apos
            a turbocharged health adventure! 🏎️💨
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Magnet",
    image: "movie-magnet",
    link: "https://movie-magnet-smoky.vercel.app/",
    source: "https://github.com/VidurAgarwal25/MovieTracker",
  },
  {
    type: "WEB-APP",
    title: "Music App",
    image: "Music-App",
    link: "https://beatboxx.vercel.app/",
    source: "https://github.com/VidurAgarwal25/Music-App",
  },
  {
    type: "WEB-APP",
    title: "MI Store Clone",
    image: "MI-Clone",
    link: "https://mi-store-clone-reactjs.netlify.app/",
    source: "https://github.com/VidurAgarwal25/mi-store-clone",
  },
  {
    type: "WEB-APP",
    title: "Chat App",
    image: "Chat-App",
    link: "https://web-chat-app-brown.vercel.app/",
    source: "https://github.com/VidurAgarwal25/Chat-App",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "Portfolio",
    link: null,
    source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
  },
  {
    type: "WEB-APP",
    title: "To Do App",
    image: "To-Do",
    link: "https://react-cool-todo-app.netlify.app/",
    source: "https://github.com/VidurAgarwal25/To-Do-App",
  },
  {
    type: "WEB-APP",
    title: "Hotel Booking",
    image: "Hotel-Booking",
    link: "https://hotel-paradise.github.io/",
    source: "https://github.com/VidurAgarwal25/Hotel-Booking",
  },
  {
    type: "PROJECT",
    title: "Hangman",
    image: "Hangman",
    link: "https://hangman-game-vanillajs.netlify.app/",
    source: "https://github.com/VidurAgarwal25/Hangman-Game",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "Weather-App",
    link: "https://simple-weather-website.netlify.app/",
    source: "https://github.com/VidurAgarwal25/Weather-App",
  },
];

export const socialMediaLinks = [
  {
    href: "https://github.com/VidurAgarwal25",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.linkedin.com/in/vidur-agarwal/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
