import portfolioData from "@/data/portfolio.json";

export default function Blog() {
  const { blog } = portfolioData;

  return (
    <section id="blog" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Thoughts & Insights</p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Blog & <span className="gradient-text">Articles</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 16, fontSize: "0.95rem" }}>
            Sharing knowledge, experiences, and learnings from the world of web development.
          </p>
        </div>

        {blog.length === 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { emoji: "✍️", topic: "React Best Practices" },
              { emoji: "🔌", topic: "Building REST APIs with Node.js" },
              { emoji: "🎨", topic: "Mastering Tailwind CSS" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: 28,
                  borderStyle: "dashed",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "var(--text-muted)" }}>
                      Coming Soon
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: 2 }}>
                      0 min read · Draft
                    </div>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: 8 }}>
                    {item.topic}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                    Add your article in{" "}
                    <code style={{ background: "rgba(96,165,250,0.08)", color: "var(--accent-blue)", padding: "1px 6px", borderRadius: 4, fontSize: "0.78rem" }}>
                      data/portfolio.json
                    </code>{" "}
                    under the <code style={{ background: "rgba(96,165,250,0.08)", color: "var(--accent-blue)", padding: "1px 6px", borderRadius: 4, fontSize: "0.78rem" }}>blog</code> array.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {(blog as any[]).map((post: any) => (
              <a key={post.id} href={post.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div className="glass-card" style={{ padding: 28 }}>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: 12 }}>
                    {post.date} · {post.readTime}
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: 10, color: "var(--text-primary)" }}>{post.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 16 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="skill-tag" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
