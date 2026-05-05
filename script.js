
var rate = 0; 


function Submit(){

document.getElementById("main").classList.add("hidden");
document.getElementById("state").classList.remove("hidden");

}


 function  Rate(number){

arr =  document.getElementsByClassName("orange");

while(arr.length > 0){
    arr[0].classList.remove("orange");
}

document.getElementById(number).classList.add("orange");

rate = number;

document.getElementById("rating").innerHTML = "You selected " + rate + " out of 5";


}