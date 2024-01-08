"use strict";
    
let netflixButton = document.querySelector(".btn-lg");
netflixButton.addEventListener("click", function () {
    console.log("Hej");

    
let documentBody = document.querySelector("body");
documentBody.innerHTML = `
<div id="moviecontainer">
    <video id="moviescreen" controls autoplay loop>
        <source src="../images/pexels-cottonbro-9208700 (2160p).mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
<div id="bubblecontainer">
    <div id="bubble1"><img src="../images/bubble.webp" alt="bubble" class="bubblebox" id="bubblesmall"><p>omg SHUT UP!</p></div>
    <div id="bubble2"><img src="../images/bubble2.png" alt="bubble" class="bubblebox"><p>I don´t get it, do you get it? <br> I´m not following! <br> Why did he do that?</p></div>
    <div id="bubble3"><img src="../images/bubble.webp" alt="bubble" class="bubblebox"> <p>I wanna pee <br> but I don´t wanna <br> miss anything</p></div>
</div>
`;
});    


