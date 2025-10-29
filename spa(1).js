const templates = {
  home: `
    <h2>Bem-vindo ao Instituto Caridade</h2>
    <p>Somos uma organização sem fins lucrativos dedicada a promover ações sociais e melhorar a qualidade de vida das pessoas em situação de vulnerabilidade.</p>
  `,
  projetos: `
    <h2>Nossos Projetos</h2>
    <ul>
      <li>Projeto Esperança – apoio a famílias carentes</li>
      <li>Projeto Jovem Futuro – incentivo à educação</li>
      <li>Projeto Saúde para Todos – ações comunitárias</li>
    </ul>
  `,
  cadastro: `
    <h2>Cadastro de Voluntário</h2>
    <form id="formCadastro">
      <label>Nome completo:</label>
      <input type="text" id="nome" placeholder="Digite seu nome" required>
      <label>E-mail:</label>
      <input type="email" id="email" placeholder="Digite seu e-mail" required>
      <label>Telefone:</label>
      <input type="text" id="telefone" placeholder="(xx) xxxxx-xxxx" required>
      <button type="submit">Enviar</button>
    </form>
  `
};

function carregarPagina(pagina) {
  document.getElementById("conteudo").innerHTML = templates[pagina];
  if (pagina === "cadastro") {
    inicializarFormulario();
  }
}

document.querySelectorAll(".link").forEach(btn => {
  btn.addEventListener("click", () => {
    carregarPagina(btn.dataset.page);
  });
});

window.addEventListener("load", () => {
  carregarPagina("home");
});