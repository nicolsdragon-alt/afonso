const dadosNicolasMakiyama = [
  { produto: "Câmera DSLR", categoria: "Câmera", quantidade: 5, preco: 3200 },
  { produto: "Lente 50mm", categoria: "Lente", quantidade: 8, preco: 950 },
  { produto: "Tripé", categoria: "Acessório", quantidade: 12, preco: 180 },
  { produto: "Flash", categoria: "Iluminação", quantidade: 7, preco: 420 }
];


const tabelaCorpo = document.getElementById('tabela-corpo');


function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


for (let i = 0; i < dadosNicolasMakiyama.length; i++) {
    const item = dadosNicolasMakiyama[i];
    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td><strong>${item.produto}</strong></td>
        <td><span class="categoria-badge">${item.categoria}</span></td>
        <td>${item.quantidade} un.</td>
        <td class="preco">${formatarMoeda(item.preco)}</td>
    `;

    tabelaCorpo.appendChild(linha);
}