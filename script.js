const context = JSON.parse(document.getElementById("context").textContent);
if (context.bad_link) {
  let error_message = document.createElement("p");
  let item = document.getElementById("form");
  let bad_link = decodeURIComponent(context.bad_link);
  if (bad_link.slice(-1) == "/") {
    let bad_URL = "https://my-l.ml" + bad_link.slice(0, -1);
  } else {
    let bad_URL = "https://my-l.ml" + bad_link;
  }
  let error_message = "The requested link: "+ bad_URL + " does not exist.";
  document.body.insertBefore(error_message, item);
  error_message.innerText = decodeURIComponent(context.bad_URL);
}
