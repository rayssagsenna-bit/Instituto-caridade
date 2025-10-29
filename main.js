function inicializarFormulario() {
  const form = document.getElementById("formCadastro");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if (nome === "" || email === "" || telefone === "") {
      alert("Preencha todos os campos!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Digite um e-mail válido!");
      return;
    }

    if (telefone.length < 10) {
      alert("Digite um número de telefone válido!");
      return;
    }

    const dados = { nome, email, telefone };
    localStorage.setItem("cadastro", JSON.stringify(dados));

    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
}