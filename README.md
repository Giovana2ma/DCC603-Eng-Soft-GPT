# DCC603-Eng-Soft-GPT
Implementation of a Recommendation System using ChatGPT api
<pre>
*Membros da equipe e papel*
  Clara Costa Fonseca: Front end dev
  Igor Joaquim da Silva Costa: Fullstack dev
  João Luiz Figueiredo Cerqueira: Back end dev
  Giovana Assis da Matta Machado: Back end dev


*Escopo do sistema*
  Objetivo: 
    Um sistema de recomendação baseado em chatgpt, com foco em filmes. O usuário apresenta um ou dois textos relatando qual tipo de filme ele quer assistir e o sistema retorna uma lista de recomendações.
  Features: 
    Entrada de um único texto com ideias/temas/exemplos de filme e geração automática de recomendação.
    Entrada de dois textos com ideias/temas/exemplos de filme e recomendação de filmes que concordam com os dois textos.
    Apresentação dos filmes (capa/rating/link imdb/disponibilidade em streaming) focada em UX
    Integração parcial com ChatGPT

*Tecnologias*
  Linguagem: javascript
  Back end: Node.js
  Front end: Vue js ou React js
</pre>

<h2>Backlog do Produto&nbsp;</h2>
<ol>
<li>Como usu&aacute;rio, eu gostaria de&nbsp; sugerir g&ecirc;nero/ator/nome de um filme/ ano de lan&ccedil;amento e receber uma lista de filmes similares.</li>
<li>Como usu&aacute;rio, eu gostaria de&nbsp; combinar duas sugest&otilde;es e receber uma lista de filmes similares.</li>
<li>Como usu&aacute;rio, eu gostaria de conhecer a data de lan&ccedil;amento de cada sugest&atilde;o, al&eacute;m de visualizar o poster de cada filme, sem precisar pesquisar.</li>
<li>Como usu&aacute;rio, eu gostaria de acessar o site IMDB de cada sugest&atilde;o, al&eacute;m de visualizar o seu rating IMDB.</li>
<li>Como usu&aacute;rio, eu gostaria de poder apertar um bot&atilde;o e gerar ainda mais recomenda&ccedil;&otilde;es.</li>
<li>Como usu&aacute;rio, eu gostaria de salvar listas de sugest&otilde;es.</li>
<li>Como usu&aacute;rio, eu gostaria de conhecer o diretor de cada sugest&atilde;o, sem precisar pesquisar.</li>
<li>Como usu&aacute;rio, eu gostaria de&nbsp; criar uma conta na plataforma.</li>
<li>Como usu&aacute;rio, eu gostaria de&nbsp; compartilhar minhas listas salvas.</li>
<li>Como usu&aacute;rio, eu gostaria de acessar o perfil de outros usu&aacute;rios e ver suas listas salvas.</li>
</ol>
<h2>Backlog da Sprint&nbsp;</h2>
<h3>1. Como usu&aacute;rio, eu gostaria de sugerir g&ecirc;nero/ator/nome de um filme/ ano de lan&ccedil;amento e receber uma lista de filmes similares.</h3>
<h4>FullStack</h4>
<ul>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Configura&ccedil;&atilde;o Inicial Servidor(es)</li>
<ul>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Configurar express</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Configurar Vue.js</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Configurar Estrutura de arquivos</li>
</ul>
</ul>
<h4>Backend</h4>
<ul>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Configurar o endpoint que vai receber a requisi&ccedil;&atilde;o.</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Explorar a documenta&ccedil;&atilde;o da API do ChatGPT.</li>
<li>[<span style="color: #990000;"><strong>Giovana/</strong></span><span style="color: #0000ff;">Jo&atilde;o</span>] Desenvolver os prompts-contexto da API.</li>
<ul>
<li>[<span style="color: #990000;"><strong>Giovana/</strong></span><span style="color: #0000ff;">Jo&atilde;o</span>] Conjunto de prompts para garantir que a API retorne uma lista em um formato f&aacute;cil de lidar.</li>
<li>[<span style="color: #990000;"><strong>Giovana/</strong></span><span style="color: #0000ff;">Jo&atilde;o</span>] Conjunto de prompts para garantir que a API retorne uma lista exclusivamente de filmes e s&eacute;ries.</li>
<li>[<span style="color: #990000;"><strong>Giovana/</strong></span><span style="color: #0000ff;">Jo&atilde;o</span>] Conjunto de prompts para fazer com que a API seja mais assertiva.</li>
</ul>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Desenvolver a(s) chamada(s) de API pro ChatGPT.</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Integralizar a resposta da API do ChatGPT com as imagens (e informa&ccedil;&otilde;es IMDB) em formato json consistente. Em baixo tem a parte do imdb&nbsp;</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Testes Manuais.</li>
</ul>
<h4>Frontend</h4>
<ul>
<li>[<span style="color: #10d520;"><strong>Igor/</strong></span><span style="color: #74d8ff;"><strong>Clara</strong></span>] Desenvolver design da p&aacute;gina de sugest&otilde;es.</li>
<li>[<span style="color: #10d520;"><strong>Igor/</strong></span><span style="color: #74d8ff;"><strong>Clara</strong></span>] Implementar o design inicial da p&aacute;gina de sugest&otilde;es.</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Adaptar design inicial para que os campos de texto do design conversem com a API para o servidor.</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Transformar a tela de sugest&otilde;es em um componente Vue.</li>
<li>[<span style="color: #10d520;"><strong>Igor/</strong></span><span style="color: #74d8ff;"><strong>Clara </strong></span>] Atribuir elementos de UX/UI na implementa&ccedil;&atilde;o do design.</li>
<li>[<span style="color: #74d8ff;"><strong>Clara</strong></span>] Testes Manuais.</li>
</ul>
<h3>2. Como usu&aacute;rio, eu gostaria de combinar duas sugest&otilde;es e receber uma lista de filmes similares.</h3>
<h4>Backend</h4>
<ul>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Configurar o endpoint que vai receber a requisi&ccedil;&atilde;o.</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Expandir hist&oacute;ria (1) para acomodar a hist&oacute;ria (2).</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Desenvolver os prompts-contexto da API.</li>
<ul>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Conjunto de prompts para garantir que a API retorne uma lista em um formato f&aacute;cil de lidar.</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Conjunto de prompts para garantir que a API retorne uma lista exclusivamente de filmes.</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Conjunto de prompts para fazer com que a API seja mais assertiva.</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Conjunto de prompts para fazer com que a API considere os dois textos.</li>
</ul>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Integralizar a resposta da API do ChatGPT com as imagens (e informa&ccedil;&otilde;es IMDB) em formato json consistente.</li>
<li>[<span style="color: #0000ff;">Jo&atilde;o</span>] Testes Manuais.</li>
</ul>
<h4>Frontend</h4>
<ul>
<li>[<span style="color: #10d520;"><strong>Igor/</strong></span><span style="color: #74d8ff;"><strong>Clara</strong></span>] Desenvolver design da p&aacute;gina de sugest&otilde;es.</li>
<li>[<span style="color: #10d520;"><strong>Igor/</strong></span><span style="color: #74d8ff;"><strong>Clara</strong></span>] Implementar o design da p&aacute;gina de sugest&otilde;es.</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Transformar a segunda tela de sugest&otilde;es em um componente Vue.</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Integralizar as duas vers&otilde;es de p&aacute;gina de sugest&otilde;es (Client Server Router)</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Integralizar os campos de texto do design com a chamada de API para o servidor.</li>
<li>[ ] Desenvolver design da visualiza&ccedil;&atilde;o das sugest&otilde;es.</li>
<li>[ ] Implementar design da visualiza&ccedil;&atilde;o das sugest&otilde;es.</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Atribuir elementos de UX/UI na implementa&ccedil;&atilde;o do design.</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Fazer com que qualquer parte da recomenda&ccedil;&atilde;o seja um link para o IMDB do filme.</li>
<li>[<span style="color: #74d8ff;"><strong>Clara</strong></span>] Testes Manuais.</li>
</ul>
<h3>3. Como usu&aacute;rio, eu gostaria de acessar o site IMDB de cada sugest&atilde;o, al&eacute;m de visualizar o seu rating IMDB.</h3>
<h4>Backend</h4>
<ul>
<li>[<span style="color: #990000;"><strong>Giovana</strong></span>] Configurar a API do IMDB para receber as requisi&ccedil;&otilde;es certas.</li>
<li>[<span style="color: #990000;"><strong>Giovana</strong></span>] Explorar a API do IMDB.</li>
<li>[<span style="color: #990000;"><strong>Giovana</strong></span>] Desenvolver o c&oacute;digo que gera, para cada filme, o link, o rating e o ano de lan&ccedil;amento a partir da API do IMDB.</li>
<li>[<span style="color: #990000;"><strong>Giovana</strong></span>] Integralizar a resposta da API em formato json consistente.</li>
<li>[<span style="color: #990000;"><strong>Giovana</strong></span>] Testes Manuais.</li>
</ul>
<h4>Frontend</h4>
<ul>
<li>[<span style="color: #10d520;"><strong>Igor/</strong></span><span style="color: #74d8ff;"><strong>Clara</strong></span>] Desenvolver design dos cards das sugest&otilde;es.</li>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Implementar design dos cards das sugest&otilde;es.</li>
</ul>
<h3>4. Como usu&aacute;rio, eu gostaria de conhecer a data de lan&ccedil;amento de cada sugest&atilde;o, al&eacute;m de visualizar o poster de cada filme, sem precisar pesquisar.</h3>
<h4>Backend</h4>
<ul>
<li>[<span style="color: #990000;"><strong>Giovana</strong></span>] Desenvolver o c&oacute;digo que encontra o poster do filme a partir do seu nome.</li>
</ul>
<h4>Frontend</h4>
<ul>
<li>[<span style="color: #10d520;"><strong>Igor</strong></span>] Fazer com que qualquer parte da recomenda&ccedil;&atilde;o seja um link para o IMDB do filme.</li>
</ul>
<h3>Configura&ccedil;&atilde;o do Ambiente de Desenvolvimento</h3>
<ul>
<li>[<strong>Frontend|Backend</strong>] Instalar o Node.js + npm seguindo as instru&ccedil;&otilde;es em:<a href="https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos" target="_blank" rel="noopener"> https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos</a></li>
<li>[<strong>Frontend|Backend</strong>] Instalar o Express seguindo as instru&ccedil;&otilde;es em:<a href="https://expressjs.com/pt-br/starter/installing.html" target="_blank" rel="noopener"> https://expressjs.com/pt-br/starter/installing.html</a></li>
<li>[<strong>Frontend|Backend</strong>] Instalar o Insomnia em:<a href="https://insomnia.rest/download" target="_blank" rel="noopener"> https://insomnia.rest/download</a></li>
<li>[<strong>Frontend|Backend</strong>] Instalar o Vue (Cli)&nbsp; em:<a href="https://insomnia.rest/download" target="_blank" rel="noopener"> </a><span style="text-decoration: underline;">https://br.vuejs.org/v2/guide/installation.html</span></li>
<li>[<strong>Frontend</strong> ] Instalar a extens&atilde;o Live Server do VSCode.</li>
</ul>

*Diagrama de Sequências*

![Diagrama de sequência Eng Software](https://github.com/Giovana2ma/DCC603-Eng-Soft-GPT/assets/104951500/6ac9ec98-fafa-4a56-88ac-d8c69387de1f)
