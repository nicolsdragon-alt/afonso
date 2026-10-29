// Array fornecido
const dadosNicolasMakiyama = [
  { produto: "Câmera DSLR", categoria: "Câmera", quantidade: 5, preco: 3200 },
  { produto: "Lente 50mm", categoria: "Lente", quantidade: 8, preco: 950 },
  { produto: "Tripé", categoria: "Acessório", quantidade: 12, preco: 180 },
  { produto: "Flash", categoria: "Iluminação", quantidade: 7, preco: 420 }
];

// Seleciona o corpo da tabela no DOM
const tabelaCorpo = document.getElementById('tabela-corpo');

// Função para formatar valores para o padrão de moeda brasileiro (BRL)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Percorre o array e cria as linhas da tabela dinamicamente
dadosNicolasMakiyama.forEach(item => {
    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td><strong>${item.produto}</strong></td>
        <td><span class="categoria-badge">${item.categoria}</span></td>
        <td>${item.quantidade} un.</td>
        <td class="preco">${formatarMoeda(item.preco)}</td>
    `;

    tabelaCorpo.appendChild(linha);
});