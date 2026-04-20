import portfolioData from "@/data/portfolio.json";

export default function Experience() {
  const { experience, education, training } = portfolioData;

  return (
    <section id="experience" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>My Journey</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="exp-grid">
          {/* Experience */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                💼
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem" }}>Work Experience</h3>
            </div>

            <div style={{ position: "relative", paddingLeft: 24 }}>
              {/* Timeline line */}
              <div style={{ position: "absolute", left: 4, top: 8, bottom: 0, width: 1, background: "linear-gradient(to bottom, var(--accent-blue), transparent)" }} />

              {experience.map((exp, i) => (
                <div key={exp.id} style={{ position: "relative", marginBottom: 32, paddingLeft: 20 }}>
                  <div className="timeline-dot" style={{ position: "absolute", left: -20 }} />

                  <div className="glass-card" style={{ padding: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                      <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                        {exp.role}
                      </h4>
                      {exp.current && (
                        <span style={{ background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)", color: "var(--accent-blue)", fontSize: "0.65rem", padding: "2px 8px", borderRadius: 100, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                          Current
                        </span>
                      )}
                    </div>

                    <div style={{ color: "var(--accent-blue)", fontSize: "0.85rem", fontWeight: 500, marginBottom: 4 }}>{exp.company}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: 12 }}>
                      {exp.location} · {exp.period}
                    </div>

                    <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 16 }}>{exp.description}</p>

                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {exp.highlights.map((h, j) => (
                        <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: 6 }}>
                          <span style={{ color: "var(--accent-cyan)", flexShrink: 0, marginTop: 2 }}>▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-tag" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Training */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                🎓
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem" }}>Education</h3>
            </div>

            <div style={{ position: "relative", paddingLeft: 24, marginBottom: 48 }}>
              <div style={{ position: "absolute", left: 4, top: 8, bottom: 0, width: 1, background: "linear-gradient(to bottom, var(--accent-cyan), transparent)" }} />

              {education.map((edu) => (
                <div key={edu.id} style={{ position: "relative", paddingLeft: 20 }}>
                  <div className="timeline-dot" style={{ position: "absolute", left: -20, background: "var(--accent-cyan)", boxShadow: "0 0 12px rgba(34,211,238,0.6)" }} />
                  <div className="glass-card" style={{ padding: 24 }}>
                    <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{edu.degree}</h4>
                    <div style={{ color: "var(--accent-cyan)", fontSize: "0.85rem", fontWeight: 500, marginBottom: 4 }}>{edu.institution}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: 12 }}>{edu.location} · {edu.period}</div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Training */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>
                🏅
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem" }}>Professional Training</h3>
            </div>

            <div style={{ position: "relative", paddingLeft: 24 }}>
              <div style={{ position: "absolute", left: 4, top: 8, bottom: 0, width: 1, background: "linear-gradient(to bottom, var(--accent-blue), transparent)" }} />
              {training.map((t) => (
                <div key={t.id} style={{ position: "relative", paddingLeft: 20 }}>
                  <div className="timeline-dot" style={{ position: "absolute", left: -20 }} />
                  <div className="glass-card" style={{ padding: 24 }}>
                    <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>{t.title}</h4>
                    <div style={{ color: "var(--accent-blue)", fontSize: "0.85rem", fontWeight: 500, marginBottom: 2 }}>{t.organization}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.72rem", marginBottom: 4 }}>{t.fullName}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: 12 }}>{t.period}</div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
