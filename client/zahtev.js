var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "ime": "Nenad",
  "prezime": "Vincic",
  "smer": "RI",
  "predmeti": [
    {
      "ime": "LAAG",
      "espb": "8"
    },
    {
      "ime": "MA",
      "espb": "8"
    },
    {
      "ime": "Engleski 1",
      "espb": "6"
    },
    {
      "ime": "PDS",
      "espb": "8"
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8081/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
