// scripts.js - Interactive functionality for RK Private Resort and Hotels

document.addEventListener("DOMContentLoaded", function () {
  // Fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply fade-in to sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Image zoom hover effects (additional enhancement)
  const images = document.querySelectorAll(
    ".gallery-image, .room-image, .amenity-image",
  );
  images.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      this.style.transform = this.classList.contains("gallery-image")
        ? "scale(1.1)"
        : "scale(1.05)";
    });

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add loading animation for images
  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add("loaded");
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });

  // Contact form enhancement (if added later)
  // This is a placeholder for future contact form functionality
  console.log("RK Private Resort and Hotels website loaded successfully!");
});
