//  document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.getElementById('hamburger');
//     const navLinks = document.getElementById('navLinks');

//     // Toggle navigation menu on hamburger click
//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });

//     // Initialize AOS
//     AOS.init({
//         duration: 1000,
//         easing: 'ease-in-out',
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Website Specimen Loaded');

//     // Smooth Scroll for Hero Button
//     document.querySelector('.hero .btn').addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
//     });
// });

// // Mobile Menu Toggle
// function toggleMenu() {
//     const navLinks = document.querySelector('.navbar');
//     navLinks.classList.toggle('active');
// }
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Website Specimen Loaded');

    // Smooth Scroll for Hero Button
    document.querySelector('.hero .btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
// });