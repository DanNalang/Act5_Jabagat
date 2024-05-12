document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scroll({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  