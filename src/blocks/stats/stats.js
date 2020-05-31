function statistics() {
    function run() {

        const 
            values = document.querySelectorAll(".stats__number"),
            end    = [12456, 1796, 1000, 1500];

            end.forEach((value) => endSum += value);

        let 
            start = [0, 0, 0, 0],
            endSum, startSum,
            temp;

            end.forEach((value) => endSum += value);

        let
            timer = setInterval(function() {
                values.forEach((value, index) => {
                    if (start[index] <= end[index]) {
                        start[index] += Math.floor(end[index] / 150);
                        temp = start[index] + "";

                        if (start[index] > 999) {
                            let 
                                l = temp.length;

                            temp  = temp.substr(0, l - 3) + ',' + temp.substr(-3, 3); 
                        }

                        temp += '+';

                        value.textContent = temp;
                    }

                    start.forEach((value) => startSum += value);
                    
                    if (startSum > endSum) {
                        clearInterval(timer);
                    }
                });
            }, 10);
    }

    function scrollHandler() {
        if (window.pageYOffset > 5800) {
            run();
            window.removeEventListener("scroll", scrollHandler);
        }
    }

    window.addEventListener("scroll", scrollHandler);
}

module.exports = statistics;