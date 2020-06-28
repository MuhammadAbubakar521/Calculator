function number (num) {
    console.log(num)
var result = document.getElementById("value");
value.value += num;

}

function clearValue (){
    var result = document.getElementById("value");
    value.value = "";
        
}

function getResult(){
    var result = document.getElementById("value");
    console.log(result.value)
result.value = eval(result.value) 
}



