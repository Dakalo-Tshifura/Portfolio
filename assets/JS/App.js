$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  
  hamburger.addEventListener('click', ()=>{
     //Links
      navLinks.classList.toggle("open");
      links.forEach(link => {
          link.classList.toggle("fade");
      });
  
      //Animation
      hamburger.classList.toggle("toggle");
  });

  // JavaScript function to handle CV download
  document.querySelector('.cv').addEventListener('click', function() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your PDF file
    var fileUrl = 'assets\images\cv.pdf';
  
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileUrl, true);
    xhr.responseType = 'blob';
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        var blob = xhr.response;
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'assets\images\cv.pdf';
  
        // This line is required on Firefox.
        document.body.appendChild(link);
  
        link.click();
  
        // Cleanup the DOM elements after downloading
        document.body.removeChild(link);
      }
    };
  
    xhr.send();
  });
