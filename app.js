function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var minute = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById('Hour').innerHTML = hours;
    document.getElementById('Minute').innerHTML = ": " + minute;
    document.getElementById('Second').innerHTML = ": " + seconds;
}


setInterval(clock, 1000)

