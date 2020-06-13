const couter = function() {
    const timer = document.getElementById('timer');
    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе');
        clearInterval(timer);    
    } else {
        timer.textContent -= 1;
    }
}
let timer = setInterval(couter, 1000);