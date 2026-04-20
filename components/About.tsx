import portfolioData from "@/data/portfolio.json";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">
          {/* Left: Text */}
          <div>
            <p className="section-label" style={{ marginBottom: 16 }}>About Me</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Crafting digital experiences with{" "}
              <span className="gradient-text">purpose & precision</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: 24,
                fontSize: "0.97rem",
              }}
            >
              {personal.bio}
            </p>
            <div className="accent-line" style={{ width: 80, marginBottom: 32 }} />

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={`mailto:${personal.email}`} className="btn-primary" style={{ fontSize: "0.82rem", padding: "10px 20px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {personal.email}
              </a>
            </div>
          </div>

          {/* Right: Info card */}
          <div>
            <div className="glass-card" style={{ padding: 32 }}>
              {/* Avatar + name */}
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
                <div className="avatar">
                  {personal.avatarInitials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{personal.name}</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: 2 }}>{personal.title}</div>
                  {personal.available && (
                    <span className="status-badge" style={{ marginTop: 8, fontSize: "0.7rem" }}>
                      <span className="status-dot" />
                      Available
                    </span>
                  )}
                </div>
              </div>

              <div className="accent-line" style={{ marginBottom: 24 }} />

              {/* Details */}
              {[
                { icon: "📍", label: "Location", value: personal.location },
                { icon: "📧", label: "Email", value: personal.email },
                { icon: "📞", label: "Phone", value: personal.phone },
                { icon: "🌐", label: "Languages", value: "Urdu (Native) · English (Pro)" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <span style={{ fontSize: "0.9rem", marginTop: 1 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</div>
                    <div style={{ fontSize: "0.88rem", color: "var(--text-primary)", marginTop: 2 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
