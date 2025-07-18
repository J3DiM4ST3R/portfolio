document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("nav-links");
    const navItems = document.querySelectorAll("#nav-links a");

    toggle.addEventListener("click", () => {
        links.classList.toggle("active");
    });

    // Auto-close menu after clicking a link (on mobile)
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            if (links.classList.contains("active")) {
                links.classList.remove("active");
            }
        });
    });
});
