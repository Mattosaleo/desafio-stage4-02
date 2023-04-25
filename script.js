// Criando a lista de estudantes
const estudantes = [
    { nome: 'Alice', nota1: 8.5, nota2: 7.0 },
    { nome: 'Bob', nota1: 7.0, nota2: 6.5 },
    { nome: 'Carol', nota1: 6.0, nota2: 8.0 },
    { nome: 'David', nota1: 7.5, nota2: 7.5 },
    { nome: 'Eve', nota1: 9.0, nota2: 8.0 }
  ];
  
  // Função para calcular a média das notas de um estudante
  function calcularMedia(estudante) {
    const { nota1, nota2 } = estudante;
    return (nota1 + nota2) / 2;
  }
  
  // Verificando se cada estudante obteve sucesso ou não
  estudantes.forEach(estudante => {
    const media = calcularMedia(estudante);
    if (media >= 7) {
      alert(`${estudante.nome} obteve média ${media} \n e foi aprovado no concurso.`);
    } else {
      alert(`${estudante.nome} obteve média ${media} \n e não foi aprovado no concurso.`);
    }
  });
  
