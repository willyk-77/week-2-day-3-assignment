const textarea = document.getElementById("myTextarea");
const counter = document.getElementById("counter");
const submitBtn = document.getElementById("submitBtn");
const LIMIT = 280;

textarea.addEventListener("input", function () {
  const count = textarea.value.length;

  // Update the counter text
  counter.textContent = count + "/" + LIMIT + " characters";

  // Remove old colour classes
  counter.classList.remove("orange", "red");
  textarea.classList.remove("orange", "red");

  // Apply the right colour
  if (count > LIMIT) {
    counter.classList.add("red");
    textarea.classList.add("red");
    submitBtn.disabled = true;
  } else if (count >= 261) {
    counter.classList.add("orange");
    textarea.classList.add("orange");
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = false;
  }
});

// Prevent form submission when over limit
submitBtn.addEventListener("click", function () {
  if (textarea.value.length > LIMIT) {
    alert("Too many characters! Please shorten your text.");
  } else {
    alert("Submitted!");
  }
});
