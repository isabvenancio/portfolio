export const projects = [
  {
    title: "Diagnóstico de Segurança Digital",
    description:
      "Aplicação para criação e acompanhamento de diagnósticos de segurança digital, com autenticação, cálculo de maturidade, recomendações automáticas, histórico e geração de relatórios.",
    technologies: [
      "JavaScript",
      "Supabase",
      "Node.js",
      "HTML",
      "CSS",
    ],
    image: "/projects/diagnostico.png",
    github: "https://github.com/isabvenancio/stmgo-diagnostico",
    demo: "",
    featured: true,
  },

  {
    title: "Monitor de Preços",
    description:
      "Aplicação desenvolvida em Python para monitoramento de preços em lojas online. Utiliza Web Scraping com Selenium para consultar preços, registra o histórico das verificações em CSV e envia alertas quando o valor atinge o preço desejado.",
    technologies: [
      "Python",
      "Selenium",
      "Pandas",
      "SMTP",
      "CSV"
    ],
    features: [
      "Web Scraping com Selenium",
      "Monitoramento de preços",
      "Comparação com preço desejado",
      "Histórico em CSV",
      "Alertas por e-mail",
      "Configuração de produtos"
    ],
    image: "/projects/monitor_precos.webp",
    github:
      "https://github.com/isabvenancio/Monitor_de_Precos",
    demo: "",
    featured: true
  },

  {
    title: "Tracker de Interações",
    description:
      "Aplicação web para acompanhamento de projetos, interações com clientes e desempenho das entregas. Possui dashboard com indicadores, gráficos, filtros, gerenciamento de projetos, acompanhamento de progresso, impedimentos, responsáveis e histórico de interações.",
    technologies: [
      "JavaScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Chart.js",
      "Lucide",
      "Vercel Analytics",
    ],
    image: "/projects/tracker.png",
    github: "https://github.com/isabvenancio/Tracker_Interacoes2.5",
    demo: "",
    features: [
      "Dashboard de projetos",
      "Indicadores de desempenho",
      "Gráficos e análises",
      "Filtros por projeto",
      "Acompanhamento de progresso",
      "Gestão de projetos ativos e arquivados",
      "Atualizações em tempo real",
      "Exportação e impressão"
      ],
    featured: true,
  },

  {
    title: "MovieMatch AI",
    description:
      "Sistema de recomendação de filmes baseado em conteúdo, utilizando Machine Learning e NLP para encontrar produções semelhantes a partir de gêneros, elenco, diretor e palavras-chave.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Streamlit",
      "NLP",
    ],
    image: "/projects/movies.png",
    github: "https://github.com/isabvenancio/Recomendador_de_Filmes",
    demo: "",
    featured: true,
  },

  {
    title: "API de Controle de Gastos",
    description:
      "API REST desenvolvida em Python com FastAPI para gerenciamento de despesas, utilizando modelos com validação, organização em rotas e serviços e persistência dos dados em JSON. O repositório também possui um dashboard web de apoio para visualização e interação com os gastos.",
    technologies: [
      "Python",
      "FastAPI",
      "JavaScript",
      "Chart.js",
      "REST API",
      "HTML",
      "CSS",
      "Pydantic",
      "JSON",
    ],
    image: "/projects/api_gastos.png",
    github: "https://github.com/isabvenancio/API_de_Gastos",
    demo: "",
    features: [
      "API REST",
      "Validação de dados",
      "Filtros por categoria",
      "Busca de gastos",
      "Persistência em JSON",
      "Dashboard com gráficos"
    ],
    featured: true,
  },

  {
    title: "Analisador de CSV & Excel",
    description:
      "Aplicação desktop desenvolvida em Python para análise de arquivos CSV e Excel, com interface gráfica, dashboard de indicadores, estatísticas descritivas, filtros avançados, busca de dados, geração de gráficos e exportação de relatórios.",
    technologies: [
      "Python",
      "Pandas",
      "OpenPyXL",
      "Data Analysis",
      "CustomTkinter",
      "Matplotlib",
      "Seaborn",
    ],
    features: [
      "Importação de arquivos CSV e Excel",
      "Visualização dos dados em tabela",
      "Pesquisa de registros",
      "Dashboard com indicadores",
      "Estatísticas descritivas",
      "Filtros por coluna e operador",
      "Aplicação de múltiplos filtros",
      "Geração de histogramas e gráficos de barras",
      "Matriz de correlação",
      "Exportação de relatórios para Excel"
    ],
    image: "/projects/analisador_csv_excel.png",
    github: "https://github.com/isabvenancio/Analisador_de_CSV-Excel",
    demo: "",
    featured: false,
  },
];