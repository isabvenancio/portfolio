import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container">
        <div className="contact-card">
          <div className="contact-text">
            <span className="section-label">Contato</span>

            <h2>
              Vamos construir algo <span>juntos?</span>
            </h2>

            <p>
              Estou aberta a conversar sobre desenvolvimento, dados,
              automação, tecnologia, projetos e novas oportunidades.
            </p>

            <a
              href="mailto:barelaisabella25@gmail.com"
              className="button button-primary contact-button"
            >
              <Mail size={18} />
              Entrar em contato
            </a>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/isabvenancio"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <FaGithub size={22} />
              </div>

              <div>
                <span>GitHub</span>
                <strong>@isabvenancio</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/isabella-barela-venâncio/"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <FaLinkedin size={22} />
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>Isabella Barela Venâncio</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>

            <a
              href="mailto:barelaisabella25@gmail.com"
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <Mail size={22} />
              </div>

              <div>
                <span>E-mail</span>
                <strong>barelaisabella25@gmail.com</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;