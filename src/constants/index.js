import {
    mobile,     backend,     creator,
    web,        javascript,  html,       
    css,        reactjs,     redux,
    tailwind,   nodejs,      mongodb,    
    git,        docker,      carrent,
    jobit,      tripguide,  vidyamantra,
    express,    URLS,       portfolio,
    weather,    avataarskincare,
    mysql,      nextjs,     nestjs,
    paytm
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
      title: "Software Developer",
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
      title: "SQL / NoSQL Databases",
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
      name: "Next JS",
      icon: nextjs,
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
      name: "Nest JS",
      icon: nestjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Git & Github",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Avataar Skincare",
      icon: avataarskincare,
      iconBg: "#FFFFFF",
      date: "Jul 2024 - Nov 2024",
      points: [
        "Contributed to Avataar Skincare’s digital ecosystem, developing front-end and back-end of the portals and dashboards to enhance user engagement and streamline internal operations.",
        "Contributed and Optimized MySQL databases queries and API integrations using Node.js, Express.js, and Nest.js, boosting data processing speed by 20%.",
        "Engineered a comprehensive dashboard system for real-time monitoring client and therapist activity monitoring, improving booking management efficiency for internal operations by 30% and enabling data driven decisions for faster customer service.",
        " Successfully developed dynamic booking slot logic, enhancing session planning and boosting appointment efficiency by 25% based on therapist expertise, machine availability, and client preference management.",
      ],
    },
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
        "Real-time web application enabling seamless user-to-user communication through an interactive chat platform.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "WebSocket",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/V2K4Y/LiveChat---App",
    },
    {
      name: "URL Shortener",
      description:
        "Designed a URL shortening application that generates unique IDs for accessing original links, with individual user records for tracking.",
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
      name: "PayTM wallet service",
      description:
        "Application enables users to seamlessly transfer funds between wallets and add money to their wallet directly from their bank accounts.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: paytm,
      source_code_link: "https://github.com/V2K4Y/Paytm-project",
    },
    {
      name: "Personal Portfolio",
      description:
        "Dynamic portfolio website incorporating interactive 3D models using Three.js for enhanced visual engagement.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/V2K4Y/Portfolio",
    },
    {
      name: "Dukaan UI",
      description:
        "Users can list products, manage inventory, accept payments, and track orders through the platform.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/V2K4Y/Dukaan_UI_Clone",
    },
    {
      name: "WeatherAPI",
      description:
        "A weather web-page design, fetching weather data from third party (openweathermap) API",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Axios",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/V2K4Y/WeatherAPI",
    },
    // {
    //   name: "Data Analysis - (EDA)",
    //   description:
    //     "Exploratory data analysis on clients data to provide most selling product categories which can help to plan inventory and hence meet the demands.",
    //   tags: [
    //     {
    //       name: "Python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Pandas",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Seaborn",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/V2K4Y/PythonDataAnalysis",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };