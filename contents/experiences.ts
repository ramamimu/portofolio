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
      "Golang",
      "Django",
      "Cloud Task",
      "Cloud Run",
      "Docker",
      "gRPC",
    ],
    Description: `Create and Maintenance features in two teams + 1 project:

1. Visamane: Visa and work hours Management based in Japan which manages companies employee. The system use Django.
•) Create and maintenance features.
•) Integrate with Raku-Raku platform, one of the big five platforms in Japan.
•) Create Pricing Plan V4 feature.
•) OCR integration for autofilled expiration inquiry automation.

2. PMS: Property Management System which works in hospitality. Market mostly in Singapore, Japan and Indonesia. The system use Golang.
•) Create and maintenance features.
•) Create 15++ email templates to send to Host with various triggers (scheduler, webhook, ext).
•) Create a scalable Notification and Email Setting feature with clean architecture principle The content is send through gRPC.
•) Enhance performance API in Notification from 1-3s to +-200ms.
•) Integrate realtime mobile notification with Firebase Cloud Messaging (FCM),
•) Create Email Automation feature with Cloud Task.

3. Smart Reply Chatbot (AI) for host assistant to give relevant information toward guest's question, including integrations of Amenities information, Guest service, and Property availability.`,
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
    technologies: ["Python", "Next", "Google Sheets API", "Golang"],
    Description: `Part of 32 interns at GoTo, selected over 7600++ applicants under Kampus Merdeka program batch 5 from ministry of education Indonesia

I was placed on Gojek, being part of Transport Team. Here is the details of some breakdown tasks i did:

•) Weekly Tracker Automation
Managing KPI metrics data from 15++ teams at Transport and Driver platform then manage and visualize these via Spreadsheet using Sheets API v4

•) FBON service
Inject middleware to get order number and request ID through Golang-context

•) Web Concierge
Create OTP component in front end Web Concierge dashboard`,
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
    technologies: [
      "Google Cloud Platform",
      "Docker",
      "Cloud Run",
      "Cloud Build",
      "Kubernetes",
    ],
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
        id: "programming-division",
        duration: "May 2021 - June 2023",
        title: "Programming Division",
      },
    ],
    technologies: [
      "Vue.js",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Socket.IO",
      "C++",
      "Robot Operating System (ROS)",
    ],
    Description: `Responsible for connecting and communicating as data stream between robot-soccers and referee box ( software as a referee during the matches ). The software is web based and use node.js / C++ as the back-end and Vue.js as the front-end framework. The software must meet certain requirements such as real-time animation and communication, as well as being stable and robust.`,
  },
];
