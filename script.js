var options = {
    
    

  series: [
    {
      name: "CPU Usage",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    }
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["CPU1","CPU2","CPU3","CPU4","CPU5","CPU6","CPU7","CPU8"],
  },
  yaxis: {
    title: {
      text: "",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  val ;
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();

// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}
setInterval(showtime,1000);
function showtime(){
    let time=new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    let show=hour + ":" + min + ":" +sec
    document.getElementById("clock").innerHTML=show;
}
showtime();


window.onload = function () {

  var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints. 

  var chart = new CanvasJS.Chart("chartContainer",{
      title :{
          text: "Live Data"
      },
      axisX: {						
          title: "Axis X Title"
      },
      axisY: {						
          title: "Units"
      },
      data: [{
          type: "line",
          dataPoints : dps
      }]
  });

  chart.render();
  var xVal = dps.length + 1;
  var yVal = 15;	
  var updateInterval = 1000;

  var updateChart = function () {
      
      
      yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
      dps.push({x: xVal,y: yVal});
      
      xVal++;
      if (dps.length >  10 )
      {
          dps.shift();				
      }

      chart.render();		

// update chart after specified time. 

};

setInterval(function(){updateChart()}, updateInterval); 
}
if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}