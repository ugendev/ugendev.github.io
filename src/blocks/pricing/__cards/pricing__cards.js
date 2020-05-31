function toOrder() {
    const 
       cards    = document.querySelector(".pricing__cards"),
       card     = cards.querySelectorAll(".card_pricing button"),

       service  = document.querySelector("input[name='service']"),
       budget   = document.querySelector("input[name='budget']");

    let 
        target, 
        count   = card.length;
       
    cards.addEventListener("click", function(event) {
        target = event.target;

        for (let i = 0; i < count; i++) {
            if (target == card[i]) {
                service.setAttribute("value", card[i].parentElement.firstChild.textContent);

                let 
                    temp = card[i].parentElement.querySelector(".pricing__price").textContent;

                temp = temp.substr(0, temp.indexOf(" "));
                budget.setAttribute("value", temp);

                document.querySelector("#anc-contact").scrollIntoView({
                    behavior: "smooth",
                    block: 'start'
                });

                return;
            }
        }
    });
}

module.exports = toOrder;