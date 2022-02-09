"use strict";
console.log("Hello!");
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
const itemsContainer = document.querySelectorAll(".items-container");
function addContainerListeners(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemsBtnListeners(currentAddItemBtn);
}
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
function deleteBtnListeners(btn) {
    btn.addEventListener("click", handleContainerDeletion);
}
function addItemsBtnListeners(btn) {
    btn.addEventListener("click", handleAddItem);
}
function handleContainerDeletion(event) {
    const btn = event.target;
    const btnsArray = [
        ...document.querySelectorAll(".delete-container-btn"),
    ];
    const containers = [
        ...document.querySelectorAll(".items-container"),
    ];
    containers[btnsArray.indexOf(btn)].remove();
}
function handleAddItem(event) {
    const btn = event.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector("ul");
    actualForm = actualContainer.querySelector("form");
    actualTextInput = actualContainer.querySelector("input");
    actualValidation = actualContainer.querySelector(".validation-msg");
}
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
