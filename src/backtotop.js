const backToTopBtn = document.getElementById("backToTopBtn");

backToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});