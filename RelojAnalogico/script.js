function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360; 
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6; 
    const hourDeg = (hours % 12) / 12 * 360 + (minutes / 60) * 30; 

    document.getElementById('second-hand').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();