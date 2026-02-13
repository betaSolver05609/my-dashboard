import React from "react";

const Publications = () => {
  return (
    <section className="publications" id="Publications">
      <div className="pub-left">
        <div className="pub-pdf-card">
          <iframe
            title="Publication PDF Preview"
            src="publications/2508.21073v1.pdf#toolbar=0&navpanes=0&scrollbar=0"
          />
          <a href="publications/2508.21073v1.pdf" download className="button pub-download">
            Download PDF
          </a>
        </div>
      </div>

      <div className="pub-right">
        <span>Research Publication</span>
        <h2>Entanglement Degradation in Curved Spacetime: An Open Quantum Systems Approach</h2>
        <p>
          We investigate how gravitational time dilation affects the coherence and entanglement dynamics of spatially separated qubits using open quantum systems theory. Unlike earlier works that consider only static or Markovian noise models, our approach incorporates phase damping, amplitude damping, and thermal excitation, along with a non-Markovian extension. By embedding gravitational redshift into the local decoherence rates, we demonstrate asymmetry in entanglement degradation and reveal the possibility of revivals in structured environments. Our findings have implications for relativistic quantum communication and space-based quantum technologies.
        </p>
        <a href="https://arxiv.org/abs/2508.21073" target="_blank" rel="noreferrer">
          View on arXiv
        </a>
      </div>
    </section>
  );
};

export default Publications;
