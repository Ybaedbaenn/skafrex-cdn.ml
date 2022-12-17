const context = JSON.parse(document.getElementById("context").textContent);
error_message = document.getElementById("error_message");
if (context.bad_URL){
  error_message.innerText = decodeURIComponent(context.bad_URL);
}
