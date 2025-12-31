import { ReactNode } from "react";
import Image from "next/image";

export default function ProgrammingLanguages() {
  return (
    <div
      className="max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
      id="programming-languages"
    >
      <div className="p-6">
        <h1 className="text-xl font-bold mb-5">Skills</h1>
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-4">
          {languageItems.map((item) => (
            <div
              className="flex items-center justify-center p-2.5 rounded-lg sm:hover:bg-[#282828] transition-all duration-200"
              key={item.name}
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const languageItems: {
  name: string;
  component: ReactNode;
}[] = [
  {
    name: "Python",
    component: (
      <Image
        src="https://cdn.simpleicons.org/python/3776AB"
        width={32}
        height={32}
        alt="Python"
      />
    ),
  },
  {
    name: "n8n",
    component: (
      <Image
        src="https://cdn.simpleicons.org/n8n/white"
        width={32}
        height={32}
        alt="n8n"
      />
    ),
  },
  {
    name: "Make",
    component: (
      <Image
        src="https://cdn.simpleicons.org/make/white"
        width={32}
        height={32}
        alt="Make"
      />
    ),
  },
  {
    name: "Jira",
    component: (
      <Image
        src="https://cdn.simpleicons.org/jira/0052CC"
        width={32}
        height={32}
        alt="Jira"
      />
    ),
  },
  {
    name: "Azure DevOps",
    component: (
      <Image
        src="https://cdn.simpleicons.org/azuredevops/0078D4"
        width={32}
        height={32}
        alt="Azure DevOps"
      />
    ),
  },
  {
    name: "Cyber Security",
    component: (
      <Image
        src="https://cdn.simpleicons.org/auth0/white"
        width={32}
        height={32}
        alt="Cyber Security"
      />
    ),
  },
  {
    name: "QA",
    component: (
      <Image
        src="https://cdn.simpleicons.org/playwright/white"
        width={32}
        height={32}
        alt="QA"
      />
    ),
  },
  {
    name: "Cloud",
    component: (
      <Image
        src="https://cdn.simpleicons.org/googlecloud/white"
        width={32}
        height={32}
        alt="Cloud"
      />
    ),
  },
  {
    name: "Project Management",
    component: (
      <Image
        src="https://cdn.simpleicons.org/trello/white"
        width={32}
        height={32}
        alt="Project Management"
      />
    ),
  },
  {
    name: "Communication",
    component: (
      <Image
        src="https://cdn.simpleicons.org/slack/white"
        width={32}
        height={32}
        alt="Communication"
      />
    ),
  },
];