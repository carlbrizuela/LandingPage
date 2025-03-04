
//modify text of single element
// Venu 2s --> Garmin Venu 2s

let title = document.getElementById("title")
title.textContent = "Garmin Venu 2s"


//modify style of multiple elements
// change background color and border radius
let features = document.querySelectorAll(".features-content")

for(let x = 0; x < features.length; x++){
    features[x].style.backgroundColor = "lightgrey"
    features[x].style.borderRadius = "10px"
}

//add a button and event listener

let submit = document.getElementById("submit")

function subscribe(){
    alert("You are now subscribed!")
}
submit.addEventListener("click", subscribe)