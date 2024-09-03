const tipos = [];
const despesas = [];
const colors = [
    '#f58992', '#f5b4b9', '#f7d3d6', '#d75a6e', '#b75a6e',
    '#a4a4a4', '#c4c4c4', '#f57f82', '#f5a3a6', '#7fb5b3'
];

// Configuração inicial do gráfico
const ctxBar = document.getElementById('mainChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: tipos, // Inicialmente vazio
        datasets: [{
            label: 'Despesas',
            data: despesas, // Inicialmente vazio
            backgroundColor: colors, // Aplica a paleta de cores
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: 'black'
                },
                grid: {
                    display: false // Oculta as linhas de grade no eixo X
                }
            },
            y: {
                ticks: {
                    color: 'black',
                    callback: function (value) {
                        return 'R$ ' + value; // Adiciona o símbolo de cifrão
                    }
                },
                grid: {
                    display: false // Oculta as linhas de grade no eixo Y
                },
                min: 0, // Valor mínimo inicial do eixo Y
                stepSize: 500, // Incremento de 500
                suggestedMax: 5000, // Máximo sugerido para mostrar a progressão
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Principais gastos',
                font: {
                    size: 18
                },
                color: 'black'
            },
            subtitle: {
                display: true,
                text: 'Dados fornecidos pelo usuário',
                font: {
                    size: 14
                },
                padding: {
                    bottom: 10
                },
                color: 'black'
            },
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': R$ ' + tooltipItem.raw;
                    }
                }
            }
        }
    }
});

// Função para atualizar o gráfico
function updateChart(tipo, despesa) {
    const index = tipos.indexOf(tipo);
    if (index !== -1) {
        despesas[index] = despesa;
    } else {
        tipos.push(tipo);
        despesas.push(despesa);
    }

    barChart.data.labels = tipos;
    barChart.data.datasets[0].data = despesas;
    barChart.data.datasets[0].backgroundColor = colors.slice(0, tipos.length).concat(colors.slice(tipos.length));
    barChart.update();
}

document.getElementById('addData').addEventListener('click', () => {
    const tipo = document.getElementById('tipo').value;
    const despesa = parseFloat(document.getElementById('despesa').value);

    if (tipo && !isNaN(despesa)) {
        updateChart(tipo, despesa);
        document.getElementById('tipo').value = '';
        document.getElementById('despesa').value = '';
    } else {
        alert('Por favor, insira um tipo válido e um valor numérico.');
    }
});
