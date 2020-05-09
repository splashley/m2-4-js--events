let main = document.getElementById('main');

function switchButtonColour(event) {
  let button = event.target.id;
  document.getElementById(button).classList.toggle('green');
}

for (let i = 1; i <= 20; i++) {
  let button = document.createElement('button');
  button.innerText = i;
  button.id = `btn-${i}`;
  main.appendChild(button);

  button.addEventListener('click', switchButtonColour);
}