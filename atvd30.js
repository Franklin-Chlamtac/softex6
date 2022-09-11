const aluno = {
    nome: "franklin",
    idade: 24,
    nota: 7
  };
  
  const lista = ["carro",4, "clio"];
  
  for (const iterator of lista) {
    console.log(iterator);
  }
  
  for (const key in aluno) {
    console.log(aluno[key]);
  }