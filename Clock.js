setInterval(() => {
    d=new Date();
    hour=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    document.querySelector(".currtime").innerHTML=d.toLocaleTimeString(); 
     document.querySelector(".Sechand").style.transform = `translateX(-50%) rotate(${6*sec%360}deg)`;
     document.querySelector(".Minhand").style.transform = `translateX(-50%) rotate(${6*min%360}deg)`;
     document.querySelector(".Hourhand").style.transform = `translateX(-50%) rotate(${(30*hour+min/2)%360}deg)`;
}, 1000);