const itemInput = document.getElementById("itemInput");
const quantityInput = document.getElementById("quantityInput");
const addBtn = document.getElementById("addBtn");
const errorMsg = document.getElementById("errorMsg");
const shoppingList = document.getElementById("shoppingList");
const counter = document.getElementById("counter");

// Keep track of how many items are not yet bought
let remainingCount = 0;

function updateCounter() {
  counter.textContent = remainingCount + " items remaining";
}

addBtn.addEventListener("click", () => {
  const itemName = itemInput.value.trim();
  const quantity = quantityInput.value;

  // Show error if input is empty
  if (itemName === "") {
    errorMsg.textContent = "Please enter an item name.";
    return;
  }

  // Clear error if input is fine
  errorMsg.textContent = "";

  // Create the list item elements
  const li = document.createElement("li");
  const itemText = document.createElement("span");
  const boughtBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  // Set the text and button labels
  itemText.textContent = itemName + " (x" + quantity + ")";
  boughtBtn.textContent = "Bought";
  deleteBtn.textContent = "Delete";

  // Add spacing between buttons
  boughtBtn.style.marginLeft = "10px";
  deleteBtn.style.marginLeft = "6px";

  // Bought button logic
  boughtBtn.addEventListener("click", () => {
    if (!li.classList.contains("bought")) {
      li.classList.add("bought");
      remainingCount--;
      updateCounter();
    }
  });

  // Delete button logic
  deleteBtn.addEventListener("click", () => {
    if (!li.classList.contains("bought")) {
      remainingCount--;
    }
    shoppingList.removeChild(li);
    updateCounter();
  });

  // Put it all together
  li.appendChild(itemText);
  li.appendChild(boughtBtn);
  li.appendChild(deleteBtn);
  shoppingList.appendChild(li);

  // Update counter
  remainingCount++;
  updateCounter();

  // Clear the inputs
  itemInput.value = "";
  quantityInput.value = 1;
});
