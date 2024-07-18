let menu= document.getElementsByClassName("hamburger");

function menuh(){
    if(document.getElementById("ham").className=="mobilemenu1"){
        document.getElementById("imgmenu").src="icon-hamburger.svg"; 
        document.getElementById("ham").classList.remove("mobilemenu1");
        document.getElementById("ham").classList.add("mobilemenu");     
    }
    else{
    document.getElementById("ham").classList.add("mobilemenu1");
    document.getElementById("ham").classList.remove("mobilemenu");
    document.getElementById("imgmenu").src="icon-close.svg";
    }
}

function moon(){
    document.getElementById("planetimage").src="image-moon.png";
    document.getElementsByClassName("title")[0].innerText="MOON";
    document.getElementsByClassName("description")[0].innerText="See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    document.getElementsByClassName("DISTANCE")[0].innerText="384,400KM";
    document.getElementsByClassName("DAYS")[0].innerText="3 DAYS";
}


function mars(){
    document.getElementById("planetimage").src="image-mars.png";
    document.getElementsByClassName("title")[0].innerText="MARS";
    document.getElementsByClassName("description")[0].innerText="Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
    document.getElementsByClassName("DISTANCE")[0].innerText="225 MIL.KM";
    document.getElementsByClassName("DAYS")[0].innerText="9 MONTHS";
}


function europa(){
    document.getElementById("planetimage").src="image-europa.png";
    document.getElementsByClassName("title")[0].innerText="EUROPA";
    document.getElementsByClassName("description")[0].innerText="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    document.getElementsByClassName("DISTANCE")[0].innerText="628 MIL.KM";
    document.getElementsByClassName("DAYS")[0].innerText="3 YEARS";
}


function titan(){
    document.getElementById("planetimage").src="image-titan.png";
    document.getElementsByClassName("title")[0].innerText="TITAN";
    document.getElementsByClassName("description")[0].innerText="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    document.getElementsByClassName("DISTANCE")[0].innerText="1.6 BIL. KM";
    document.getElementsByClassName("DAYS")[0].innerText="7 YEARS";
}