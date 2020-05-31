function slider() {
    const
        slidesWrapper   = document.querySelector(".testimonials__slider"),  
        slides          = slidesWrapper.querySelectorAll("li"),

        dots            = slidesWrapper.parentElement.querySelector(".testimonials__slider-dots"),
        dot             = dots.querySelectorAll("li"),
        dotsCount       = dot.length;

    let 
        slideWidth      = slides[0].clientWidth,
        wrapperWidth    = slideWidth * dotsCount,

        current         = 0,
        target;

    slidesWrapper.style.cssText = `width: ${wrapperWidth}px;`;
        
    dots.addEventListener("click", function(event) {
        target = event.target;

        for (let i = 0; i < dotsCount; i++) {
            let temp = dot[i];

            if (temp == target) {
                slidesWrapper.style.cssText += `transform: translateX(-${slideWidth * i}px);`;
                dot[current].classList.remove("testimonials__slider-dot_active");
                dot[i].classList.add("testimonials__slider-dot_active");
                current = i;
                
                return;
            }
        }
    });

}

module.exports = slider;