// Hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");
  
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
});

// Testimonial slider
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const leftBtn = document.querySelector(".arrow.left");
    const rightBtn = document.querySelector(".arrow.right");
  
    let current = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((t, i) => {
        t.classList.remove("active");
        if (i === index) t.classList.add("active");
      });
    }
  
    function next() {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    }
  
    function prev() {
      current = (current - 1 + testimonials.length) % testimonials.length;
      showTestimonial(current);
    }
  
    rightBtn.addEventListener("click", next);
    leftBtn.addEventListener("click", prev);
  
    // Auto slide every 5 seconds
    setInterval(next, 5000);
});
  