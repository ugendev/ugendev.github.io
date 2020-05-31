function toContact() {
    const
        btn = document.querySelector(".advantages__offer button");

    btn.addEventListener("click", function() {
        document.querySelector(".contact").scrollIntoView(
            {
                behavior: 'smooth',
                block: "start"
            }
        );
    });
}

module.exports = toContact;