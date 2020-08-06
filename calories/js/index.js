function calsPerDay(){
 
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value * 2.54;
  var weight = document.getElementById("weight").value / 2.2;
  var result = 0;
//Checking what gender is selected and using that to calculate the result//
  if (document.getElementById("male").checked)
    result = 66.47 +(13.75 * weight) + (5.0 * height -(6.75 * age))
  else if (document.getElementById("female").checked)
    result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
    document.getElementById("totalCals").innerHTML = Math.round(result)

}

calsPerDay()