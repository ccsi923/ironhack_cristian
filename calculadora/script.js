
let bttn = document.querySelectorAll(".bttn li");
let input = document.querySelector(".input");

function regis() {
  let bttnVal = this.innerHTML;
  let inputVal = input.innerHTML;
  switch (bttnVal) {
    case "c":
      input.innerHTML = "";//cleaning
      break;
    case "=":
		  let equa = inputVal;
		  if(equa){
			  try {
          input.innerHTML = eval(equa); //calculation since string
			  } catch (e) {
				  alert('Incorrect expression');
				  input.innerHTML = "";
        }
      }
      break;
    default:
		  input.innerHTML += bttnVal;
		  break;
  }
}

for (let i = 0; i < bttn.length; i++) {
  //registering and printing input
  bttn[i].addEventListener('click', regis);
}
