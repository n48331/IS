$(document).ready(function () {
  $("input").keyup(function () {
    var datas = this.value;
    var time = 0;
    var dis_time;
    var data = datas.split(",");
    $("h1").text(this.value);

    for (var i = 0; i < data.length; i++) {
      dis_time = data[i].split("-");
      time += (dis_time[1] / dis_time[0]) * 1000;
    }
    var avg_time = time / data.length;
    $("h2").text(avg_time);
  });
});
