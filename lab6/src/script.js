const apiUrl = "https://randomuser.me/api";

document.getElementById("downloadButton").onclick = () => {
  const people = document.getElementsByClassName("person");
  const messageArea = document.getElementById("messagesContainer");
  messageArea.innerHTML = "";
  for (let human of people) {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const personData = data.results[0];

        const picture = personData.picture.large;
        const cell = personData.cell;
        const country = personData.location.country;
        const postCode = personData.location.postcode;

        human.innerHTML = `
        <img src=${picture}></img>
        <p>Cell: ${cell}</p>
        <p>Country: ${country}</p>
        <p>Post Code: ${postCode}</p>
      `;
      })
      .then(() => {
        const message = document.createElement("p");
        message.innerHTML = `Success!`;
        message.style.color = "green";
        messageArea.appendChild(message);
      })
      .catch((error) => {
        const message = document.createElement("p");
        message.innerHTML = `Error!: ${error}`;
        message.style.color = "red";
        messageArea.appendChild(message);
      });
  }
};
