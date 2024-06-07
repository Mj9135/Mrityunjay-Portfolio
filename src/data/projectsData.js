import code from "../assets/png/Project/code.png";
import resume from "../assets/png/Project/resume.png";
import r2048 from "../assets/png/Project/2048.png";
export const projectsData = [
  {
    id: 1,
    projectName: "Byte Builder",
    projectDesc:
      "An intuitive online code editor allowing seamless execution and testing of code across various programming languages.",
    tags: ["React.JS", "Tailwind", "Monaco-Editor"],
    code: "https://github.com/Mj9135/Byte_Builders/",
    demo: "https://byte-builder.netlify.app",
    image: code,
  },
  {
    id: 2,
    projectName: "Resume Wizard",
    projectDesc:
      "A user-friendly tool for creating professional resumes quickly with customizable templates, easy editing, and PDF export.",
    tags: ["HTML", "CSS", "Javascript"],
    code: "https://github.com/Mj9135/Resume-Builder",
    demo: "https://resume-wizard-mj.netlify.app/",
    image: resume,
  },
  {
    id: 3,
    projectName: "2048 Game",
    projectDesc:
      "A fun and addictive puzzle game where players combine tiles to reach the 2048 tile. Simple yet challenging!",
    tags: ["HTML", "CSS", "Javascript"],
    code: "https://github.com/Mj9135/2048-Game",
    demo: "https://2048-mj.netlify.app/",
    image: r2048,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/