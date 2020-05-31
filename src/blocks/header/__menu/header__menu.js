function menu() {
    const   
        navBar  = document.querySelector(".header__menu"),
        anchors = navBar.querySelectorAll("a[href*='#']");

    let 
        target;

    navBar.addEventListener("click", function(event) {
        event.preventDefault();
        target = event.target;

        for (let i = 0; i < anchors.length; i++) {
            if (target == anchors[i]) {
                const
                    scrollTo = anchors[i].getAttribute("href");

                document.querySelector(scrollTo).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                return;
            }
        }
    });
}

module.exports = menu;