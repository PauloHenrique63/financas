const tipos = ['Alimentação', 'Saúde', 'Lazer', 'Moradia', 'Diversos'];
const despesas = [80000, 34000, 27000, 10000, 9000];
const Alimentação = [60000, 20000, 15000, 5000, 4500];
const Saúde = [10000, 5000, 5000, 2000, 1500];
const Lazer = [5000, 3000, 3000, 1000, 1000];
const Moradia = [3000, 2000, 2000, 500, 500];
const Diversos = [2000, 4000, 2000, 1500, 1500];
const colors = {
    Alimentação: 'rgba(255, 99, 132, 0.8)',
    Saúde: 'rgba(54, 162, 235, 0.8)',
    Lazer: 'rgba(255, 206, 86, 0.8)',
    Moradia: 'rgba(75, 192, 192, 0.8)',
    Diversos: 'rgba(153, 102, 255, 0.8)'
};


const ctxBar = document.getElementById('mainChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: tipos,
        datasets: [{
    label: '',
    data: despesas,
    backgroundColor: ['rgba(255, 99, 132, 0.8)'],
        }]
        },
        options: {
    responsive: true,
    scales:{
        x:{
    ticks: {
        color: 'black'
    }
        },
        y: {
    ticks: {
        color: 'black'
    }
        }
    },
    plugins: {
        title: {
    display: true,
    text: 'Principais gastos',
    font: {
        size: 18
    },color:'black'

        },
        subtitle: {
    display: true,
    text: 'Dados fornecidos pelo usuario',
    font: {
        size: 14
    },
    padding: {
        bottom: 10
    },color:'black'

        },
        legend: {
    display: false,
        },
        tooltip: {
    callbacks: {
        label: function(tooltipItem) {
    return tooltipItem.label + ': ' + tooltipItem.raw + ' ';
        }
    }
        }
    }
        }
    });



    