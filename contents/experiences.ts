import type { Experience } from "@/types/experiences";

export const experiences: Experience[] = [
  {
    id: "deltahq",
    image: "/images/companies/deltahq.png",
    link: "https://deltahq.io",
    company: "Delta HQ",
    milestones: [
      {
        id: "backend-engineer",
        duration: "Oct 2024 - Present",
        title: "Backend Engineer",
      },
    ],
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Pinia",
      "Tailwind CSS",
      "GSAP",
      "Docker",
      "AWS",
    ],
    Description: `Contributed to the development of Delta HQ's core product, a comprehensive platform for managing decentralized autonomous organizations (DAOs). Focused on creating intuitive user interfaces and seamless user experiences to empower communities in governance and decision-making processes.`,
  },
  {
    id: "gojek",
    image: "/images/companies/gojek.png",
    link: "https://www.gojek.com",
    company: "Gojek",
    milestones: [
      {
        id: "Software Engineer Intern",
        duration: "Aug 2023 - Oct 2024",
        title: "Software Engineer Intern",
      },
    ],
    technologies: ["Go"],
    Description: `Developed and optimized microservices for Gojek's payment platform, enhancing transaction processing speed and reliability. Collaborated with cross-functional teams to implement new features that improved user experience for millions of customers across Southeast Asia.`,
  },
  {
    id: "bangkit",
    company: "Bangkit Academy by Google, Gojek, and Tokopedia",
    image: "/images/companies/bangkit.png",
    link: "https://bangkit.academy",
    milestones: [
      {
        id: "cloud-computing-mentor",
        duration: "Feb 2024 - July 2024",
        title: "Cloud Computing Mentor",
      },
      {
        id: "cloud-computing-cohort",
        duration: "Feb 2023 - July 2023",
        title: "Cloud Computing Cohort",
      },
    ],
    technologies: ["Google Cloud Platform", "Kubernetes"],
    Description: `Completed an intensive program focused on cloud computing, gaining hands-on experience with Google Cloud Platform services. Developed skills in deploying and managing applications in cloud environments, with a strong emphasis on scalability, security, and cost optimization.`,
  },
  {
    id: "iris",
    image: "/images/companies/iris-its.png",
    link: "https://iris.its.ac.id",
    company: "IRIS ITS",
    milestones: [
      {
        id: "research-assistant",
        duration: "May 2021 - June 2023",
        title: "Software Engineer",
      },
    ],
    technologies: [
      "Vue.js",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Socket.IO",
      "Robot Operating System (ROS)",
    ],
    Description: `Contributed to various projects at the IRIS Laboratory, focusing on web-based interfaces for robotic systems. Developed real-time monitoring and control applications that facilitated human-robot interaction, enhancing the usability and functionality of autonomous systems.`,
  },
];
