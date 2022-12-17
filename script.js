const context = JSON.parse(document.getElementById("context").textContent);
if (context.bad_link) {
  let error_message_paragraph = document.createElement("p");
  let item = document.getElementById("form");
  let bad_link = decodeURIComponent(context.bad_link);
  if (bad_link.slice(-1) == "/") {
    let bad_URL = "https://my-l.ml" + bad_link.slice(0, -1);
  } else {
    let bad_URL = "https://my-l.ml" + bad_link;
  }
  let error_message = "The requested link: "+ bad_URL + " does not exist.";
  error_message_paragraph.innerText = error_message;
  document.body.insertBefore(error_message, item);
}
