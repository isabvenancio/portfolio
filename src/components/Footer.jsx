import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail, ArrowUp } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <a href="#inicio" className="logo footer-logo">
            Isabella<span>.</span>
          </a>

          <p>
            Software, dados, automação e projetos de tecnologia.
          </p>
        </div>

        <div className="footer-center">
          <a href="#sobre">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/isabvenancio"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/isabella-barela-venâncio/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </a>

          <a
            href="mailto:barelaisabella25@gmail.com"
            aria-label="E-mail"
          >
            <Mail size={19} />
          </a>

          <a
            href="#inicio"
            className="back-to-top"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Isabella Barela Venâncio.</p>
        <p>Desenvolvido com React.</p>
      </div>
    </footer>
  );
}

export default Footer;