function randomPosition() {
    return Math.floor(Math.random() * 100);
}

function randomSize() {
    return Math.floor(Math.random() * 25) + 5;
}

function randomRadius(min, max) {
    return Math.floor(min + Math.random() * (max - min)) + '%';
}


function createInkDrop() {
    var inkDrop = document.createElement('div');
    inkDrop.classList.add('ink-drop');

    // set position
    inkDrop.style.top = randomPosition() + 'vh';
    inkDrop.style.left = randomPosition() + 'vw';

    // set size
    const size = randomSize();
    inkDrop.style.width = size + 'px';
    inkDrop.style.height = size + 'px';

    // irregular size
    inkDrop.style.borderRadius = `${randomRadius(20, 80)} ${randomRadius(20, 80)} ${randomRadius(20, 80)} ${randomRadius(20, 80)}`;

    // animation delay
    inkDrop.style.animationDelay = Math.random() * 5 + 's'; // 延迟0-5秒
    return inkDrop;
}

function generateInkDrops(number) {
    var inkContainer = document.getElementById('ink-container');
    for (let i = 0; i < number; i++) {
        inkContainer.appendChild(createInkDrop());
    }
    setInterval(function () {
        inkContainer.appendChild(createInkDrop());
    }, 100);

}

window.onload = function () {
    generateInkDrops(3);


};