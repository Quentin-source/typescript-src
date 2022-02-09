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
  const currentCloseFormBtn = currentContainer.querySelector(
    ".close-form-btn"
  ) as HTMLButtonElement;
  const currentForm = currentContainer.querySelector("form") as HTMLFormElement;

  deleteBtnListeners(currentContainerDeletionBtn);
  addItemsBtnListeners(currentAddItemBtn);
  closingFormsBtnListeners(currentCloseFormBtn);
  addFormSubmitListeners(currentForm);
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

function closingFormsBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
}

function addFormSubmitListeners(form: HTMLFormElement) {
  form.addEventListener("submit", createNewItem);
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

function createNewItem(event: Event) {
  event.preventDefault();
  if (actualTextInput.value.length === 0) {
    actualValidation.textContent = "Must be at least 1 character long";
    return;
  } else {
    actualValidation.textContent = "";
  }
  const itemContent = actualTextInput.value;
  const li = `<li class="item" draggable="true">
    <p>${itemContent}</p>
    <button>X</button>
    </li>`;
  actualUL.insertAdjacentHTML("beforeend", li);
  const item = actualUL.lastElementChild as HTMLLIElement;
  const liBtn = item.querySelector("button") as HTMLButtonElement;
  handleItemDeletion(liBtn);
  actualTextInput.value = "";
}

function handleItemDeletion(btn: HTMLButtonElement) {
  btn.addEventListener("click", () => {
    const elToRemove = btn.parentElement as HTMLLIElement;
    elToRemove.remove();
  });
}
