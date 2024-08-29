const oceanos = ['Pacífico', 'Atlântico', 'Índico', 'Antártico', 'Ártico'];
const quantidadeLixo = [80000, 34000, 27000, 10000, 9000];
const plasticos = [60000, 20000, 15000, 5000, 4500];
const metais = [10000, 5000, 5000, 2000, 1500];
const vidros = [5000, 3000, 3000, 1000, 1000];
const papeis = [3000, 2000, 2000, 500, 500];
const outros = [2000, 4000, 2000, 1500, 1500];
const colors = {
    plasticos: 'rgba(255, 99, 132, 0.8)',
    metais: 'rgba(54, 162, 235, 0.8)',
    vidros: 'rgba(255, 206, 86, 0.8)',
    papeis: 'rgba(75, 192, 192, 0.8)',
    outros: 'rgba(153, 102, 255, 0.8)'
};
const anos = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const pacifico = [70000, 72000, 75000, 78000, 80000, 82000, 84000, 86000, 88000];
const atlantico = [25000, 26000, 27000, 28500, 30000, 31000, 32000, 33000, 34000];
const indico = [20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000];
const antartico = [8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000];
const artico = [7000, 7200, 7500, 8000, 8500, 9000, 9500, 10000, 10500];



const ctxBar = document.getElementById('mainChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: oceanos,
        datasets: [{
    label: 'Quantidade de Lixo (toneladas)',
    data: quantidadeLixo,
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
    text: 'Distribuição de Lixo Marinho por Oceano',
    font: {
        size: 18
    },color:'black'

        },
        subtitle: {
    display: true,
    text: 'Dados aproximados baseados em estimativas de 2023',
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
    return tooltipItem.label + ': ' + tooltipItem.raw + ' toneladas';
        }
    }
        }
    }
        }
    });





const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
    labels: anos,
    datasets: [
        {
    label: 'Pacífico',
    data: pacifico,
    borderColor: 'rgba(255, 99, 132, 1)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    fill: true,
        },
        {
    label: 'Atlântico',
    data: atlantico,
    borderColor: 'rgba(54, 162, 235, 1)',
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    fill: true
        },
        {
    label: 'Índico',
    data: indico,
    borderColor: 'rgba(75, 192, 192, 1)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    fill: true
        },
        {
    label: 'Antártico',
    data: antartico,
    borderColor: 'rgba(153, 102, 255, 1)',
    backgroundColor: 'rgba(153, 102, 255, 0.2)',
    fill: true
        },
        {
    label: 'Ártico',
    data: artico,
    borderColor: 'rgba(255, 159, 64, 1)',
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    fill: true
        }
    ]
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
    text: 'Tendência Temporal do Lixo Marinho por Oceano',
    color: 'black',
    font: {
        size: 18
    }
        },
        subtitle: {
    display: true,
    text: 'Dados fictícios',
    font: {
        size: 14
    },
    color:'black'
        },
        legend: {
    labels: {
        color: 'black'
    }
        },
        tooltip: {
    callbacks: {
        label: function(tooltipItem) {
    return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' toneladas';
        }
    }
        }
    }
        }
    });



