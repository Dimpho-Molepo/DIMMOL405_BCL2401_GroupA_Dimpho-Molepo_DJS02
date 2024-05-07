const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  result.innerText = Math.floor(dividend / divider);

  if (dividend === '' && divider === ''){
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  }

  if (dividend.match(/[^0-9]/) || divider.match(/[^0-9]/)) {
    form.style.display = "none";
    result.style.display = "none"
    const errorHeading = document.querySelector("h1")
    errorHeading.textContent = "Something critical went wrong. Please reload the page"
    document.body.appendChild(errorHeading);

});