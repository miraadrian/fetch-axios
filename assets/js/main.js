// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json=> carregaElemPagina(json))
//   .catch(e => console.error(e))

axios('pessoas.json').then(resposta => carregaElemPagina(resposta.data));

function carregaElemPagina(json){
  const table = document.createElement('table');
  for(let pessoa of json){
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.email;
    tr.appendChild(td);
    
    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td)

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}

//tr - linha
//td - coluna