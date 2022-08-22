$(document).ready(function () {
  $("button").click(function () {
    var display =
      "<tr><th>Distance</th><th>Time taken</th><th>time for 1000</th></tr>";
    var datas = $("input").val();
    var time = 0;
    var dis_time;
    var data = datas.split(",");

    for (var i = 0; i < data.length; i++) {
      dis_time = data[i].split("-");
      var x = (dis_time[1] / dis_time[0]) * 1000;
      time += x;
      display +=
        "<tr><td>" +
        dis_time[0] +
        "</td>" +
        "<td>" +
        dis_time[1] +
        "</td>" +
        "<td>" +
        x +
        "</td>" +
        "</tr>";
    }
    var avg_time = time / data.length;
    $("table").html(display);
    if (isNaN(avg_time)) {
      $("h2").text("Enter value properly");
    } else {
      $("h2").text("Average time : " + avg_time.toFixed(2) + " sec");
    }
  });
});
// $(document).ready(function () {
//   var display = "";
//   $("input").keyup(function () {
//     var datas = this.value;
//     var time = 0;
//     var dis_time;
//     var data = datas.split(",");

//     for (var i = 0; i < data.length; i++) {
//       dis_time = data[i].split("-");
//       time += (dis_time[1] / dis_time[0]) * 1000;
//     }
//     // display += "<p>" + data[i] + "</p>";
//     var avg_time = time / data.length;
//     $("h1").html(display);
//     if (isNaN(avg_time)) {
//       $("h2").text("Enter value properly");
//     } else {
//       $("h2").text(avg_time);
//     }
//   });
// });
