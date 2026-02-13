import React from "react";

const certifications = [
  {
    title: "Mathematics for Machine Learning Specialization",
    issuer: "Imperial College London",
    issued: "Jan 2019",
    credentialId: "W565H2N52NJ6",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~W565H2N52NJ6/CERTIFICATE_LANDING_PAGE~W565H2N52NJ6.jpeg",
    verify:
      "https://www.coursera.org/account/accomplishments/specialization/W565H2N52NJ6",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    issued: "Mar 2020",
    credentialId: "7GNAMVRBZH58",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7GNAMVRBZH58/CERTIFICATE_LANDING_PAGE~7GNAMVRBZH58.jpeg",
    verify:
      "https://www.coursera.org/account/accomplishments/specialization/7GNAMVRBZH58",
  },
];

const Certifications = () => {
  return (
    <section className="certifications" id="Certifications">
      <div className="cert-heading">
        <span>Validated Learning</span>
        <span>Certifications</span>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.credentialId}>
            <div className="cert-media">
              <img src={cert.image} alt={`${cert.title} certificate`} />
            </div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <div className="cert-meta">
                <span>Issued {cert.issued}</span>
                <span>Credential ID {cert.credentialId}</span>
              </div>
              <a href={cert.verify} target="_blank" rel="noreferrer">
                Verify Credential
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
