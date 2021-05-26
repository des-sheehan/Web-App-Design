
// ALERT BANNER ------------------------------------------------------

const alertBanner = document.getElementById("alert");
const alertDot = document.getElementsByClassName("alert-dot")[0];

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
        alertDot.style.display = "none";
    }
});


// DROPDOWN ----------------------------------------------------------------

const alertBell = document.getElementById("alert-bell");
const dropContainer = document.getElementById("dropdown");

/* When the user clicks on the button,
removes banner
removes notification dot
toggles the dropdown content */

alertBell.addEventListener('click', e => {
    alertBanner.style.display = "none"
    alertDot.style.display = "none";
    dropContainer.classList.toggle("show");
})

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


const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");
const timeZoneSelection = document.getElementById("timezone")
const emailCheck = document.getElementById("emailCheck");
const publicCheck = document.getElementById("publicCheck");

// These are the HTML properties I want to target for checkboxes: 

//sets email to checked.
function emailOn() {
    emailCheck.checked = true;
}
//sets email to checked.
function emailOff() {
    emailCheck.checked = false;
}
//sets public profile to unchecked.
function publicOn() {
    publicCheck.checked = true;
}
//sets email to checked.
function publicOff() {
    emailCheck.checked = false;
}

// a function to load the settings depending on the local Storage values.
function loadSettings() {
    if (localStorage.email === "yes") {
        emailOn()
    } 
    if (localStorage.email === "no") {
        emailOff()
    }
    if (localStorage.public === "yes") {
        publicOn()
    } 
    if (localStorage.public === "no") {
        publicOff()
    }
    timeZoneSelection.selectedIndex = localStorage.timeZone;
}

// run the load Settings Function
loadSettings();

// on save button click; set items to local storage
saveButton.addEventListener('click', () => {
    localStorage.setItem('timeZone', timeZoneSelection.selectedIndex);

    if ( emailCheck.checked === true ) {
        localStorage.setItem("email", "yes")
    } else if ( emailCheck.checked === false ) {
        localStorage.setItem("email", "no")
    }

    if ( publicCheck.checked === true ) {
        localStorage.setItem("public", "yes")
    } else if ( publicCheck.checked === false ) {
        localStorage.setItem("public", "no")
    }

});

// Cancel button Clears local storage
cancelButton.addEventListener('click', () => {
    localStorage.clear();
  });



// AUTO COMPLETE ------------------------------------------------------

var members = [
    "Victoria Chambers",
    "Dale Byrd",
    "Dawn Wood",
    "Dan Oliver"
];

const memberSearch = document.getElementById('user-field');

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  // run the function on the input for member names
  autocomplete(memberSearch, members);