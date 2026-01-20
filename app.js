let weight = document.querySelector("#weight");
let height_cm = document.querySelector("#height_cm");
let height_feet = document.querySelector("#height_feet");
let btn = document.querySelector("#Calculate");
let bmi = document.querySelector("#bmi");
let wCondition = document.querySelector("#w_condition");

btn.addEventListener("click", function () {
  // made by Siddharth
  let ans = 0;
  const cm = height_feet.value.split(".");
  if (!height_feet.value) {
    ans = weight.value / ((height_cm.value / 100) * (height_cm.value / 100));
  } else {
    ans =
      weight.value /
      ((((parseInt(cm[0] * 12) + parseInt(cm[1])) * 2.54) / 100) *
        (((parseInt(cm[0] * 12) + parseInt(cm[1])) * 2.54) / 100));
  }

  bmi.innerHTML = ans;
  if (ans < 19.1) {
    wCondition.innerHTML = "Weight Condition : Under Weight";
  } else if (ans > 19.1 && ans < 27) {
    wCondition.innerHTML = "Weight Condition : Normal Weight";
  } else if (ans > 27) {
    wCondition.innerHTML = "Weight Condition : Over Weight";
  } else {
    wCondition.innerHTML = "Weight Condition : Enter proper data";
  }
  setTimeout(() => {
    weight.value = "";
    height_cm.value = "";
    height_feet.value = "";
  }, 3000);
});
