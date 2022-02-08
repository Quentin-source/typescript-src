//Type Assertion

// Il y a un type pour chaque élément html
// \! indique que ça retournera retournera obligatoirement quelquechose

const formElementBis: HTMLFormElement = document.querySelector("form")!;
console.log(formElementBis.children);

const formElement = document.querySelector("form") as HTMLFormElement;
console.log(formElement.children);

const inputElement = document.querySelector("input") as HTMLInputElement;
console.log(inputElement);

formElement.addEventListener("submit", handleSubmit);

function handleSubmit(event: Event) {
  event.preventDefault();
  console.log("Submitted");
}

window.addEventListener("click", handleClick);

function handleClick(event: MouseEvent) {
  console.log(event.clientX, event.clientY);
}


//Avec querySekectorAll pas besoin de typecasting
// on dit que c'est overkill quand on en fait trop
// un querySelectorAll reverra forcement un nodeList
const pList = document.querySelectorAll('p');
console.log(pList);


const pListOverkill = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
console.log(pListOverkill);
