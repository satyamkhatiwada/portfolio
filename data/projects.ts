// data/projects.ts
export type personalProjectType = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tech: string[];
}[];


export const getDynamicUpdatedDate = (): string => {
  const date = new Date();
  // Logic: Current date minus 5 days
  const dayOfWeek = date.getDay();

  date.setDate(date.getDate() - (dayOfWeek + 5));  

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};



export const personalProjects: personalProjectType = [
  {
    href: "https://www.fablefintech.com/",
    imageSrc: `/remittance.jpg`,
    imageAlt: "Global Remittance System 🌍",
    title: "Global Remittance System 🌍",
    description:
      "Reverse-engineered an undocumented remittance system to establish complete functional and technical documentation. Defined requirements, mapped APIs and JSP workflows, and executed AI powered automated and performance testing to validate end-to-end functionality.",
    tech: ["Document Preparation", "Client Communication", "Project Management", "Power Automate", "SQL", "Postman", "Excel"],
  },
  {
    href: "https://www.siriusapp.co.uk/apps/siriuspayroll365-hmrc-payroll-software-uk/",
    imageSrc: `/payroll.png`,
    imageAlt: "Payroll System 🇬🇧💷",
    title: "UK (HMRC) Payroll System 🇬🇧💷",
    description:
      "QA expertise and automated scripts to ensure compliance with uk rules through integration tests.",
    tech: ["Business Central", "Excel", "AI-Powered Testing", "HMRC Compliance", "API Testing", "Automation", "UAT", ".NET"],
  },
  {
    href: "https://www.microsoft.com/en-us/dynamics-365/solutions/crm",
    imageSrc: `/crm.png`,
    imageAlt: "D365 CRM System 🧑‍💼",
    title: "D365 CRM System 🧑‍💼",
    description:
      "Handled end-to-end client requirements, performed risk analysis, data migration/testing, and resolved system-level issues. Maintained consistent client communication to ensure successful delivery and alignment with business objectives.",
    tech: ["Product Testing", "Usability Testing", "Data Migration Testing"],
  },
  {
    href: "",
    imageSrc: `/field_service.jpg`,
    imageAlt: "D365 Field Service System 🚚",
    title: "D365 Field Service System 🚚",
    description:
      "Performed QA and validation of the D365 Field Service system based on client requirements. Tested workflows, scheduling, and reporting features, ensuring seamless functionality across mobile and web platforms.",
    tech: ["Usability Testing", "Mobile App Testing", "Workflow Validation"],
  },
  {
    href: "https://github.com/satyamkhatiwada/Restaurant-Management-System-for-Enthrone-Cafe",
    imageSrc: `/enthrone.png`,
    imageAlt: "Restaurant Management System 🍽️",
    title: "Restaurant Management System 🍽️",
    description:
      "A web app that streamlined bookings, online ordering with secure e-payments, improving service efficiency. Integrated inventory management to optimize stock levels and reduce waste.",
    tech: [
      "HTML/CSS","Laravel","PHP","MySQL","Git", "Trello"
    ],
  },
  {
    href: "https://github.com/satyamkhatiwada/Bislerium-Social-Media-WebAPI-",
    imageSrc: `/fullStackBlog.png`,
    imageAlt: "Full Stack Blog Platform 📝",
    title: "Full Stack Blog Platform 📝",
    description:
      "A blog platform with user interactions, posting features, and admin dashboards for data visualization.",
    tech: [
      "ReactJS", ".NET Core", "Entity Framework", "Azure DevOps", "Chakra UI", "PostGreSQL"
    ],
  },
];