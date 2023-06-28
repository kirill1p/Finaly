let timeStorage = localStorage 
let time 

if(timeStorage.gegItem('time') != null){
    time = parseInt(timeStorage.getItem('time'))
}
else{
    time = 300
    timeStorage.setItem('time', time)
}

let pic = Math.floor(1 + Math.random() * 15)
let answer = [ ];

let progress = 0
let wasRebus = [11]

$(document).ready(function(){
})

function startRebus(arg){
    $("#melogy").attr("src", `sound/${arg}.mp3`)
}
function startTime() {
    setInterval(function(){
    time= parseInt(localStorage.getItem("time")) - 1;
    $(".time").val(time).trigger('change');
    if (time == 0){
        alertify.erorr("Time is out!");
        setTimeout(() => window.open("../2/2.html", "_self",false),2000)
        localStorage.removeItem("time");
    } else if (time > 0){
        localStorage.setItem("time" , time );
    }

}, 1000);
}