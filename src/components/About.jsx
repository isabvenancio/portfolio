import {
  Code2,
  Database,
  BrainCircuit,
  BriefcaseBusiness,
} from "lucide-react";

function About() {
  const highlights = [
    {
      icon: <Code2 size={22} />,
      title: "Desenvolvimento",
      description:
        "Criação de aplicações, APIs e soluções utilizando diferentes linguagens e tecnologias.",
    },
    {
      icon: <Database size={22} />,
      title: "Dados",
      description:
        "Análise, tratamento e exploração de dados para transformar informação em conhecimento.",
    },
    {
      icon: <BrainCircuit size={22} />,
      title: "IA & Automação",
      description:
        "Aplicação de inteligência artificial e automações para otimizar processos e solucionar problemas.",
    },
    {
      icon: <BriefcaseBusiness size={22} />,
      title: "Projetos de TI",
      description:
        "Experiência acompanhando projetos, documentação, comunicação e implantação de soluções de tecnologia.",
    },
  ];

  return (
    <section className="section about" id="sobre">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Sobre mim</span>

          <h2>
            Tecnologia além do <span>código.</span>
          </h2>

          <p>
            Desenvolvimento, análise e organização trabalhando juntos para
            criar soluções melhores.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou estudante de <strong>Engenharia de Software</strong> e gosto
              de explorar diferentes áreas da tecnologia, principalmente
              desenvolvimento, análise de dados, automação e inteligência
              artificial.
            </p>

            <p>
              Além da programação, também tenho experiência com{" "}
              <strong>gestão de projetos de TI</strong>, acompanhando processos,
              documentações, implantações e comunicação entre equipes técnicas
              e clientes.
            </p>

            <p>
              Busco construir soluções que não sejam apenas tecnicamente boas,
              mas também organizadas, úteis e capazes de resolver problemas
              reais.
            </p>

            <div className="about-info">
              <div>
                <span>Formação</span>
                <strong>Engenharia de Software</strong>
              </div>

              <div>
                <span>Foco</span>
                <strong>Software, Dados & IA</strong>
              </div>

              <div>
                <span>Interesse</span>
                <strong>Automação e Backend</strong>
              </div>
            </div>
          </div>

          <div className="about-cards">
            {highlights.map((item) => (
              <article className="about-card" key={item.title}>
                <div className="about-card-icon">{item.icon}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;