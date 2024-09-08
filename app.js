// app.js

// Obtém as referências dos links e do botão
const linkSobre = document.querySelector('a[href="#area-sobre"]');
const linkContato = document.querySelector('a[href="#area-contato"]');
const btnPesquisar = document.querySelector('a[href="#area-pesquisa"]');

// Obtém as referências das seções
const secaoSobre = document.querySelector('.area-sobre');
const secaoContato = document.querySelector('.area-contato');
const secaoPesquisa = document.querySelector('.area-pesquisa');

// Selecione o botão "Mande um email"
const botaoEmail = document.querySelector('.area-contato button');

/*
--------------------------------------- 
          Área dos Botões 
---------------------------------------
*/

function rolarPara(elemento) {
  elemento.scrollIntoView({ behavior: 'smooth' });
}

linkSobre.addEventListener('click', (event) => {
  event.preventDefault();
  rolarPara(secaoSobre);
});

linkContato.addEventListener('click', (event) => {
  event.preventDefault();
  rolarPara(secaoContato);
});

btnPesquisar.addEventListener('click', (event) => {
  event.preventDefault();
  rolarPara(secaoPesquisa);
});

botaoEmail.addEventListener('click', function() {
      // Cria um link para enviar um email
      const linkEmail = document.createElement('a');
      linkEmail.href = 'mailto:thiago-soares@uergs.edu.br?subject=Contato%20pelo%20seu%20site'; //
      linkEmail.click();
});

/*
--------------------------------------- 
          Área de Pesquisa 
---------------------------------------
*/

function pesquisar() {

  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Inicializa uma string vazia para armazenar os resultados
  
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
  if (!campoPesquisa) {
      section.innerHTML = '<p class="resposta">Você deve digitar algo para pesquisar</p>'
      return 
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let link = "";
  let tags = "";

      // Itera sobre cada dado da pesquisa e constrói o HTML dos resultados
      for (let dado of dados) {
          titulo = dado.titulo.toLowerCase();
          descricao = dado.descricao.toLowerCase();
          link = dado.link.toLowerCase();
          tags = dado.tags.toLowerCase();

          if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || link.includes(campoPesquisa))
          {
          // Cria um novo elemento HTML para cada resultado
          resultados += `
            <div class="bloco-resultado">
              <h3 class="result-pesquisa-titulo">${dado.titulo}</h3>
              <div class="result-conteudo">
                  <img src="${dado.img}" alt="${dado.alt}">
                  <p class="result-pesquisa-descricao">
                      ${dado.descricao} 
                  </p>
              </div>
              <a href="${dado.link}" target="_blank" class="result-pesquisa-link"><button>Para saber mais, clique aqui.</button></a>
            </div>
          `;
          }
      }

      if (!resultados) {
          section.innerHTML = '<p class="resposta">Não há resultados correlatos a sua pesquisa!</p>'
          return
      }

      // Atualiza o conteúdo da seção com os resultados gerados
      section.innerHTML = resultados;

}