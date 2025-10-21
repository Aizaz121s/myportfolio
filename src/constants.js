// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
//import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
//import gsapLogo from './assets/tech_logo/gsap.png';
//import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
//import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
//import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
//import javaLogo from './assets/tech_logo/java.png';
//import pythonLogo from './assets/tech_logo/python.png';
//import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
//import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
//import netlifyLogo from './assets/tech_logo/netlify.png';
//import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
//import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import nielogo from './assets/company_logo/nielogo.jfif';

// Education Section Logo's
import questlogo from './assets/education_logo/questlogo.jpg';
import islamialogo from './assets/education_logo/islamialogo.jpeg';
import ibalogo from './assets/education_logo/ibalogo.png';

// Project Section Logo's
 import aiproject from './assets/work_logo/codereview.PNG';
 import voting from './assets/work_logo/voting.png';
 import urlshortner from './assets/work_logo/urlshortner.PNG';
 import trackor from './assets/work_logo/realtimetrackorapp.PNG';
 import reacttodo from './assets/work_logo/todo.PNG';
 import event from './assets/work_logo/event.png';
 import sensor from './assets/work_logo/sensor.png';
 import amazonclone from './assets/work_logo/amazonclone.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      //{ name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      //{ name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      //{ name: 'Java', logo: javaLogo },
      //{ name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      //{ name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      //{ name: 'Compass', logo: mcLogo },
      //{ name: 'Vercel', logo: vercelLogo },
      //{ name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: nielogo,
      role: "Backend Developer",
      company: "National Institude Of Electronics, Islamabad",
      date: "Jun 2024 - Jul 2024",
      desc: "Developed a backend system in JavaScript to receive sensor data via serial port, process and transform the data according to sensor readings for internal monitoring tools. Improved understanding of handling hardware data streams with backend integration and real-time data processing.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: questlogo,
      school: "Quaid-e-Awam University, Nawabshah",
      date: "Dec 2021 - Aug 2025",
      grade: "3.64 CGPA",
      desc: "I have completed my Bachelor's degree (B.E) in Software Engineering from Quaid e Awam University, Nawabshah. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at QUEST allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor's of Software Engineering - B.E (Software Engineering)",
    },
    {
      id: 1,
      img: islamialogo,
      school: "Islamia Science College Sukkur",
      date: "April 2019 - Jun 2021",
      grade: "96.4%",
      desc: "I completed my class 12 education from Govt Islamia Science College Sukkur, under the BISE Sukkur board, where I studied Physics, Chemistry, and Mathematics.",
      degree: "BISE SUKKUR(XII) - Pre_Engineering",
    },
    {
      id: 2,
      img: ibalogo,
      school: "IBA Public School, Sukkur",
      date: "Apr 2017 - March 2019",
      grade: "65%",
      desc: "I completed my class 10 education from IBA Public School Sukkur, under the Agha Khan board, where I studied Science with Computer.",
      degree: "Agha Khan Board Karachi(X), Science with Computer",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Code Reviewer (MERN Stack)",
      description:
        "A full-stack application built with MongoDB, Express, React, and Node.js that automates the code review process. It integrates a powerful AI model to instantly scan code, detect bugs, flag security issues, and automatically generate JSDoc documentation and suggested fixes, dramatically improving code quality and development efficiency.",
      image: aiproject,
      tags: ["HTML", "CSS", "JavaScript", "React JS","MERN","Node.js","MongoDB","Express.js", "API"],
      github: "https://github.com/Aizaz121s/CodeReviewer-AI",
      webapp: "",
    },
    {
      id: 1,
      title: " Decentralized Voting System (Blockchain, Node.js,MongoDB)",
      description:
        "Final Year Project developing a decentralized voting system using blockchain technology, where Idesigned and implemented the backend server using Node.js with MongoDB integration for handling secure votetransactions, user authentication, and blockchain data management.",
      image: voting,
      tags: ["HTML", "CSS","blockchain","Etherium","META WALLET", "JavaScript", "React JS","MERN","Node.js","MongoDB","Express.js", "API"],
      github: "https://github.com/abdulbaqi02/Blockchain-Based-Voting-System",
      webapp: "",
    },
    {
      id: 2,
      title: "URL Shortener (Node.js, MongoDB)",
      description:
        "Developed a backend service to shorten URLs with unique codes, redirection logic, and tracking using Node.js, Express.js, and MongoDB.",
      image: urlshortner,
      tags: ["HTML", "CSS", "JavaScript", "React JS","MERN","Node.js","MongoDB","Express.js", "API"],
      github: "https://github.com/Aizaz121s/UrlShortener",
      webapp: "",
    },
    {
      id: 3,
      title: "Real Time Tracker App (Node.js, Express.js ,MongoDB, Socket.io)",
      description:
        "Developed a real-time tracker app using Node.js, Express, MongoDB, and Socket.io, enabling live data synchronization and updates. Implemented scalable APIs, real-time communication, and secure data handling for multiple users.",
      image: trackor,
      tags: ["HTML", "CSS", "JavaScript","Socket.IO", "React JS","MERN","Node.js","MongoDB","Express.js", "API"],
      github: "https://github.com/Aizaz121s/Real-Time-Tracker-App",
      webapp: "https://real-time-tracker-app-production.up.railway.app/",
    },
    {
      id: 4,
      title: "React Todo List (React, Tailwind CSS):",
      description:
        "Developed a todo list application with React and Tailwind CSS, utilizing localstorage for data persistence. Implemented reusable components, state management, and a responsive UI to manage tasks effectively.",
      image: reacttodo,
      tags: ["HTML", "CSS", "JavaScript", "React JS","MERN","Node.js","MongoDB","Express.js", "API"],
      github: "https://github.com/Aizaz121s/Todo-List",
      webapp: "https://aizaz121s.github.io/Todo-List/",
    },
    {
      id: 5,
      title: "Event Registration Form (Node.js, MongoDB)",
      description:
        "Created a backend for event registration, handling user input validation, data storage using MongoDB, and confirmation responses with Node.js and Express.js",
      image: event,
      tags: ["HTML", "CSS", "JavaScript", "React JS","MERN","Node.js","MongoDB","Express.js", "API"],
      github: "https://github.com/Aizaz121s/EventRegistration",
      webapp: "",
    },
    {
      id: 6,
      title: " Sensor Data Processing System (JavaScript)",
      description:
        "Designed and implemented a system to receive data from sensors via serial port, process and transform the data according to sensor values, enabling real-time monitoring and structured storage for analysis",
      image: sensor,
      tags: ["HTML", "CSS", "JavaScript", "React JS","MERN","Node.js","MongoDB","Express.js", "API"],
      github: "https://github.com/Aizaz121s/Sensor-Data-Processing-System",
      webapp: "",
    },
    {
      id: 7,
      title: "Amazon Clone (HTML, CSS)",
      description:
        "This project is a static, pixel-perfect replication of the core visual design and layout of the Amazon e-commerce platform. Built exclusively with HTML5 and CSS3, the project demonstrates proficiency in structuring complex web layouts and executing high-fidelity styling without reliance on backend logic or advanced JavaScript frameworks.",
      image: amazonclone,
      tags: ["HTML", "CSS", "JavaScript", "React JS","MERN","Node.js","MongoDB","Express.js", "API"],
      github: "https://github.com/Aizaz121s/Amazon-Clone",
      webapp: "",
    },

  ];  