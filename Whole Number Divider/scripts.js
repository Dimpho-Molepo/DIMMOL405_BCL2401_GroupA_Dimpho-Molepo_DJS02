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

  if (dividend.match(/\w\d\W/i) && divider.match(/\w\d\W/i)){
    const errorWarning = document.createElement("h1");
    errorWarning.innerText = "Something critical went wrong. Please reload the page"
    document.body.append(errorWarning);
    console.trace();
  }
   
});