let main = document.getElementById('main');

function greenButton(event) {
  let button = event.target.id;
  document.getElementById(button).classList.add('green');
}

for (let i = 1; i <= 20; i++) {
  let button = document.createElement('button');
  button.innerText = i;
  button.id = `btn-${i}`;
  main.appendChild(button);
  button.addEventListener('click', greenButton);
  button.setAttribute("style", "position:absolute;");
  let xy = getRandomPosition(button);
  button.style.top = xy[0] + 'px';
  button.style.left = xy[1] + 'px';
}

function getRandomPosition(element) {
  let x = document.body.offsetHeight - element.clientHeight;
  let y = document.body.offsetWidth - element.clientWidth;
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}