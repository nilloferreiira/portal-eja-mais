export type SectionData =
  | Curso
  | Noticia
  | Enem
  | BemEstar
  | Vocacao
  | Produtividade

// Definindo um tipo de objeto para o data com as chaves específicas
export interface Data {
  cursos: Curso[]
  noticias: Noticia[]
  enem: Enem[]
  bemEstar: BemEstar[]
  vocacao: Vocacao[]
  produtividade: Produtividade[]
}

export type SectionId = keyof Data

// Tipagem para Cursos
export type Curso = {
  id: number
  title: string
  duration?: string
  description?: string
  link: string
}

// Tipagem para Notícias
export type Noticia = {
  id: number
  title: string
  source: string
  category?: string
  link: string
}

// Tipagem para ENEM
export type Enem = {
  id: number
  title: string
  description: string
  link: string
}

// Tipagem para Bem-estar
export type BemEstar = {
  id: number
  title: string
  description: string
  link: string
}

// Tipagem para Vocação
export type Vocacao = {
  id: number
  title: string
  description: string
  link: string
}

// Tipagem para Produtividade
export type Produtividade = {
  id: number
  title: string
  description: string
  link: string
}

export type GeneralData = Partial<
  Curso & Noticia & Enem & BemEstar & Vocacao & Produtividade
>

export const sections = [
  { name: "ENEM", id: "enem" },
  { name: "Cursos", id: "cursos" },
  { name: "Bem-estar", id: "bem-estar" },
  { name: "Vocação", id: "vocacao" },
  { name: "Produtividade", id: "produtividade" },
  { name: "Notícias", id: "noticias" }
]

// Array de ENEM
const enem: Enem[] = [
  {
    id: 1,
    title: "Como aprender FÍSICA do ZERO",
    description:
      "Vídeo que ensina a aprender física do zero com dicas de estudo e abordagem passo a passo.",
    link: "https://youtu.be/Yt-R80zFwjY?si=2xGIrRckrKDJ8ONI"
  },
  {
    id: 2,
    title: "ENEM | Física",
    description:
      "Playlist completa focada no conteúdo de física para o ENEM, com temas recorrentes e exercícios.",
    link: "https://youtube.com/playlist?list=PL8vXuI6zmpdiG6QR-LpXXbUYzPz5rOhF2&si=YavcCU4Kwff68vs8"
  },
  {
    id: 3,
    title: "FÍSICA COMPLETA DO ZERO",
    description:
      "Playlist que cobre todo o conteúdo de física desde o básico, ideal para iniciantes.",
    link: "https://youtube.com/playlist?list=PL8Sb1J47vKz6YDhzxYiVDZWFAuAHs6_rp&si=oL2OYVDd0L5yyiU0"
  },
  {
    id: 4,
    title: "Extensivo de Química",
    description:
      "Playlist extensiva cobrindo os principais tópicos de química, ideal para preparação para vestibulares.",
    link: "https://youtube.com/playlist?list=PL0LfmDSptaT3Lvnf-YsUI18pzihaLPARU&si=ykOfqTM16z9iPoGp"
  },
  {
    id: 5,
    title: "Curso de Linguagens Completo para ENEM",
    description:
      "Playlist completa focada no conteúdo de linguagens para o ENEM, abrangendo interpretação de textos, gramática e outros temas essenciais.",
    link: "https://youtube.com/playlist?list=PLPwuAOl5BHi_1z_9kQffTUIxBCN8JJyJu&si=_NPsI-J1ghYwFBtT"
  },
  {
    id: 6,
    title: "Filosofia ENEM",
    description:
      "Playlist com conteúdos de filosofia focados no ENEM, abordando temas como ética, moral e os principais filósofos.",
    link: "https://youtube.com/playlist?list=PLQVUQftDIJQHKwP_okpYzqu77C2Y-qPKo&si=7ZkZOVDrzqf5QuaF"
  },
  {
    id: 7,
    title: "Sociologia ENEM",
    description:
      "Playlist com conteúdos de sociologia para o ENEM, incluindo temas sobre sociedade, cultura, política e economia.",
    link: "https://youtube.com/playlist?list=PLQVUQftDIJQGKycxxgIW5YN64kkj2Jk52&si=DCTFP6sKB_G8Bk0g"
  },
  {
    id: 8,
    title: "Curso Enem Gratuito",
    description:
      "Plataforma com cursos gratuitos voltados para a preparação para o Enem, sem burocracia e com acesso aberto.",
    link: "https://cursoenemgratuito.com.br/"
  },
  {
    id: 9,
    title: "Aulão de redação ENEM - YouTube",
    description: "Dicas de preparação para o ENEM.",
    link: "https://youtu.be/2gJvhHx5EQY?si=KgLw3RVbowYRcY7P"
  },
  {
    id: 10,
    title: "Como começar uma redação para o ENEM 2024 - YouTube",
    description: "Instruções para redação do ENEM.",
    link: "https://youtu.be/7uH7WUEyZJM?si=TkRgc5KCbNrTd9Pv"
  },
  {
    id: 11,
    title: "Curso de Matemática Básica para o ENEM - YouTube",
    description: "Playlist de matemática básica voltada para o ENEM.",
    link: "https://youtube.com/playlist?list=PLrzB-zHlu3aD-mUeGQyB0YChHiSBfNTvB&si=4BQQo2SjnnuwkO_n"
  },
  {
    id: 12,
    title: "Dicas de Redação para o ENEM - YouTube",
    description: "Dicas práticas para a redação do ENEM.",
    link: "https://youtu.be/Yt-R80zFwjY?si=2xGIrRckrKDJ8ONI"
  },
  {
    id: 13,
    title: "Curso de Química para o ENEM - YouTube",
    description: "Playlist com conteúdo de química para o ENEM.",
    link: "https://youtube.com/playlist?list=PL8vXuI6zmpdj_YFEHTaBDccdSCC1LVNH0&si=6Ht2kDIR2tp_zIK6"
  },
  {
    id: 14,
    title: "Biologia para o ENEM - Playlist YouTube",
    description: "Conteúdo completo de biologia para o ENEM.",
    link: "https://youtube.com/playlist?list=PL8vXuI6zmpdgu7TOyarRBU42MXOrUJnOS&si=JW3ewVUBS3_jqMEy"
  },
  {
    id: 15,
    title: "Biologia: Revisão para o ENEM - Playlist YouTube",
    description: "Revisão completa de biologia para o ENEM.",
    link: "https://youtube.com/playlist?list=PLdkZd7NEhSekPPX76_B7SI5R3J2aiQoTO&si=uhw5TZOsfkyVaEJb"
  }
]

