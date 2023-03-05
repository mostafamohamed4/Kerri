$('.nav-link').click((e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
})
