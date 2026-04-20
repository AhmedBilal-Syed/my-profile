import portfolioData from "@/data/portfolio.json";

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              background: "linear-gradient(135deg, #F0F4F8, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ABS.
          </span>
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
          © {year} {personal.name}. Built with Next.js & ❤️
        </p>

        <a
          href="#hero"
          style={{
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            textDecoration: "none",
            transition: "color 0.2s",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
