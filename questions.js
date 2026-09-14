/**
 * ARQUIVO: questions.js
 * DESCRIÇÃO: 10 perguntas focadas em Usabilidade na ISO/IEC 25000 e ISO/IEC 25010, baseadas no vídeo.
 */

const questions = [
  {
    question: "De acordo com o vídeo, qual é a definição de usabilidade na ISO/IEC 25010:2011?",
    options: [
      "Apenas a facilidade de uso e a estética de um sistema.",
      "A capacidade de um produto permitir que usuários específicos atinjam objetivos com efetividade, eficiência e satisfação em um contexto determinado.",
      "Uma nota pronta que determina se qualquer software é bom ou ruim.",
      "A rapidez com que um sistema executa suas funções, independentemente do usuário."
    ],
    answer: 1
  },
  {
    question: "A família de normas ISO/IEC 25000 é conhecida por qual sigla?",
    options: [
      "SUS",
      "NuDS",
      "SQuaRE",
      "LGPD"
    ],
    answer: 2
  },
  {
    question: "Quantas e quais são as subcaracterísticas da usabilidade no modelo de 2011 apresentado no vídeo?",
    options: [
      "Três: Efetividade, Eficiência e Satisfação.",
      "Quatro: Prevenir, Testar, Acompanhar e Melhorar.",
      "Seis: Reconhecibilidade da adequação, Capacidade de aprendizado, Operabilidade, Proteção contra erros do usuário, Estética da interface e Acessibilidade.",
      "Cinco: Interface, Software, Concorrência, Segurança e Fatores Humanos."
    ],
    answer: 2
  },
  {
    question: "No estudo de caso do Nubank, como a subcaracterística 'Proteção contra erros do usuário' pode ser observada?",
    options: [
      "Pela cor roxa da marca na interface do aplicativo.",
      "Pela clareza ao confirmar o valor, destinatário e autenticação antes de concluir uma transação.",
      "Pelo uso de leitores de tela e textos redimensionáveis.",
      "Pela facilidade de encontrar o botão de suporte na tela inicial."
    ],
    answer: 1
  },
  {
    question: "Como a 'eficiência' pode ser medida em um teste de usabilidade da função Pix no aplicativo, de acordo com o vídeo?",
    options: [
      "Pelo percentual de transferências concluídas corretamente.",
      "Pelo uso de um questionário pós-tarefa (SUS).",
      "Pelo tempo, quantidade de telas, cliques e passos necessários.",
      "Pelo desempenho dos usuários separados apenas por idade."
    ],
    answer: 2
  },
  {
    question: "Em que momento do ciclo de vida do software a usabilidade deve ser considerada?",
    options: [
      "Apenas na etapa de testes, antes do lançamento.",
      "Apenas durante a fase de requisitos e pesquisa.",
      "Apenas na etapa de operação e acompanhamento de chamados.",
      "Durante todo o ciclo de vida: requisitos, pesquisa, projeto, desenvolvimento, testes, operação e melhoria."
    ],
    answer: 3
  },
  {
    question: "Por que o Banco do Brasil é apresentado como um 'case de sucesso' no vídeo?",
    options: [
      "Porque sua interface é considerada perfeita e sem erros para todos os usuários.",
      "Devido à combinação entre escala, variedade de serviços digitais e disponibilidade de jornadas completas no aplicativo.",
      "Porque o aplicativo foi certificado oficialmente pela norma ISO/IEC 25010.",
      "Porque possui o sistema de design NuDS, com foco exclusivo em acessibilidade."
    ],
    answer: 1
  },
  {
    question: "O que o caso histórico do Therac-25 nos ensina sobre falhas em sistemas críticos?",
    options: [
      "Que acidentes graves são causados apenas por interfaces difíceis de usar (problema de usabilidade isolado).",
      "Que a ausência de barreiras independentes e a combinação de falhas de software, fatores humanos e segurança podem causar graves acidentes.",
      "Que uma interface bonita garante a segurança do sistema contra erros de software.",
      "Que os usuários sempre percebem e conseguem recuperar os erros se a tela for simples."
    ],
    answer: 1
  },
  {
    question: "Na avaliação da usabilidade, o que a subcaracterística 'Acessibilidade' exige em um aplicativo bancário?",
    options: [
      "Que o aplicativo tenha uma hierarquia visual complexa para segurança.",
      "Que o sistema permita aos usuários aprender as funções sem treinamento excessivo.",
      "Contraste adequado, suporte a leitores de tela, textos redimensionáveis e informações que não dependam somente de cores ou gestos.",
      "Que o usuário saiba se o sistema serve para a tarefa antes de começar a usar."
    ],
    answer: 2
  },
  {
    question: "Qual é a principal lição ao comparar os casos de sucesso (Banco do Brasil) e de falha (Therac-25)?",
    options: [
      "Uma interface bonita garante a usabilidade, e problemas técnicos não afetam o usuário.",
      "Em sistemas críticos, a avaliação da usabilidade pode ser ignorada se o software for rápido.",
      "A usabilidade em saúde e bancos é uma questão estratégica e de segurança, devendo considerar o usuário, o contexto e as consequências de um erro.",
      "O acompanhamento de métricas, como a taxa de conclusão, é necessário apenas para aplicativos financeiros, mas não para equipamentos médicos."
    ],
    answer: 2
  }
];
