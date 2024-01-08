"use strict";

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') { 
      const curtainLeft = document.getElementById('curtain-left');
      const curtainRight = document.getElementById('curtain-right');

      const curtainWidth = 15; 

      curtainLeft.style.width = `${curtainWidth}%`;
      curtainRight.style.width = `${curtainWidth}%`;
  }
});

//video får en fade när det scrollas ner 
        var video = document.getElementById("myVideo");
        var artDiv = document.getElementById("art");

        window.addEventListener("scroll", function() {
           
            var opacity = 1 - window.scrollY / window.innerHeight;

            opacity = Math.max(0, Math.min(1, opacity));

            video.style.opacity = opacity;

            if (opacity === 0) {
                artDiv.style.display = "flex";
                artDiv.style.transition = "opacity 2s";
                artDiv.style.opacity = 1;
            } else {
                artDiv.style.transition = "opacity 0.5s";
                artDiv.style.opacity = 0;
                setTimeout(() => {
                    artDiv.style.display = "none";
                }, 500);
            }
        });

// varje gång man uppdaterar så åker sidan upp till ursprungsläget
    window.onload = function() {
    window.scrollTo(0, 0);
  };
  

  function toggleContent() {
    let oldContent = document.getElementById('oldContent');
    let newContent = document.getElementById('newContent');
  
    if (oldContent.style.display !== 'none') {
      oldContent.style.display = 'none';
      newContent.style.display = 'block';
    } else {
      oldContent.style.display = 'block';
      newContent.style.display = 'none';
    }
  }

  function showWarning() {
    window.alert("To open the curtains press enter");
  }

  window.onload = showWarning;
