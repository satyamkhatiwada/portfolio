export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Curriculum Vitae</h1>
          <p className="mt-2 text-spotify-light-gray">
            View or download my CV.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/Satyam_Khatiwada_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-spotify-green px-4 py-3 font-semibold transition-colors duration-200 hover:bg-spotify-green/10"
          >
            Open PDF in new tab
          </a>
          <a
            href="/Satyam_Khatiwada_Resume.pdf"
            download="Satyam_Khatiwada_Resume.pdf"
            className="rounded-full bg-spotify-green px-4 py-3 font-semibold transition-colors duration-200 hover:bg-spotify-dark-green"
          >
            Download CV
          </a>
        </div>
      </div>

      <iframe
        src="/Satyam_Khatiwada_Resume.pdf"
        title="Satyam Khatiwada CV"
        className="h-[80vh] min-h-[600px] w-full rounded-xl border border-white/10 bg-white"
      />
    </main>
  );
}