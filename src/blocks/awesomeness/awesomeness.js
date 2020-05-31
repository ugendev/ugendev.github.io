function playVideo() {
    const
        video   = document.querySelector("video"),
        play    = document.querySelector('.awesomeness__icon'),
        content = document.querySelector(".awesomeness__content");

    play.addEventListener("click", function() {
        content.style.display = "none";
        video.style.display = "block";
        video.classList.add("fadeIn");
        video.play();
        video.setAttribute("controls", "");
    });

    video.addEventListener('ended', function() {
        content.style.display = "block";
        video.classList.add("fadeOut");
        
        video.addEventListener('animationend', () => { 
            video.classList.remove("fadeIn", "fadeOut");
            video.style.display = "none";
        }, {once:!0});
        video.removeAttribute("controls");
    });
}

module.exports = playVideo;