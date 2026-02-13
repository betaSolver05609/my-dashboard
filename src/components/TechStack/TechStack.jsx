import React from "react";

const stackRows = [
  { category: "Languages", items: "Python, Java, JavaScript/TypeScript" },
  {
    category: "BackEnd Framework",
    items:
      "Spring Boot, Spring Data JPA, Spring Security, Express, Flask, FastAPI",
  },
  { category: "Front End", items: "React, Angular, Next.js" },
  { category: "Containerization", items: "Docker" },
  { category: "Infrastructure", items: "Terraform" },
  { category: "Cloud", items: "AWS" },
  { category: "CI/CD", items: "Jenkins, GitLab Pipelines" },
  { category: "Version Management", items: "Git" },
];

const TechStack = () => {
  return (
    <section className="tech-stack" id="TechStack">
      <div className="ts-heading">
        <span>Engineering Foundation</span>
        <span>Tech Stack</span>
      </div>

      <div className="ts-table-wrap">
        <table className="ts-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>
            {stackRows.map((row) => (
              <tr key={row.category}>
                <td>{row.category}</td>
                <td>{row.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TechStack;
