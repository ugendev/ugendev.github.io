function rotateCards() {
    let cardsBlock = document.querySelector(".portfolio__items"),
        cards      = cardsBlock.querySelectorAll(".portfolio__item"),
        cardsCount = cards.length,

        back       = cardsBlock.querySelectorAll(".portfolio__back");
    
    cardsBlock.addEventListener("click", function(event) {

        let target      = event.target,
            targetClass = target.classList.value;

        if (targetClass == "portfolio__front-side") {
            target = target.closest(".portfolio__item");  

            for (let i = 0; i < cardsCount; i++) {
                let x = cards[i];

                if (x == target) {
                    x.classList.add("portfolio__item-rotate");

                    return;
                }
            }
        } else if (targetClass == "portfolio__back"){
            for (let i = 0; i < cardsCount; i++) {
                if (back[i] == target) {
                    let x = cards[i];

                    x.classList.add("portfolio__item-rotate-back");

                    x.firstChild.addEventListener("transitionend", function() { 
                        x.classList.remove("portfolio__item-rotate",  "portfolio__item-rotate-back");
                    }, { once: true });

                    return;
                }
            }
        }
    });
}

module.exports = rotateCards;