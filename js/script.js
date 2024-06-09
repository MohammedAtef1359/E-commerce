// index nav bar 
let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");
let close = document.getElementById("close");


if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
}


if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}
// index nav bar 


// shop image click 
let mainImage=document.getElementById("mainimg");
let smallImage=document.getElementsByClassName("small-img");

smallImage[0].onclick=()=>{
    mainImage.src=smallImage[0].src
}
smallImage[1].onclick=()=>{
    mainImage.src=smallImage[1].src
}
smallImage[2].onclick=()=>{
    mainImage.src=smallImage[2].src
}
smallImage[3].onclick=()=>{
    mainImage.src=smallImage[3].src
}