// Array de Bem-estar
const bemEstar: BemEstar[] = [
  {
    id: 1,
    title: "Dicas de Relaxamento - YouTube",
    description: "Dicas práticas para relaxamento e bem-estar.",
    link: "https://youtu.be/I_TOJOu_YJY?si=-wbPO2kjPQYcnSQW"
  },
  {
    id: 2,
    title: "Mindfulness para o Dia a Dia - YouTube",
    description: "Práticas de mindfulness para a rotina diária.",
    link: "https://youtu.be/MpF-aZonILg?si=X4-hVrhXyt_CkezU"
  },
  {
    id: 3,
    title: "4 passos para evitar o NERVOSISMO",
    description:
      "Dicas práticas para reduzir o nervosismo em momentos importantes.",
    link: "https://youtu.be/18uH7ppPGUg?si=naInU18XOBZFiLkd"
  },
  {
    id: 4,
    title: "Checklist de itens indispensáveis para a prova do ENEM",
    description:
      "Checklist com itens essenciais para levar no dia da prova do ENEM.",
    link: "https://youtu.be/RwoHzjwnUPE?si=obd0ksHxRh3wXxHH"
  },
  {
    id: 5,
    title: "O que é uma alimentação saudável?",
    description:
      "Explicação sobre como ter uma alimentação equilibrada e saudável.",
    link: "https://youtu.be/ywUuoTJJznA?si=dfWrENDspOn0Fxut"
  },
  {
    id: 6,
    title: "O que pode aumentar o nosso bem-estar?",
    description: "Dicas para melhorar o bem-estar e a qualidade de vida.",
    link: "https://youtu.be/xvOfYLcTM3k?si=9ZHQ2il3WzfVU40i"
  }
]

// Array de Vocação
const vocacao: Vocacao[] = [
  {
    id: 1,
    title: "Teste Vocacional - Guia da Carreira",
    description:
      "Página que oferece um teste vocacional gratuito para ajudar na escolha da carreira ideal com base em suas habilidades e interesses.",
    link: "https://www.guiadacarreira.com.br/teste-vocacional"
  },
  {
    id: 2,
    title: "Guia das Profissões - Guia da Carreira",
    description:
      "Blog com um guia completo sobre as profissões, incluindo informações sobre áreas de atuação, mercado de trabalho e expectativas salariais.",
    link: "https://www.guiadacarreira.com.br/blog/guia-das-profissoes"
  },
  {
    id: 3,
    title: "Carreiras e Profissões - Quero Bolsa",
    description:
      "Plataforma que reúne informações sobre diversas carreiras e profissões, com detalhes sobre salários, mercado de trabalho e cursos.",
    link: "https://querobolsa.com.br/carreiras-e-profissoes/todas"
  }
]

