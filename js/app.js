
// ALERT BANNER ------------------------------------------------------

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p class="alert-banner-text"><strong>Alert:</strong> You have unread messages</p>
    <p class="alert-banner-close">X</p>
</div>
`
//event listener on Alert Banner close X
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        //hide banner
        alertBanner.style.display = "none"
    }
});


// HEADER ALERT ------------------------------------------------------

// //hide Bell in Header
// document.getElementsByClassName("bell")[0].style.display = "none"


// SEND BUTTON ------------------------------------------------------

// To stop page reloading on send
const sendButton = document.getElementById("send");

sendButton.addEventListener('click', e => {
    e.preventDefault();
})

// LINE GRAPH ------------------------------------------------------

const trafficCanvas = document.getElementById("traffic-chart");
const trafficSelections = document.getElementById("traffic-options");

let trafficDataDefault = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, 0.4)',
        fill: true,
        borderWidth: 1,
        tension: 0.3,
    }]
};

let trafficDataHourly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, 0.4)',
        fill: true,
        borderWidth: 1,
        tension: 0.3,
    }]
};

let trafficDataDaily = {
    labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    datasets: [{
        data: [2000, 1250, 500, 900, 750, 1500, 2250],
        backgroundColor: 'rgba(116, 119, 191, 0.4)',
        fill: true,
        borderWidth: 1,
        tension: 0.3,
    }]
};

let trafficDataWeekly = {
    labels: ["W1", "W2", "W3", "W4"],
    datasets: [{
        data: [2250, 1250, 3000, 3500],
        backgroundColor: 'rgba(116, 119, 191, 0.4)',
        fill: true,
        borderWidth: 1,
        tension: 0.3,
    }]
};

let trafficDataMonthly = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [950, 1750, 3000, 1000, 2500, 3750, 1150, 850, 1250, 2000, 1750, 3500],
        backgroundColor: 'rgba(116, 119, 191, 0.4)',
        fill: true,
        borderWidth: 1,
        tension: 0.3,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duaration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
// Chart Update Function
const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update({
      duration: 800,
      easing: 'linear',
    });
  };

  //Chart remove Class 'chart-on' function.
const removeChartClass = () => {
    for (i=0 ; i < 4; i++) {
        trafficSelections.children[i].className = ""
    }
}


var trafficData = trafficDataDefault;

trafficSelections.addEventListener("click", e => {
    const element = e.target;

    // trafficSelections.firstElementChild.classList.remove('chart-on')

    if (element.textContent === "Hourly") {
        let trafficData = trafficDataHourly;
        updateChart(trafficChart, trafficData);
        removeChartClass();
        element.classList.add('chart-on');
    } else if (element.textContent === "Daily") {
        let trafficData = trafficDataDaily;  
        updateChart(trafficChart, trafficData);
        removeChartClass();
        element.classList.add('chart-on');
    } else if (element.textContent === "Weekly") {
        let trafficData = trafficDataWeekly;
        updateChart(trafficChart, trafficData);
        removeChartClass();
        element.classList.add('chart-on');
    } else if (element.textContent === "Monthly") {
        let trafficData = trafficDataMonthly;
        updateChart(trafficChart, trafficData);
        removeChartClass();
        element.classList.add('chart-on');
    }
});

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


// BAR CHART ------------------------------------------------------

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        labels: '# of Hits',
        data: [75, 155, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
             display: false
        }
       
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


// DONUT CHART ------------------------------------------------------

const mobileCanvas = document.getElementById("donut-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phone"],
    datasets: [{
        labels: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8',
        ]   
    }]
};

const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold',
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


// MESSAGING SECTION ------------------------------------------------------

const user = document.getElementById("user-field");
const message = document.getElementById("message-field");
const send = document.getElementById("send");

send.addEventListener('click', e => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value} `);
    }
});

// LOCAL STORAGE ------------------------------------------------------

// const cancelButton = document.getElementById('button-cancel');

// cancelButton.addEventListener('click', () => {
//     localStorage.removeItem(' insert what to clear here ');
//     recentSearchList.innerHTML = '';
//   });