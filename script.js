

setInterval(() => {
    let h =new Date().getHours();
    let m =new Date().getMinutes();
    let s =new Date().getSeconds();
    console.log(s);
    // let sec = document.getElementById('sec');
    sec.style.transform = `rotate(${6*s}deg)`;
    min.style.transform = `rotate(${6*m}deg)`;
    hour.style.transform = `rotate(${30*h+m/2}deg)`;
    
}, 1000);

