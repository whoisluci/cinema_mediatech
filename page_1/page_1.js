"use strict;"

let yesButton = document.querySelector("#yesButton");

yesButton.addEventListener("click", function () {
let documentBody = document.querySelector("body");
documentBody.innerHTML = `
<div class="outer-container">
    <header class="header">
        <nav class="logo">
            <img src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
            <a href="" class="btn"> Sign In</a>
        </nav>
    <div class="inner-container">
        <div class="inner-title">
            <h1>Streaming sites take over.</h1>
        </div>
        <div class="inner-text">
            <p>Watch anywhere. Cancel anytime.</p>
        </div>
        <div class="email-form">
            <p>
            Ready to watch? Enter your email to create or restart your
            membership.
            </p>
            <div class="get-started">
                <input type="text" name="" id="" placeholder="Email address" />
                <button class="btn-lg">Get started <i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        <div id="trendingNow">
            <h1 id="myList">Trending Now</h1>
            <div class="box">
                <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true" alt=""></a>
                <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true" alt=""></a>
                <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true" alt=""></a>
                <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true" alt=""></a>
                <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true" alt=""></a>
                <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" alt=""></a>    
            </div>     
        </div>
    </div>
    <div class="overlay"></div>
`;

let netflixButton = document.querySelector(".btn-lg");
netflixButton.addEventListener("click", function () {

documentBody.innerHTML = `
<div id="moviecontainer">
    <div id="exitSign"><img id="exitSignPNG" src="media/images/emergency_exit_sign.png"></div>
    <video id="moviescreen" controls autoplay loop>
        <source src="media/images/pexels-cottonbro-9208700 (2160p).mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
<div id="bubblecontainer">
<div id="bubble1"><img src="./media/images/bubble.webp" alt="bubble" class="bubblebox" id="bubblesmall"><p>omg SHUT UP!</p></div>
<div id="bubble2"><img src="media/images/bubble2.png" alt="bubble" class="bubblebox"><p>I don´t get it, do you get it? <br> I´m not following! <br> Why did he do that?</p></div>
<div id="bubble3"><img src="./media/images/bubble.webp" alt="bubble" class="bubblebox"> <p>I wanna pee <br> but I don´t wanna <br> miss anything</p></div>
</div>
`;
});    

    // Set the background image
    documentBody.style.backgroundImage = 'url("media/images/crowdedcinema.jpg")';

    // Set background size, repeat, overflow, height, and margin
    documentBody.style.backgroundSize = '100%';
    documentBody.style.backgroundRepeat = 'no-repeat';
    documentBody.style.overflow = 'hidden';
    documentBody.style.height = '100vh';
    documentBody.style.margin = '0';

    let exitSign = document.getElementById("exitSignPNG");
    document.addEventListener("DOMContentLoaded", function() {
  
        setInterval(function() {
          // Toggle the visibility of the image
          exitSign.style.display = (exitSign.style.display === 'none') ? 'block' : 'none';
        }, 500); // Adjust the interval (milliseconds) to control the blinking speed
      });

    exitSign.addEventListener("click", function () {
        console.log("ja d syns");
        documentBody.innerHTML = `
        <h1>
            <span>Wanna pay for that? It´s not a vibe, let it DIE!</span>
        </h1>



        <div class='outer-scratch'>
        <div class="inner-scratch">
            <div class="background grain"></div>
        </div>
        
            <img src="media/images/IMG_8380.jpg">
            <img src="media/images/IMG_8381.jpg">
            <img src="media/images/IMG_8382.jpg">
            <img src="media/images/IMG_8383.jpg">
            <img src="media/images/IMG_8384.jpg">
            <img src="media/images/IMG_8385.jpg">
            <img src="media/images/IMG_8386.jpg">
            <img src="media/images/IMG_8387.jpg">
            <img src="media/images/IMG_8388.jpg">

        </div>
        `;

        let linkElement = document.createElement("link");
        linkElement.rel = 'stylesheet';
        linkElement.type = 'text/css';
        linkElement.href = "../page_3/page_3.css";
  
        // Append the link element to the head of the document
        document.head.appendChild(linkElement);
      });
    }); 








