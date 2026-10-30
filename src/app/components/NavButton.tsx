import { IoCloudDownloadOutline } from "react-icons/io5";

interface ButtonProps {
  name: string;
}

export default function NavButton({ name }: ButtonProps) {
  return (
    <a
      href="/Satyam_Khatiwada_Resume.pdf"
      download="Satyam_Khatiwada_Resume.pdf"
      className="flex items-center gap-2 rounded-full bg-spotify-green px-4 py-3 font-semibold transition-colors duration-200 hover:bg-spotify-dark-green"
    >
      {name}
      <IoCloudDownloadOutline className="text-xl" />
    </a>
  );
}
