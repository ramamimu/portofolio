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
    Description: `As a Cloud Computing Learning Path student at Bangkit, I immersed myself in cloud technologies, gaining practical experience in building scalable solutions. Bangkit's Cloud Computing Learning Path transformed me. I am equipped with a solid foundation in cloud computing, enabling me to tackle complex challenges and contribute to the development of scalable and innovative solutions. I look forward to leveraging my skills and knowledge to make a positive impact in the cloud computing industry.

    As a mentor, I guided and supported aspiring mentees through their cloud computing journey. I provided technical assistance, shared industry insights, and helped mentees develop practical skills in cloud technologies. Witnessing their growth and success has been incredibly rewarding, and I am proud to have contributed to their learning experience.
    `,
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
