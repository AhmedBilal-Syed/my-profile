"use client";
import { useState, useEffect } from "react";
import portfolioData from "@/data/portfolio.json";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "0 24px" : "8px 24px",
          height: scrolled ? "64px" : "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: scrolled
            ? "rgba(8, 11, 15, 0.85)"
            : "rgba(8, 11, 15, 0.5)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.02)",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        {/* Logo with hover animation */}
        <a 
          href="#hero" 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          style={{
            textDecoration: "none",
            transition: "transform 0.3s ease",
            display: "inline-block",
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1.3rem",
              background: "linear-gradient(135deg, #F0F4F8, #60A5FA, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              animation: "gradientShift 3s ease infinite",
            }}
          >
            ABS<span style={{ color: "#60A5FA", WebkitTextFillColor: "#60A5FA" }}>.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="nav-link"
              style={{
                position: "relative",
                padding: "8px 0",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#60A5FA";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.substring(1)) {
                  e.currentTarget.style.color = "var(--text-secondary)";
                }
              }}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #60A5FA, #3B82F6)",
                    borderRadius: "2px",
                    animation: "slideIn 0.3s ease",
                  }}
                />
              )}
            </a>
          ))}
          {/* <a
            href={`mailto:${portfolioData.personal.email}`}
            className="btn-primary"
            style={{
              padding: "8px 24px",
              fontSize: "0.85rem",
              transition: "all 0.3s ease",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(96, 165, 250, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Hire Me
          </a> */}
        </div>

        {/* Mobile menu button with animation */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            display: "none",
            flexDirection: "column",
            gap: "6px",
            padding: "8px",
            borderRadius: "8px",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "none";
          }}
        >
          <span
            style={{
              width: 24,
              height: 2,
              background: "currentColor",
              display: "block",
              transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              transform: menuOpen ? "rotate(45deg) translate(6px, 6px)" : "none",
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: "currentColor",
              display: "block",
              transition: "opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: "currentColor",
              display: "block",
              transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              transform: menuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay with animation */}
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
              zIndex: 98,
              animation: "fadeIn 0.3s ease",
            }}
          />
          <div
            className="mobile-menu"
            style={{
              position: "fixed",
              top: scrolled ? "64px" : "72px",
              left: 0,
              right: 0,
              background: "rgba(8,11,15,0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "32px 24px",
              display: "none",
              flexDirection: "column",
              gap: "24px",
              zIndex: 99,
              animation: "slideDown 0.3s ease",
            }}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                style={{
                  fontSize: "1.1rem",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  animation: `fadeInUp 0.3s ease ${index * 0.05}s both`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "12px";
                  e.currentTarget.style.color = "#60A5FA";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="btn-primary"
              style={{
                alignSelf: "flex-start",
                marginTop: "8px",
                animation: "fadeInUp 0.3s ease 0.2s both",
                transition: "all 0.3s ease",
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              Hire Me →
            </a>
          </div>
        </>
      )}

      {/* Global animations */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
        
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}