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
}