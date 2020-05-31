function toPortfolio () {
    const 
        btn = document.querySelector(".main__button");

    btn.addEventListener("click", () => document.querySelector("#anc-portfolio").scrollIntoView({behavior:'smooth', block: 'start'}));
} 

module.exports = toPortfolio;