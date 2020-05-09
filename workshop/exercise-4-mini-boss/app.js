let main = document.getElementById('main');

let button = document.getElementById("startbtn").addEventListener("click", start);

function start() {
    //Removed the start button
    document.getElementById("startbtn").remove();

    let numberOfButtons = random(1, 25);
    let numberOfClicks = 0;

    for (let i = 1; i <= numberOfButtons; i++) {
        let createdButton = document.createElement('button');
        createdButton.innerText = i;
        createdButton.id = `btn-${i}`;
        main.appendChild(createdButton);
        createdButton.setAttribute("style", "position:absolute;");
        let xy = getRandomPosition(createdButton);
        createdButton.style.top = xy[0] + 'px';
        createdButton.style.left = xy[1] + 'px';

        //Allow user to click the createdButton
        createdButton.addEventListener("click", clickedTheButton);
    }

    function getRandomPosition(element) {
        let x = document.body.offsetHeight - element.clientHeight;
        let y = document.body.offsetWidth - element.clientWidth;
        let randomX = Math.floor(Math.random() * x);
        let randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    function clickedTheButton(clickEvent) {
        //clicked button, remove button to prevent cheating
        numberOfClicks++;
        document.getElementById(clickEvent.srcElement.id).remove();
    }

    function checkResults() {
        //Check how many clicks we have
        if (numberOfButtons > numberOfClicks) {
            alert("lost kek");
        } else {
            alert("Won");
        }
    }


    setTimeout(checkResults, 5000);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}