google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Партія', 'кількість депутатів'],
        ['Єдина Альтернатива', 11],
        ['Команда Михайлішина', 6],
        ['Європейська Солідарність', 6],
        ['Пропозиція', 6],
        ['Слуга Народу', 5],
        ['Народний Контроль', 5],
        ['Рідне місто', 3]
    ]);

    var options = {
        // title: 'Партії Чернівецької Міської Ради 2020',
        titleTextStyle: {
            color: 'Cyan',
            fontSize: 22,
        },
        // subtitle: 'Кількість депутатів та відсоткове співвідношення',
        slices: {
            0: { offset: 0.04 },
            1: { offset: 0.04 },
            2: { offset: 0.04, /* color: 'transparent' */ },
            3: { offset: 0.04 },
            4: { offset: 0.04 },
            5: { offset: 0.04 },
            6: { offset: 0.04 },
        },
        pieHole: 0.6,
        // is3D: true,
        legend: 'none', //'left',
        colors: ['#ff6000', '#3ab34b', '#a92e22', '#4162ab', '#af3155', '#ce0606', '#04847b']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
    // chart.draw(data, options, {background: {fill: "#F4F4F4" } });
}


// colors: ['#ff6000', '#3ab34b', '#a92e22', '#4162ab', '#af3155', '#ce0606', '#04847b']

// const navSlide = () => {
//     const parties = document.querySelector('.navParties');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
//     // const eaDeputees = document.querySelector('.eaDeputees');


//     parties.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         // eaDeputees.classList.toggle('eaActive');


//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = ''
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease-out forwards ${index / 4 + 0.3}s`
//             }
//         });
//     });
// }

// const eaNav = () => {
//     const eaLink = document.querySelector('.eaLink2');
//     const eaDeputees = document.querySelector('.eaDeputees');
//     const kmLink = document.querySelector('#kmLink');
//     const kmDeputees = document.querySelector('.kmDeputees');

//     eaLink.addEventListener('click', () => {
//         eaDeputees.classList.toggle('eaActive');

//         // eaDeputees.forEach((link, index) => {
//         //     if (link.style.animation) {
//         //         link.style.animation = ''
//         //     } else {
//         //         link.style.animation = `navLinkFade 0.5s ease-out forwards ${index / 4 + 0.3}s`
//         //     }
//         // });
//     });
    
//     kmLink.addEventListener('click', () => {
//         kmDeputees.classList.toggle('kmActive');

//     });
// }

// const app = () => {
//     navSlide();
//     eaNav();
// }

// app();











// 