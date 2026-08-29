import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-tag">Olá, eu sou</span>

          <h1>
            Isabella <span>Barela</span>
          </h1>

          <h2>Engenharia de Software</h2>

          <p className="hero-description">
            Desenvolvo soluções unindo
            <strong> desenvolvimento de software</strong>,
            <strong> dados</strong>,
            <strong> automação</strong> e
            <strong> inteligência artificial</strong>.
          </p>

          <p className="hero-secondary">
            Engenharia de Software, tecnologia e projetos aplicados à resolução de
            problemas reais.
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="button button-primary">
              Ver projetos
              <ArrowDown size={18} />
            </a>

            <a
              href="https://github.com/isabvenancio"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/isabvenancio"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/isabella-barela-venâncio/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a href="mailto:barelaisabella25@gmail.com" aria-label="E-mail">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="code-window-header">
              <div className="window-buttons">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="window-title">isabella.js</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="code-string">"Isabella Barela"</span>,
              </p>

              <p className="indent">
                degree:{" "}
                <span className="code-string">
                  "Engenharia de Software"
                </span>,
              </p>

              <p className="indent">focus: [</p>

              <p className="double-indent">
                <span className="code-string">"Desenvolvimento"</span>,
              </p>

              <p className="double-indent">
                <span className="code-string">"Dados"</span>,
              </p>

              <p className="double-indent">
                <span className="code-string">"Automação"</span>,
              </p>

              <p className="double-indent">
                <span className="code-string">"IA"</span>
              </p>

              <p className="indent">],</p>

              <p className="indent">
                learning: <span className="code-boolean">true</span>
              </p>

              <p>{"};"}</p>

              <br />

              <p>
                <span className="code-blue">developer</span>.
                <span className="code-yellow">build</span>();
              </p>
            </div>
          </div>

          <div className="hero-decoration decoration-one"></div>
          <div className="hero-decoration decoration-two"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;