let obertka = document.querySelector(".main__grid");

let output = document.querySelector(".main__output");

obertka.addEventListener("click", function result(event) {
  let element = event.target.innerHTML;
  if (!event.target.classList.contains("but")) return;

  switch (element) {
    case "C":
      output.innerHTML = "";
      break;

    case "±":
      if (output.innerHTML > 0) {
        output.innerHTML = "-" + output.innerHTML;
      } else if (output.innerHTML < 0) {
        output.innerHTML = output.innerHTML.replace(/-/g, "");
      }
      break;

    case "=":
      if (output.innerHTML.search(/[^0-9*/+-.]/im) != -1) {
        //Пока не понимаю как это работает
        // должно при -1 переставать работать
        //  а оно работает наобот
        alert("Ведено не допустимо значения ");
        return false;
      }
      output.innerHTML = eval(output.innerHTML).toFixed(2);
      break;
    default:
      output.innerHTML += element;
  }
});
function removee(event) {
  event.preventDefault();
  output.innerHTML = output.innerHTML.slice(0, -1);
}
