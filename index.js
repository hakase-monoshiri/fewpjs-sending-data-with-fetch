// Add your code here

let configObj = {
 
  };


function submitData(inputName, inputEmail) {

    return fetch("http://localhost:3000/users", { 
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({name: inputName, email: inputEmail})
        })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.textContent = object.id;
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        document.body.textContent = error.message;
    });

};