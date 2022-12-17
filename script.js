const context = JSON.parse(document.getElementById("context").textContent);
if (context.bad_URL) {
  let error_message = document.createElement("p");
  let item = document.getElementById("form");
  let bad_URL = "https://my-l.ml" + decodeURIComponent(context.bad_URL).slice(0, -1);
  let error_message = "The requested link: "+ bad_URL + " does not exist.";
  document.body.insertBefore(error_message, item);
  error_message.innerText = decodeURIComponent(context.bad_URL);
}
