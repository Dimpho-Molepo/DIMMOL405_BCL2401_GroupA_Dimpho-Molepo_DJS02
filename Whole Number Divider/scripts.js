const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (divider === "0" ) {
    result.classList.add("error-message");
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error(new Error("Invalid result, divider can not be zero"));
  } else if (!dividend || !divider ){
    result.classList.add("error-message");
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    console.error(new Error("Both values are required in inputs."))
  } else if (dividend.match(/[^0-9]/) || divider.match(/[^0-9]/)) {
    const criticalError = document.createElement("div");
    criticalError.classList.add("critical-error");
    criticalError.textContent = "Something critical went wrong. Please reload the page"
    document.body.append(criticalError);
    console.error(new Error("Invalid number"));
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});