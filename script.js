const context = JSON.parse(document.getElementById("context").textContent);
if (context.bad_URL) {
  let error_message = document.createElement("p");
  let item = document.getElementById("form");
  document.body.insertBefore(error_message, item);
  error_message.innerText = decodeURIComponent(context.bad_URL);
}
