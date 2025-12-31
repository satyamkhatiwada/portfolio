import { ReactNode } from "react";

export default function Skills() {
  return (
    <div
      className="max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
      id="skills"
    >
      <div className="p-6">
        <h1 className="text-xl font-bold mb-5 text-white">Skills & Tools</h1>
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-y-6 gap-x-2">
          {skillItems.map((item) => (
            <div
              className="flex flex-col items-center justify-center group transition-all duration-200"
              key={item.name}
            >
              <div className="p-2 rounded-lg sm:group-hover:bg-[#282828] transition-colors mb-1">
                {/* Notice we use <img> instead of <Image /> here */}
                <img 
                  src={item.iconUrl} 
                  style={{ width: '28px', height: '28px' }} 
                  alt={item.name}
                  className={item.invert ? "invert" : ""}
                />
              </div>
              <span className="text-[10px] text-gray-400 font-medium text-center truncate w-full px-1">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const skillItems = [
  { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "n8n", iconUrl: "https://cdn.simpleicons.org/n8n/FF6D5B" },
  { name: "Make", iconUrl: "https://cdn.simpleicons.org/make/6D28D9" },
  { name: "Jira", iconUrl: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "Azure", iconUrl: "https://cdn.simpleicons.org/azuredevops/0078D4" },
  { name: "QA", iconUrl: "https://cdn.simpleicons.org/checkmarx/white" }, // Professional testing logo
  { name: "CyberSec", iconUrl: "https://cdn.simpleicons.org/hackthebox/white" }, // Security community logo
  { name: "Cloud", iconUrl: "https://cdn.simpleicons.org/googlecloud/white" },
  { name: "Management", iconUrl: "https://cdn.simpleicons.org/trello/white" }, // Standard PM tool logo
  { name: "Comm.", iconUrl: "https://cdn.simpleicons.org/slack/white" }, // Communication tool logo
];