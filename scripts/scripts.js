const contacts = [];
function handleContacts(event) {
  event.preventDefault();
  contacts.unshift({
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    relation: event.target[3].value
  });
  displayContacts();
  document.querySelector("form").reset();
}

function displayContacts() {
  document.querySelector(".contactsListed").innerHTML = "";
  contacts.forEach((contact, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Relation: ${contact.relation}</p>
      <button index = ${index} class="trash-btn">X</button>
      `;
    document.querySelector(".contactsListed").append(div);
  });
}

document.querySelector("form").addEventListener("submit", handleContacts);
document
  .querySelector(".contactsListed")
  .addEventListener("click", handleDelete);

function handleDelete(event) {
  // console.log("delete button was clicked");
  // console.dir(event.target.attributes[0].value);
  contact.splice(Number(event.target.attributes[0].value), 1);
  displayContacts();
  // console.log(event.target.attributes[0].value);
}
