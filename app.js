var input_1  = document.querySelector("#input1")
var input_2  = document.querySelector("#input2")
var add_btn = document.querySelector("#addbtn")
var sub_btn = document.querySelector("#subbtn")
var mul_btn = document.querySelector("#mulbtn")
var div_btn = document.querySelector("#divbtn")

function addition(a,b){
    var sum = a+b;
    return sum
}
function addBtnClickHandler(){
    var sum = addition(Number(input_1.value),Number(input_2.value))
    console.log(sum)
}
function subtraction(a,b){
    var sub = a-b;
    return sub;
}
function subBtnClickHandler(){
    var sub = subtraction(Number(input_1.value),Number(input_2.value))
    console.log(sub)
}
function multiply(a,b){
    var prod = a*b;
    return prod;
}
function mulBtnClickHandler(){
    var mul = multiply(Number(input_1.value),Number(input_2.value));
    console.log(mul)
}
function divide(a,b){
    var div = a/b;
    return div;
}
function divBtnClickHandler(){
    var div = divide(Number(input_1.value),Number(input_2.value))
    console.log(div)
}
add_btn.addEventListener("click",addBtnClickHandler)
sub_btn.addEventListener("click",subBtnClickHandler)
mul_btn.addEventListener("click",mulBtnClickHandler)
div_btn.addEventListener("click",divBtnClickHandler)
