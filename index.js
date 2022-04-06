function fibo() {
    const fiboNumber = parseInt(document.querySelector("#inputFibo").value);
    //const fiboNumber2 = document.getElementById("inputFibo");

    //console.log(fiboNumber.value)

    const numberToShow = [];
    numberToShow[0] = 0;
    numberToShow[1] = 1;
    for (let i = 2; i < fiboNumber; i++) {
        numberToShow[i] = numberToShow[i - 2] + numberToShow[i - 1];
        numberToShow.push(i);

    }
    const container = document.getElementById("fiboContainer");
    const paragraph = document.createElement("p")
    paragraph.textContent = numberToShow
    container.appendChild(paragraph)

}

function factorial() {
    const factoNumber = parseInt(document.querySelector("#inputFacto").value);

    result = 1;
    for (i = 1; i <= factoNumber; i++) {
        result = result * i;
    }
    const container = document.getElementById("result");
    const paragraph = document.createElement("p")
    paragraph.textContent = result
    container.appendChild(paragraph)

}
