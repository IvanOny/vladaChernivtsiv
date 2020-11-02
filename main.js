google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Партія', 'кількість депутатів'],
        ['Єдина Альтернатива', 8],
        ['Слуга Народу', 4],
        ['Команда Михайлішина', 4],
        ['Європейська Солідарність', 4],
        ['Пропозиція', 4],
        ['Народний Контроль', 3],
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
        legend: 'none', //'left'
        colors: ['#ff6000', '#3ab34b', '#a92e22', '#4162ab', '#af3155', '#ce0606', '#04847b']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
    // chart.draw(data, options, {background: {fill: "#F4F4F4" } });
}

const eaButton = document.querySelector('#eaButton');
eaButton.style.background = '#ff6000';
eaButton.style.color = 'white';
const snButton = document.querySelector('#snButton');
snButton.style.background = '#3ab34b';
snButton.style.color = 'white';
const kmButton = document.querySelector('#kmButton');
kmButton.style.background = '#a92e22';
kmButton.style.color = 'white';
const esButton = document.querySelector('#esButton');
esButton.style.background = '#4162ab';
esButton.style.color = 'white';
const prButton = document.querySelector('#prButton');
prButton.style.background = '#af3155';
prButton.style.color = 'white';
const nkButton = document.querySelector('#nkButton');
nkButton.style.background = '#ce0606';
nkButton.style.color = 'white';
const rmButton = document.querySelector('#rmButton');
rmButton.style.background = '#04847b';
rmButton.style.color = 'white';
const chartButton = document.querySelector('#chartButton');
chartButton.style.background = 'yellow';
chartButton.style.color = 'red';

eaButton.addEventListener('click', (e) => {
    e.preventDefault();
    // document.querySelector('#ea').classList.add('bg-dark');
    // document.querySelector('#header').style.background = 'yellow';

    const openEA = document.querySelector('#piechart_3d');
    // const eaDeputees = document.querySelector('#eaDeputees')
    // // const aboutEA = document.createElement('dev');
    // // aboutEA.textContent = 'Info about EA';
    // eaDeputees.innerHTML = '<div> Deputee 1 </div>';
    // openEA.replaceWith(eaDeputees, " Info about deputees");

    openEA.innerHTML = '<div class="image"> <img class="image__img" src="images/good_deeds.jpg" alt="party logo"> <div class="image__overlay"> <div class="image__title">Братчик Юрчик</div> <p class="image__description">співзасновник "Пошти Майдану"</p></div></div> <div class="image"> <img class="image__img" src="images/good_deeds.jpg" alt="party logo"> <div class="image__overlay"> <div class="image__title">Братчик Юрчик</div> <p class="image__description">співзасновник "Пошти Майдану"</p></div></div>';


});

snButton.addEventListener('click', (e) => {
    e.preventDefault();
    const openSN = document.querySelector('#piechart_3d');

    openSN.innerHTML = "<div class='dep' id='snDep1'> <h1> Віталій Другановський </h1> </div > <div class='dep' id='eaDep2'> Deputee 2 </div > <div class='dep' id='eaDep3'> Deputee 3 </div > <div class='dep' id='eaDep4'> Deputee 4 </div > <div class='dep' id='snDep1'> <h1> Віталій Другановський </h1> </div > <div class='dep' id='eaDep2'> Deputee 2 </div > <div class='dep' id='eaDep3'> Deputee 3 </div > <div class='dep' id='eaDep4'> Deputee 4 </div > <div class='dep' id='snDep1'> <h1> Віталій Другановський </h1> </div > <div class='dep' id='eaDep2'> Deputee 2 </div > <div class='dep' id='eaDep3'> Deputee 3 </div > <div class='dep' id='eaDep4'> Deputee 4 </div > ";
});



















// 