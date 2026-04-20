import portfolioData from "@/data/portfolio.json";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>My Work</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 16, fontSize: "0.95rem" }}>
            A curated selection of my recent work and personal projects.
          </p>
        </div>

        {projects.length === 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: 32,
                  minHeight: 240,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  borderStyle: "dashed",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: "rgba(96,165,250,0.05)",
                    border: "1px dashed rgba(96,165,250,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    marginBottom: 16,
                  }}
                >
                  🚀
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    marginBottom: 8,
                  }}
                >
                  Project {i} — Coming Soon
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.5 }}>
                  Add your project details in{" "}
                  <code
                    style={{
                      background: "rgba(96,165,250,0.08)",
                      color: "var(--accent-blue)",
                      padding: "1px 6px",
                      borderRadius: 4,
                      fontSize: "0.78rem",
                    }}
                  >
                    data/portfolio.json
                  </code>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {(projects as any[]).map((project: any) => (
              <div key={project.id} className="glass-card" style={{ padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem" }}>{project.title}</h3>
                  <div style={{ display: "flex", gap: 8 }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", transition: "color 0.2s" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", transition: "color 0.2s" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 16 }}>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="skill-tag" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
