let $ = document 
let hourElem = $.querySelector('#hour')
let MinuteElem = $.querySelector('#minute')
let secondElem = $.querySelector('#seconds')




setInterval(function(){
    let timeNow = new Date()

    let nowHour = timeNow.getHours()
    let nowMinute = timeNow.getMinutes()
    let nowSecond = timeNow.getSeconds()

    if(nowHour < 10){
        nowHour = '0' + nowHour
    }
    if(nowMinute < 10){
        nowMinute = '0' + nowMinute
    }
    if(nowSecond < 10){
        nowSecond = '0' + nowSecond
    }

    hourElem.innerHTML = nowHour
    MinuteElem.innerHTML = nowMinute
    secondElem.innerHTML = nowSecond
} , 1000)



