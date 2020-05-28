function switchContent() {
    const cardsBlock = document.querySelector(".our-team__cards"),
          cards      = cardsBlock.children,

          pointer    = document.querySelector(".our-team__triangle"),

          contents   = document.querySelectorAll(".our-team__block");

    let current      = 0;

    cardsBlock.addEventListener("click", function(event) {
        const target = event.target;

        for (let i = 0; i < cards.length; i++) {
            let x = cards[i]; 

            if (target == x) {
                let cardsBlockWidth = cardsBlock.clientWidth,
                    cardsWidth      = cards[0].clientWidth,
                    cardsDistance   = ( cardsBlockWidth - (cardsWidth * 4) ) / 3,

                    pointerWidth    = 30,

                    pointerX        = (cardsWidth * i) + (cardsWidth / 2) + (cardsDistance * i) - pointerWidth;
                
                pointer.style.left  = pointerX + "px"; 

                changeContent(current, current = i);

                return;
            } 
        }
    });

    function changeContent(current, next) {
        contents[current].classList.add("fadeOut");
        contents[current].classList.remove("fadeIn");

        contents[current].addEventListener("animationend", function() {
            this.style.display = "none";

            contents[next].style.display = "block";
            contents[next].classList.add("fadeIn");
            contents[next].classList.remove("fadeOut");
        }, {once:true});
    }
}

module.exports = switchContent;