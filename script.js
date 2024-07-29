var message;
var apiUrl;

function sendMessage() {
  message = document.getElementById("messagebox").value
  apiUrl = document.getElementById("urlbox").value
  var data = {
    "content": message
  }

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
}