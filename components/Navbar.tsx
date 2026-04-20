"use client";
import { useState, useEffect } from "react";
import portfolioData from "@/data/portfolio.json";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(8, 11, 15, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #F0F4F8, #60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ABS<span style={{ color: "#60A5FA", WebkitTextFillColor: "#60A5FA" }}>.</span>
        </span>
      </a>

      {/* Desktop Links */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="hidden md:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="btn-primary"
          style={{ padding: "8px 20px", fontSize: "0.8rem" }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-primary)",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
      >
        <span style={{ width: 22, height: 2, background: "currentColor", display: "block", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
        <span style={{ width: 22, height: 2, background: "currentColor", display: "block", opacity: menuOpen ? 0 : 1 }} />
        <span style={{ width: 22, height: 2, background: "currentColor", display: "block", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(8,11,15,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1rem" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="btn-primary"
            style={{ alignSelf: "flex-start" }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
