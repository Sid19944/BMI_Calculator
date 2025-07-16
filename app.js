let weight = document.querySelector("#weight")
let height = document.querySelector("#height");
let btn = document.querySelector("#Calculate");
let bmi = document.querySelector("#bmi");
let wCondition = document.querySelector("#w_condition");

btn.addEventListener("click",function(){
    let ans = ((weight.value)/((height.value/100)*(height.value/100)))
    bmi.innerHTML = ans;
    if(ans<19.1){
        wCondition.innerHTML = "Weight Condition : Under Weight";
    } else if(ans>19.1 && ans<27){
        wCondition.innerHTML = "Weight Condition : Normal Weight";
    } else if(ans>27){
        wCondition.innerHTML = "Weight Condition : Over Weight";
    } else {
        wCondition.innerHTML = "Weight Condition : Enter proper data";
    }
    setTimeout(()=>{
        weight.value = "";
        height.value = "";
    },1500)
})