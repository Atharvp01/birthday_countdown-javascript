let bithdate = prompt("When is your next birthday?");

function countDown (){
    let birth_date = new Date(bithdate);
    let currentDate = new Date();
    let totalSeconds = Math.floor((birth_date-currentDate)/1000);
    let seconds = Math.floor(totalSeconds%60);
    let minutes = Math.floor((totalSeconds/60)%60);
    let hours = Math.floor((totalSeconds/3600)%24);
    let days = Math.floor(totalSeconds/3600/24);

    document.getElementById("days").innerHTML = format(days);
    document.getElementById("hours").innerHTML = format(hours);
    document.getElementById("minutes").innerHTML = format(minutes);
    document.getElementById("seconds").innerHTML = format(seconds);
}
countDown();
setInterval(countDown, 1000);

function format(time){
    return time < 10 ? `0${time}`: time;
}