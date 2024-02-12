const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um estilo de folha de estilo"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a principal finalidade do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valores",
        "Atribuição de valores",
        "Concatenação de strings"
      ],
      correta: 0
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um framework popular",
        "Um modelo de objeto para manipular documentos HTML",
        "Uma linguagem de script"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar um elemento ao documento",
        "Adicionar um ouvinte de eventos a um elemento",
        "Remover um elemento do documento"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevar um elemento na página",
        "Içar uma declaração de variável ou função para o topo do escopo",
        "Anexar um evento a um elemento HTML"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis que nunca mudam, 'const' para variáveis que podem mudar",
        "'const' é usada para variáveis que nunca mudam, 'let' para variáveis que podem mudar",
        "Não há diferença entre 'let' e 'const'"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que retorna um valor",
        "Uma função passada como argumento para outra função",
        "Uma função que é chamada automaticamente ao iniciar o script"
      ],
      correta: 1
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca de gráficos",
        "Uma técnica para atualizar partes de uma página sem recarregar a página inteira",
        "Um novo tipo de variável em JavaScript"
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "stringToNumber()",
        "parseInt()",
        "toNumber()"
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
          }
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }