const context = JSON.parse(document.getElementById("context").textContent);

function check_bad_link() {
  if (context.bad_link) {
    const state = context;
    const url = "/";
    history.pushState(state, "", url);
    try {
      var bad_link = decodeURIComponent(context.bad_link);
    } catch (URIError) {
      var bad_link = context.bad_link;
    }
    let bad_URL = "https://my-l.ml" + bad_link;
    let error_message = "The requested link: "+ bad_URL + " does not exist.";
    let error_message_paragraph = document.createElement("p");
    error_message_paragraph.innerText = error_message;
    let item = document.getElementById("form");
    document.body.insertBefore(error_message_paragraph, item);
  }
}

function initialize() {
  check_bad_link();
}
