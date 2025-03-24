                 // Toggle Navigation Menu
                 const hamburger = document.querySelector(".hamburger-menu");
                 const navLinks = document.querySelector(".nav-links");
                 
                 hamburger.addEventListener("click", () => {
                   navLinks.classList.toggle("active");
                 });
                 
                 // Toggle Theme
                 const themeToggle = document.getElementById("theme-toggle");
                 themeToggle.addEventListener("click", () => {
                   document.body.classList.toggle("dark-theme");
                 });
                 
                 // Smooth Scroll (Optional Enhancement)
                 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                   anchor.addEventListener('click', function (e) {
                     e.preventDefault();
                     document.querySelector(this.getAttribute('href')).scrollIntoView({
                       behavior: 'smooth'
                     });
                   });
                 });
                 
                 // Scroll Animation (Optional Enhancement)
                 const sections = document.querySelectorAll("section");
                 const observer = new IntersectionObserver(entries => {
                   entries.forEach(entry => {
                     if (entry.isIntersecting) {
                       entry.target.classList.add("visible");
                     }
                   });
                 }, {
                   threshold: 0.3
                 });
                 
                 sections.forEach(section => {
                   observer.observe(section);
                 });