// Array de Produtividade
const produtividade: Produtividade[] = [
  {
    id: 1,
    title: "Blog de Produtividade e Bem-Estar - Viver de Blog",
    description:
      "Site com conteúdo voltado para melhorar a produtividade e o bem-estar, incluindo dicas de escrita e desenvolvimento pessoal.",
    link: "https://viverdeblog.com/blog/"
  },
  {
    id: 2,
    title: "Curso Notion para Iniciantes - Cursa",
    description: "Curso gratuito de introdução ao Notion para iniciantes.",
    link: "https://cursa.com.br/home/course/curso-notion-para-iniciantes-gratuito/444"
  },
  {
    id: 3,
    title: "Playlist de Curso de Notion - YouTube",
    description: "Playlist no YouTube com vídeos sobre como usar o Notion.",
    link: "https://youtube.com/playlist?list=PL2q-8pVHr4J-O_-DwI56jZxkBNGTrOUcZ&si=sBGF7pxtZNk3fsdh"
  },
  {
    id: 4,
    title: "Curso Completo de Notion - YouTube",
    description: "Curso completo de Notion para produtividade e organização.",
    link: "https://youtube.com/playlist?list=PLYBxhYi1-3nlFcKbL3-iD7HGd17v5d8ws&si=Bf7FvJ4xFCKUKULu"
  },
  {
    id: 5,
    title: "Tutorial Básico de Notion - YouTube",
    description: "Tutorial básico para iniciar no Notion.",
    link: "https://youtu.be/PzUZsoyMXuY?si=Wg_us5MMuU-fuTNe"
  },
  {
    id: 6,
    title: "Gestão de Tempo e Planejamento",
    description:
      "Vídeo que ensina técnicas de gestão de tempo e planejamento pessoal para melhorar a produtividade.",
    link: "https://youtu.be/PzUZsoyMXuY?si=Wg_us5MMuU-fuTNe"
  },
  {
    id: 7,
    title: "Trello para Iniciantes: Curso Gratuito",
    description:
      "Playlist que ensina a usar o Trello para organizar tarefas e projetos de forma eficiente.",
    link: "https://www.youtube.com/playlist?list=PLYBxhYi1-3nlFcKbL3-iD7HGd17v5d8ws&si=Bf7FvJ4xFCKUKULu"
  }
]

// Array de Cursos
const cursos: Curso[] = [
  {
    id: 1,
    title: "Cursos Gratuitos da Microsoft",
    description:
      "Portal de cursos gratuitos da Microsoft com treinamentos que abrangem desde linguagens de programação até o pacote Office.",
    link: "https://learn.microsoft.com/pt-br/training/browse/?products=office-365"
  },
  {
    id: 2,
    title:
      "Fundamentos do MS-900 Microsoft 365 : Descrever aplicações e serviços do Microsoft 365",
    description:
      "Roteiro de aprendizagem sobre como as soluções de produtividade e colaboração do Microsoft 365 capacitam empresas e usuários.",
    duration: "2 h 28 min",
    link: "https://learn.microsoft.com/pt-br/training/paths/describe-microsoft-365-core-services-concepts/"
  },
  {
    id: 3,
    title: "Introdução ao Microsoft 365 Copilot",
    description:
      "Módulo sobre as funcionalidades do Microsoft 365 Copilot e o compromisso da Microsoft com IA responsável.",
    duration: "29 min",
    link: "https://learn.microsoft.com/pt-br/training/modules/introduction-microsoft-365-copilot/"
  },
  {
    id: 4,
    title: "Introdução ao Office 365 e ao Windows para liderança",
    description:
      "Roteiro de aprendizagem que ajuda líderes educacionais a usar ferramentas para suporte e organização eficiente.",
    duration: "4 h 21 min",
    link: "https://learn.microsoft.com/pt-br/training/paths/get-started-office-365-windows-leadership/"
  }
]

// Array de Notícias
const noticias: Noticia[] = [
  {
    id: 1,
    title: "Portal do MEC",
    source: "MEC",
    category: "ENEM",
    link: "https://www.gov.br/mec/pt-br"
  },
  {
    id: 2,
    source: "G1",
    title: "G1 - Educação",
    link: "https://g1.globo.com/educacao/"
  },
  {
    id: 3,
    source: "Veja",
    title: "Veja - Estudantes",
    link: "https://veja.abril.com.br/noticias-sobre/estudantes"
  }
]

export const data = { cursos, noticias, enem, bemEstar, vocacao, produtividade }
