import {
    mobile,     backend,     creator,
    web,        javascript,  html,       
    css,        reactjs,     redux,
    tailwind,   nodejs,      mongodb,    
    git,        docker,      carrent,
    jobit,      tripguide,  threejs,
    vidyamantra,express,    URLS,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MongoDB",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "ExpressJS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Front-end Developer",
      company_name: "Vidyamantra",
      icon: vidyamantra,
      iconBg: "#383E56",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Developing and maintaining web applications using Vue.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Live-chat App",
      description:
        "Web application that enables users to chat with other users in realtime environment.",
      tags: [
        {
          name: "node, express",
          color: "blue-text-gradient",
        },
        {
          name: "restapi, mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/V2K4Y/LiveChat---App",
    },
    {
      name: "URL Shortener",
      description:
        "It shorten the long URl by giving you shortID through which you can visit to your original site. Every user will have their own record.",
      tags: [
        {
          name: "NodesJS",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: URLS,
      source_code_link: "https://github.com/V2K4Y/URL_Shortener",
    },
    {
      name: "Personal Portfolio",
      description:
        "Dynamic portfolio website incorporating interactive 3D models using Three.js for enhanced visual engagement.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/V2K4Y/Portfolio",
    },
    {
      name: "E-commerce Website",
      description:
        "Web-based platform that allows users to see products and buy it by adding it to cart and move to payment section.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/V2K4Y/E-commerce-WebSite",
    },
    {
      name: "Data Analysis - (EDA)",
      description:
        "Exploratory data analysis on clients data to provide most selling product categories which can help to plan inventory and hence meet the demands.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Seaborn",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/V2K4Y/PythonDataAnalysis",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };