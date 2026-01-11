import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "imc-pas-web",
    title: "IMC PAS Web (Monitoring Telecommunication Management System)",
    company: {
      associated: "PT Pasopati Nusantara",
      logo: "/images/companies/pasopati.jpeg",
    },
    description: `A redesigned website for State Detention Centers (RUTAN) under the Directorate General of Corrections (Ditjen PAS), Ministry of Law and Human Rights, managed by PT Pasopati Nusantara.

The platform features two versions with multiple user roles, providing a modern and efficient management system. Key features include: Dashboard for data monitoring and insights, Simultaneous bulk download with non-blocking performance, user management, transaction tracking and financial history tables (including top-ups, deposits, and financial reports)    
    `,
    documentations: {
      image: {
        link: "/images/projects/imcpas.png",
        title: "IMC PAS Web Login Page",
      },
      links: [],
    },
    tools: [
      "Vue.js",
      "Nuxt.js",
      "Pinia",
      "Tailwind CSS",
      "Python",
      "Golang",
      "RabbitMQ",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    id: "middleware-integration",
    title: "Middleware Integration for Telecommunication Systems",
    company: {
      associated: "PT Pasopati Nusantara",
      logo: "/images/companies/pasopati.jpeg",
    },
    tools: ["Golang", "Docker", "Cloud Run", "Cloud Build"],
    documentations: {
      image: {
        link: "/images/projects/middleware-integration.png",
        title: "Middleware Integration Daily Request",
      },
      links: [],
    },
    description: `We developed a middleware platform that automates transaction processing across multiple data sources—Firebase (used by Android applications) and MySQL (used by A2Billing)—into a single, authoritative MySQL system.

This middleware eliminates the need for manual data migration between Firebase and MySQL. All transaction data is synchronized and normalized in real time, ensuring consistency, accuracy, and reliability across systems.

The platform operates at production scale, handling >80k requests per day, more than 45k++ telephone calls per month, and supporting over 10k++ active users. This demonstrates its ability to run reliably under real-world, high-traffic conditions.

By unifying these previously disconnected databases, the system enables:
- Real-time transaction synchronization between mobile apps and billing systems
- A single source of truth for financial and customer data
- Reduced human error caused by manual data entry
- Significantly improved operational efficiency for employees

The result is a streamlined transaction workflow that allows teams to focus on higher-value work instead of repetitive data migration and reconciliation.`,
  },
  {
    id: "chatbot-rag",
    title: "Chatbot Using Retrieval-Augmented Generation (RAG)",
    company: {
      associated: "ITS Surabaya",
      logo: "/images/companies/its-surabaya.png",
    },
    tools: [
      "Python",
      "Langchain",
      "FastApi",
      "Huggingface",
      "Multilingual E5 Small - Sentence Transformer Model",
      "GPT3.5 Turbo - Text Generation Model",
      "FAISS",
      "Alembic - Database Migration",
      "Docker",
    ],
    documentations: {
      image: {
        link: "/images/projects/chatbot-api.png",
        title: "Chatbot API service",
      },
      links: [
        {
          name: "github",
          link: "https://github.com/ramamimu/chatbot-api",
        },
        {
          name: "demo",
          link: "https://www.linkedin.com/posts/ahmad-ferdiansyah-ramadhani_usercentereddesign-chatbotdevelopment-uiuxdesign-activity-7226098590736117760-xdq8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTX4BMBZj78V4xqB5uEOcBcvAfISOSIFRc",
        },
      ],
    },
    description: `A chatbot that can answer questions from documents. Once the question is thrown to the chatbot, it will see through documents as reference and answer all of question based on it.

The chatbot is able to use document (PDF) or text as reference for answering incoming question. The method called RAG (Retrieval-Augmented Generation) which consist of three processing: 
1. Indexing - Split, embed, and put the text into vector database (Vectorstore); 
2. Retrieval: Get the particular contents from chunks (some part of splitted relevant document) from Vectorstore; 
3. Generation: Process the retrieval to be human-readable language as answer of the question. 
For seamless communication, i put all of the process to be Back End Service using Fast API.`,
  },
  {
    id: "bangkit-capstone",
    title: "Recommendation Places App in Yogyakarta",
    company: {
      associated: "Project Capstone Bangkit",
      logo: "/images/companies/bangkit.png",
    },
    tools: [
      "Node.js",
      "NestJS",
      "Typescript",
      "Redis",
      "MySQL",
      "docker",
      "Google Cloud Platform",
      "Cloud Build",
      "Cloud Run",
    ],
    documentations: {
      image: {
        link: "/images/projects/capstone.png",
        title: "Cloud Architecture",
      },
      links: [
        {
          name: "github main server",
          link: "https://github.com/ramamimu/bangkit-server-main",
        },
        {
          name: "github SQL server",
          link: "https://github.com/ramamimu/bangkit-server-sql",
        },
      ],
    },
    description: `contributed to the development of a recommendation system for hangout places in Yogyakarta, focusing on bars, cafes, and restaurants. The project involved three main areas: machine learning, Android app development, and cloud integration.

Designing the cloud architecture, which included two integrated microservices deployed on Cloud Run. The main server, built with Node.js, served as the central communication gateway for the Android app, handling authentication and data exchange. The second server, an SQL server built with NestJS and typescript, implemented caching with redis to optimize performance by storing logical results from the Google Maps API. We also established a connection pool to MySQL for efficient data retrieval.
    `,
  },
  {
    id: "pjb-pln-web",
    title: "Monitoring and Controlling Turbines Website",
    company: {
      associated: "PLN Nusantara Power",
      logo: "/images/companies/pln.png",
    },
    tools: [
      "Vue.js",
      "Tailwind CSS",
      "Apexchart",
      "Docker",
      "Node.js",
      "Express session",
      "Typescript",
      "MySQL",
    ],
    documentations: {
      image: {
        link: "/images/projects/pjb-pln.png",
        title: "controlling turbine page",
      },
      links: [],
    },
    description: `build an integrated monitoring system to manage turbines configurations (20+) and monitor the status in almost realtime. Responsible to create UI and BE using Vue and Express.`,
  },
  {
    id: "basestation-iris",
    title: "Basestation IRIS",
    company: {
      associated: "IRIS ITS",
      logo: "/images/companies/iris-its.png",
    },
    tools: [
      "Vue.js",
      "Tailwind CSS",
      "Pinia",
      "Vue Konva (Canvas)",
      "Node.js",
      "Socket.IO",
      "Roslib.js",
      "Web Socket",
      "Robot Operating System (ROS)",
      "boost c++ library",
      "Vuex",
      "Vuetify",
      "UDP",
      "TCP",
    ],
    documentations: {
      image: {
        link: "/images/projects/bs-2023.png",
        title: "UI Basestation 2023",
      },
      links: [
        {
          name: "github front-end",
          link: "https://github.com/ramamimu/fe-basestation_2023",
        },
        {
          name: "Demo",
          link: "https://www.linkedin.com/posts/ahmad-ferdiansyah-ramadhani_vuejs-activity-6958097936173973504-A17f?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    description: `Managing and monitoring autonomous robotic competitions on via realtime web based platform.

A basestation software platform designed to manage, monitor, and control autonomous robotic competitions for the KRI (Indonesia Robotic Contest) and RoboSoccer Middle Size League.

The product provides a real-time visualization and control interface built with Vue.js, featuring canvas-based field rendering, live robot state updates, and responsive UI design. It supports seamless switching between Node.js and ROS environments, enabling flexible integration with different robotic systems.

On the backend, the system processes high-frequency data streams from multiple robots, aggregates them into global state data, and redistributes this information in real time to both robots and the front-end interface. Communication is optimized using UDP multicast, UDP unicast, and TCP protocols, with buffering and binary encoding to comply with strict bandwidth limitations.

The platform also integrates directly with the referee box, handling match commands and signals and synchronizing them across robots and the visualization layer to ensure accurate, rule-compliant match execution.

This basestation has been validated in national and international robotic competitions, demonstrating stability, real-time performance, and compliance with competition standards.
    `,
  },
  {
    id: "iris-web-2022",
    title: "Website IRIS 2022",
    company: {
      associated: "IRIS ITS",
      logo: "/images/companies/iris-its.png",
    },
    tools: ["React.js", "Next.js", "Tailwind CSS", "Headless UI"],
    documentations: {
      image: {
        link: "/images/projects/iris-web.png",
        title: "IRIS Website 2022",
      },
      links: [
        {
          name: "IRIS website",
          link: "https://frontend-website-iris.vercel.app/",
        },
      ],
    },
    description: `Redesign and develop the official website of IRIS ITS using React.js and Next.js with Tailwind CSS for styling. The website serves as a platform to showcase the team's achievements, projects, and provide information about upcoming events and competitions.`,
  },
  {
    id: "tedx-its-2022",
    title: "Front-end TedxITS 2022",
    company: {
      associated: "ITS Surabaya",
      logo: "/images/companies/its-surabaya.png",
    },
    tools: ["React.js", "Next.js", "Typescript", "Tailwind CSS", "Headless UI"],
    documentations: {
      image: {
        link: "/images/projects/tedx-its.png",
        title: "Landing Page TedxITS 2022",
      },
      links: [],
    },
    description: `Develop the front-end of the TedxITS 2022 landing page using React.js and Next.js with Typescript for type safety. The website features a modern and responsive design, providing information about the event, speakers, schedule, and ticketing details to enhance user engagement and experience.`,
  },
];
