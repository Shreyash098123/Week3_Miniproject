// script.js

document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header");
      const icon = header.querySelector("i");
  
      header.addEventListener("click", () => {
        item.classList.toggle("active");
  
        // Toggle icon rotation
        if (item.classList.contains("active")) {
          icon.style.transform = "rotate(180deg)";
        } else {
          icon.style.transform = "rotate(0deg)";
        }
      });
    });
  
    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll("#navbar ul li a");
  
    navbarLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  });