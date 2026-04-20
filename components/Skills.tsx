import portfolioData from "@/data/portfolio.json";

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "⚡",
  Backend: "🔧",
  Tools: "🛠️",
  Concepts: "💡",
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Technical Skills</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: "1.2rem" }}>{CATEGORY_ICONS[category] || "•"}</span>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "var(--text-primary)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {category}
                </h3>
              </div>

              <div className="accent-line" style={{ width: "100%", marginBottom: 20 }} />

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {(items as string[]).map((skill: string) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
