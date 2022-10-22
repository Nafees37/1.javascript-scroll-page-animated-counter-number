window.onscroll = function () {
    // first Count Number

    let CountNumber = 0;

    let firstCount = setInterval(firstFun, 45);

    function firstFun() {
        CountNumber++;

        document.getElementById("num1").innerHTML = CountNumber;

        if (CountNumber == 300) {
            clearInterval(firstCount);
        }
    }

    // Second Count Number

    let CountNumber2 = 0;

    let secondCount = setInterval(secondFun, 20);

    function secondFun() {
        CountNumber2++;
        document.getElementById("num2").innerHTML = CountNumber2;
        if (CountNumber2 == 500) {
            clearInterval(secondCount);
        }
    }

    // 3rd Count Number

    let CountNumber3 = 0;

    let thirdCount = setInterval(thirdFun, 1);

    function thirdFun() {
        CountNumber3++;
        document.getElementById("num3").innerHTML = CountNumber3;
        if (CountNumber3 == 1000) {
            clearInterval(thirdCount);
        }
    }
};
