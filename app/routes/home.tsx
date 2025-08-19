import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumAI Analyser" },
    { name: "description", content: "Analyse your resume!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      
    <section className = "main-section">

      <div className = "page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>      
        <h2 className="text-sm">Review your submissions and check AI-powered feedback.</h2>
      </div>
    
      {resumes.length > 0 && (
        <div className="resumes-section">

          {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
          ))}

        </div>
    )}

  </section>
  </main>;
}
