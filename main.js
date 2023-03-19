

setInterval(function(){
    const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
let date = new Date()
    if(date.getHours() < 12){
    hour.style.transform = `rotate(${date.getHours()*30}deg)`
    }
   else if(date.getHours() > 12){
    hour.style.transform = `rotate(${(date.getHours() - 12)*30}deg)`
   }
    
    min.style.transform = `rotate(${date.getMinutes()*6}deg)`
    sec.style.transform = `rotate(${date.getSeconds()*6}deg)`
},1000)