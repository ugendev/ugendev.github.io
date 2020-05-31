function sendForm() {
    const  
        forms = document.querySelectorAll("form"),

        overlay = document.querySelector(".overlay"),
        x       = overlay.querySelector(".modal__close");
    
    forms.forEach( (value) => { 
        value.addEventListener("submit", function (event) {
            event.preventDefault();

            fetch("mail.php", {
                method: "POST",
                body: new FormData(this)
            })
                .then( () => {
                    forms.forEach( (value) => value.reset() );
                    overlay.style.display = "block";
                    overlay.classList.add("fadeIn");
                    document.body.style.overflow = "hidden";
                });
        });
    });

    x.addEventListener("click", function() {
        document.body.style.overflow = "initial";
        overlay.classList.add("fadeOut");

        overlay.addEventListener("animationend", function() {
            this.classList.remove("fadeIn", "fadeOut");
            this.style.display = "none";
        }, {once: !0});
    });
}

module.exports = sendForm;