$(document).ready(function() {

  $("select").change(function() {
    var str = "";

    $("select option:selected").each(function() {
      str += $(this).text();
    });

    if (str === "run more") {
      create_run_goal();
    }
  });

  $(document).on("click", "#go-to-run-goal-button", function(e) {
    var time_commit = $("#time-number").val();
    var time_unit1 = $("#time-unit1").val();
    var distance_commit = $("#distance-number").val();
    var distance_unit = $("#distance-unit").val();
    var time_unit2 = $("#time_unit2").val();
    window.location.href = "run_goal.html";
  });

  function create_run_goal() {
    $("#goal-steps").append("<label>For the next</label> <input type='text' class='form-control' id='time-number' placeholder='#'> <select class='form-control' id='time-unit1'><option>days</option><option>weeks</option><option>months</option><option>years</option></select>");
    $("#goal-steps").append(" <label>I will run</label> <input type='text' class='form-control' id='distance-number' placeholder='#'> <select class='form-control' id='distance-unit'><option>miles</option><option>kilometers</option>");
    $("#goal-steps").append(" <label>every</label> <select class='form-control' id='time-unit2'><option>day</option><option>week</option></select> <label>.</label>");
    $("#goal-steps").append(" <button type='button' class='btn btn-primary' id='go-to-run-goal-button'>Go!</button>");
  }

});
