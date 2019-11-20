function clickCount() {
    let button = document.getElementById('button');
    let count = 0;
    button.onclick = function () {
        ++count;
        console.log(`You clicked button ${count} times`);
    }
}
