const context = JSON.parse(document.getElementById("context").textContent);

function check_bad_short_link() {
  var bad_short_link = context.bad_short_link
  if (bad_short_link) {
    const state = context;
    const url = "/";
    history.replaceState(state, "", url);
    try {
      var bad_short_link = decodeURIComponent(bad_short_link);
    } catch (URIError) {
    }
    let bad_page_URL = "https://my-l.ml/" + bad_short_link;
    let error_message = "The requested link: "+ bad_page_URL + " does not exist.";
    let error_message_paragraph = document.createElement("p");
    error_message_paragraph.innerText = error_message;
    let item = document.getElementById("form");
    document.body.insertBefore(error_message_paragraph, item);
  }
}

function initialize() {
  check_bad_short_link();
}
