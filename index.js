var x = document.getElementById("b1");

function bmi() {
  var weight = $("#weight").val();
  var height = $("#height").val() / 100;
  var sq = height * height;
  var rslt = weight / sq;
  var a = rslt * 2.2 + 3.5 * rslt * (height - 1.4);

  if (isNaN(weight) || isNaN(height) || weight === "" || height === "") {
    alert("Input must be a number");
  } else {
    document.getElementById("show").innerHTML =
      "The perfect weight for your height is: " + a.toFixed(2);
  }
}

x.onclick = bmi;

$("#b1").on("click", function () {
  $(".p1").show(100);
});
