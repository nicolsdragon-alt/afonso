// Array fornecido
const dadosNicolasMakiyama = [
  { produto: "Câmera DSLR", categoria: "Câmera", quantidade: 5, preco: 3200 },
  { produto: "Lente 50mm", categoria: "Lente", quantidade: 8, preco: 950 },
  { produto: "Tripé", categoria: "Acessório", quantidade: 12, preco: 180 },
  { produto: "Flash", categoria: "Iluminação", quantidade: 7, preco: 420 }
];

// Seleciona o corpo da tabela no DOM
const tabelaCorpo = document.getElementById('tabela-corpo');

// Loop for...of percorrendo cada objeto do array
for (let item of dadosNicolasMakiyama) {
    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td><strong>${item.produto}</strong></td>
        <td><span class="categoria-badge">${item.categoria}</span></td>
        <td>${item.quantidade} un.</td>
        <td class="preco">${item.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</td>
    `;

    tabelaCorpo.appendChild(linha);
}