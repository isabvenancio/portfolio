export const projects = [
  {
    title: "Análise de Sentimentos em Tweets na rede social Twitter/X",
    description:
      "Projeto de Processamento de Linguagem Natural e Machine Learning para classificação de sentimentos em tweets. O projeto realiza análise exploratória, limpeza e pré-processamento dos textos, vetorização com TF-IDF e treinamento de um modelo Naive Bayes para identificar sentimentos positivos e negativos.",
    technologies: [
      "Python",
      "Pandas",
      "Jupyter Notebook",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "NLP",
      "TF-IDF",
      "NLTK",
      "WordCloud"
    ],
    image: "/projects/twitter.png",
    github: "https://github.com/isabvenancio/stmgo-sentimentos",
    demo: "",
    features: [
      "Análise exploratória dos dados",
      "Limpeza e pré-processamento de textos",
      "Análise da distribuição de sentimentos",
      "Identificação das palavras mais frequentes",
      "Vetorização dos textos com TF-IDF",
      "Treinamento de modelo Naive Bayes",
      "Classificação de sentimentos",
      "Avaliação da acurácia do modelo",
      "Visualização dos resultados"
    ],
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
      "Aplicação web de recomendação de filmes utilizando Machine Learning e Processamento de Linguagem Natural. O sistema analisa características como sinopse, gêneros, palavras-chave, elenco e direção para identificar filmes semelhantes e apresentar recomendações personalizadas.",
    technologies: [
      "Python",
      "Streamlit",
      "Jupyter Notebook",
      "Pandas",
      "Scikit-learn",
      "Requests",
      "TMDB API",
    ],
    image: "/projects/moviematch.png",
    github: "https://github.com/isabvenancio/Recomendador_de_Filmes",
    demo: "https://recomendadordefilmes.streamlit.app/",
    features: [
      "Recomendação de filmes por similaridade",
      "Pesquisa e seleção de filmes",
      "Recomendações baseadas em conteúdo",
      "Exibição de pôsteres e informações dos filmes",
      "Integração com a API do TMDB",
      "Avaliação, gêneros, lançamento e sinopse",
      "Interface web em Streamlit",
      "Carregamento otimizado do modelo pré-processado"
    ],
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