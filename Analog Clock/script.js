console.log("Welcome to Analog Clock")

setInterval(()=>{
    date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
    hrotation = 30*hours + minutes/2
    mrotation = 6*minutes
    srotation = 6*seconds

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000)