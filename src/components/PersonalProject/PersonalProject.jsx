import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    name: "Project X",
    tagline: "Lightweight Vector Database for AI Developers",
    description:
      "Fast, efficient, and built entirely in C++. Designed for embeddings, similarity search, and rapid experimentation.",
    demoUrl: "https://betasolver05609.github.io/Project-X/",
    githubUrl: "https://github.com/betaSolver05609/Project-X",
    highlights: ["Built in C++", "Similarity search", "Embeddings-ready"],
  },
  {
    name: "IDPMS-ZKP",
    tagline: "Identity Provider Microservice for IoT Security",
    description:
      "A robust identity solution for secure IoT device authentication using Zero-Knowledge Proofs (ZKP) and Secure Remote Password (SRP).",
    demoUrl: "https://betasolver05609.github.io/IDPMS-ZKP/",
    githubUrl: "https://github.com/betaSolver05609/IDPMS-ZKP",
    highlights: ["ZKP-based trust", "SRP authentication", "Replay-attack resistant"],
  },
  {
    name: "PullQ",
    tagline: "Pull-based Work Queue and Flow Management",
    description:
      "A practical queue-first system to organize pull workflows, improve task ownership, and simplify collaborative execution.",
    demoUrl: "https://betasolver05609.github.io/PullQ/",
    githubUrl: "https://github.com/betaSolver05609/PullQ",
    highlights: ["Queue-centric design", "Clear ownership model", "Collaboration-friendly"],
  },
  {
    name: "Cheat X",
    tagline: "Plagiarism Detection and Similarity Analysis",
    description:
      "A plagiarism detection project for identifying duplicated and near-duplicated content to support originality checks.",
    demoUrl: "https://betasolver05609.github.io/Plagiarism-Detection/",
    githubUrl: "https://github.com/betaSolver05609/Plagiarism-Detection",
    highlights: ["Text similarity analysis", "Originality checks", "Academic use cases"],
  },
];

const PersonalProject = () => {
  return (
    <div className="personal-projects" id="PersonalProjects">
      <span>Built Beyond Work</span>
      <span>Personal Projects</span>
      <Swiper
        spaceBetween={24}
        slidesPerView={2}
        grabCursor={true}
        className="personal-projects-slider"
        breakpoints={{
          0: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name}>
            <div className="pp-card">
              <h3>{project.name}</h3>
              <h4>{project.tagline}</h4>
              <p>{project.description}</p>
              <div className="pp-highlights">
                {project.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="pp-actions">
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PersonalProject;
