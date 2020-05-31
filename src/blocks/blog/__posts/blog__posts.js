function blog() {
    const 
        postsWrapper = document.querySelector(".blog__posts"),
        posts        = postsWrapper.querySelectorAll(".card_type_post"),
        postsCount   = posts.length;

    let
        target,
        prev, next,
        current = 0;

    postsWrapper.addEventListener("click", function(event) {
        target = event.target;

        if (target == postsWrapper) {
            return;
        } else {
            target = target.closest(".card_type_post");
        }

        if (target == posts[current]) {
            return;
        }

        for (let i = 0; i < postsCount; i++) {
            next = posts[i];
            prev = posts[current];

            if (next == target) {
                prev.classList.remove("card_type_post-expanded");
                prev.firstChild.addEventListener("transitionend", function() { 
                    next.style.order = "-1";
                    prev.style.order = "0";
                    next.classList.add("card_type_post-expanded");
                    
                }, {once: true});

                current = i;

                return;
            }
        }
    });

}

module.exports = blog;