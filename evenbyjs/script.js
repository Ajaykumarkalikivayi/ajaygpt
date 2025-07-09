var modal = document.getElementById("ajai"); 
var btn = document.getElementById("ajat");
var span = document.getElementsByClassName("close")[0];
var resultPara = document.getElementById("result");

btn.onclick = function () {
  const number = parseInt(document.getElementById("num").value);
  modal.style.display = "block";

  if (isNaN(number)) {
    resultPara.textContent = "Please enter a valid number.";
    resultPara.style.color = "black";
    document.body.style.backgroundColor = "white";
    return;
  }

  if (number % 2 === 0) {
    resultPara.textContent = ` ${number} is Even.`;
    resultPara.style.color = "green";
    document.body.style.backgroundColor = "lightgreen";
  } else {
    resultPara.textContent = `${number} is Odd.`;
    resultPara.style.color = "red";
    document.body.style.backgroundColor = "lightcoral";
  }
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};