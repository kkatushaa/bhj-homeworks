let getHole = index => document.getElementById(`hole${index}`);

let rightClick = document.getElementById('dead');
let falseClick = document.getElementById('lost');

let win = parseInt(rightClick.textContent);
let lost = parseInt(falseClick.textContent);


function checkGame(rightClick, falseClick) {
    console.log(rightClick, falseClick);
    if (rightClick === 10){
    alert ('Победа!');
     location.reload();
} else if (falseClick === 5){
    alert ('Вы проиграли!');
     location.reload();
};
}
for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            win += 1;
            rightClick.textContent = win;
        } else {
            lost += 1;
            falseClick.textContent = lost;
        };
        checkGame(win, lost);
    };
};
