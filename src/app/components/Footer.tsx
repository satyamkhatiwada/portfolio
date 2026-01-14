export default function Footer() {
  return (
    <footer className="w-full mt-auto pt-10 pb-10"> 
      {/* Centered line with controlled margins */}
      <div className="max-w-[1600px] mx-auto px-32">
        <div className="border-t border-white/5 w-full mb-12" />
        
        <div className="text-center">
          <p className="text-spotify-light-gray text-sm md:text-base opacity-70">
            &copy; Satyam&apos;s Portfolio {new Date().getFullYear()}, designed by{" "}
            <a
              href="https://www.satyamkhatiwada.com.np/"
              className="text-spotify-green font-semibold underline underline-offset-[6px] decoration-spotify-green/30 hover:decoration-spotify-green transition-all duration-300"
              target="_blank"
            >
              Satyam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}