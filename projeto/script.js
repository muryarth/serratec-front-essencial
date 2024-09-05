const calcularIdade = () => {
  const dataAtual = new Date();
  const dataNascimento = new Date("12-22-1998");
  document.getElementById("minha-idade").innerText = Math.floor(
    (dataAtual - dataNascimento) / (1000 * 60 * 60 * 24 * 365.25)
  );
};

calcularIdade();