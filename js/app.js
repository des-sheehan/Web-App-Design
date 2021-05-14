
// ALERT BANNER ------------------------------------------------------

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p class="alert-banner-text"><strong>Alert:</strong> You have unread messages</p>
    <p class="alert-banner-close">X</p>
</div>
`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

// SEND BUTTON ------------------------------------------------------

// To stop page reloading on send
const sendButton = document.getElementById("send");

sendButton.addEventListener('click', e => {
    e.preventDefault();
})

// LINE GRAPH ------------------------------------------------------

const trafficCanvas = document.getElementById("traffic-chart")

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31" ],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        fill: true,
        borderWidth: 1,
        tension: 0.3,
    }]
}

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

