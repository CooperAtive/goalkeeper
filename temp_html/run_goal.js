$(document).ready(function() {
  var lineChartData = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,90,81,56,55,40]
      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [28,48,40,19,96,27,100]
      }
    ]
  }

  var myLine = new Chart(document.getElementById("run-canvas").getContext("2d")).Line(lineChartData, {scaleFontColor: '007BA7', scaleGridLineColor: "rgba(0,0,0,0.1)"});

  $(function () {
    $('#date-picker').datetimepicker({
        defaultDate: "11/1/13",
        pickTime: false
    });
  });

  $(document).on("click", "#add-run-milestone-button", function(e) {
    var distance_ran = $("#distance-ran").val();
    var distance_unit = $("#distance-ran-unit").val();
    var time_ran = $("#time-ran").val();
    var time_unit = $("#time-ran-unit").val();
    var date_ran = $("#date-ran").val();
    $("ul").append("<li>" + "Ran " + distance_ran + " " + distance_unit + " in " + time_ran + " " + time_unit + " on " + date_ran + "." + "</li>");
  });
});
