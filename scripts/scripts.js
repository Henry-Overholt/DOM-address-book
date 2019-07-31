const contacts = [];
document.querySelector("body").addEventListener("onload", displayContacts);

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
  contacts.splice(Number(event.target.attributes[0].value), 1);
  displayContacts();
}
//I have no idea how to add code to part one to part two here.
// class Contact {
//   constructor(name, email, phone, relation) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//     this.relation = relation;
//   }

//   class AddressBook {
//     constructor() {
//       this.contacts = [];
//     }
//     addContacts(name, email, phone, relation) {
//       this.contacts.unshift(new Contact(name, email, phone, relation));
//     }
//   };
//   const addressBook = new AddressBook;
//   addressBook.addContacts("Henry", "henry@gmail.com", "555-555-5555", "Myself");
// addressBook.addContacts("Dad", "dad@gmail.com", "444-444-4444", "Dad");
// addressBook.addContacts(
//   "Brother",
//   "brother@gmail.com",
//   "333-333-3333",
//   "Brother"
// );
// addressBook.addContacts("Mom", "mom@gmail.com", "222-222-2222", "Brother");
// addressBook.addContacts(
//   "Sister",
//   "sister@gmail.com",
//   "111-111-1111",
//   "Brother"
// );
// addressBook.addContacts(
//   "Steve",
//   "steve@gmail.com",
//   "666-666-6666",
//   "Uncle-in-law"
// );
