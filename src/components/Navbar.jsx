import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const sections = [
  "inicio",
  "sobre",
  "skills",
  "projetos",
  "experiencia",
  "contato",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navigation = [
    {
      label: "Início",
      id: "inicio",
    },
    {
      label: "Sobre",
      id: "sobre",
    },
    {
      label: "Skills",
      id: "skills",
    },
    {
      label: "Projetos",
      id: "projetos",
    },
    {
      label: "Experiência",
      id: "experiencia",
    },
    {
      label: "Contato",
      id: "contato",
    },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          Isabella<span>.</span>
        </a>

        <nav className="nav-links">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "nav-link-active"
                  : ""
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-social">
          <a
            href="https://github.com/isabvenancio"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/isabella-barela-venâncio/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav className="container mobile-menu-content">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className={
                activeSection === item.id
                  ? "mobile-link-active"
                  : ""
              }
            >
              {item.label}
            </a>
          ))}

          <div className="mobile-social">
            <a
              href="https://github.com/isabvenancio"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={21} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/isabella-barela-venâncio/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={21} />
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;