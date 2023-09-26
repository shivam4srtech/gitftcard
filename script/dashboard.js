var divs = ["dashBoard", "mobileApp", "affiliate", "commission", "affiGroup", "analytics"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
// =======================================CHART=================================
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
['Mon', 20, 28, 38, 45],
['Tue', 31, 38, 55, 66],
['Wed', 50, 55, 77, 80],
['Thu', 77, 77, 66, 50],
['Fri', 68, 66, 22, 15]
// Treat first row as data as well.
], true);

var options = {
legend:'none'
};

var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

chart.draw(data, options);
}