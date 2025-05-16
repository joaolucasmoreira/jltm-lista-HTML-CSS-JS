document.getElementById("btnCalc").addEventListener("click", (e) => {
    e.preventDefault();
  const precoUnitario = document.getElementById("preco-unitario").value;
  const quantidade = document.getElementById("quantidade").value;
  const desconto = document.getElementById("desconto").value;

  const vlTotal = precoUnitario * quantidade;

  const vlDesconto = (vlTotal / 100) * desconto;

  const resultado = vlTotal - vlDesconto;

  const arredonda = Number.isInteger(resultado) ? `${resultado}.00` : `${resultado.toFixed(2)}`

  const divResultado = document.getElementById("result");

  divResultado.innerHTML = `<h3>O valor total é: R$${arredonda}</h3>`;
});
