console.log("Hello!");

let actualContainer: HTMLDivElement,
  actualBtn: HTMLButtonElement,
  actualUL: HTMLUListElement,
  actualForm: HTMLFormElement,
  actualTextInput: HTMLInputElement,
  actualValidation: HTMLSpanElement;

const itemsContainer = document.querySelectorAll(
  ".items-container"
) as NodeListOf<HTMLDivElement>;

function addContainerListeners(currentContainer: HTMLDivElement) {
  const currentContainerDeletionBtn = currentContainer.querySelector(
    ".delete-container-btn"
  ) as HTMLButtonElement;
  const currentAddItemBtn = currentContainer.querySelector(
    ".add-item-btn"
  ) as HTMLButtonElement;

  deleteBtnListeners(currentContainerDeletionBtn);
  addItemsBtnListeners(currentAddItemBtn);
}

itemsContainer.forEach((container: HTMLDivElement) => {
  addContainerListeners(container);
});

function deleteBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener("click", handleContainerDeletion);
}

function addItemsBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener("click", handleAddItem);
}

function handleContainerDeletion(event: MouseEvent) {
  const btn = event.target as HTMLButtonElement;
  const btnsArray = [
    ...document.querySelectorAll(".delete-container-btn"),
  ] as HTMLButtonElement[];
  const containers = [
    ...document.querySelectorAll(".items-container"),
  ] as HTMLDivElement[];
  containers[btnsArray.indexOf(btn)].remove();
}

function handleAddItem(event: MouseEvent) {
  const btn = event.target as HTMLButtonElement;
  if (actualContainer) toggleForm(actualBtn, actualForm, false);
  setContainerItems(btn);
  toggleForm(actualBtn, actualForm, true);
}

function setContainerItems(btn: HTMLButtonElement) {
  actualBtn = btn;
  actualContainer = btn.parentElement as HTMLDivElement;
  actualUL = actualContainer.querySelector("ul") as HTMLUListElement;
  actualForm = actualContainer.querySelector("form") as HTMLFormElement;
  actualTextInput = actualContainer.querySelector("input") as HTMLInputElement;
  actualValidation = actualContainer.querySelector(
    ".validation-msg"
  ) as HTMLSpanElement;
}

function toggleForm(
  btn: HTMLButtonElement,
  form: HTMLFormElement,
  action: Boolean
) {
  if (!action) {
    form.style.display = "none";
    btn.style.display = "block";
  } else if (action) {
    form.style.display = "block";
    btn.style.display = "none";
  }
}
