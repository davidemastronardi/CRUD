// oggetto dati utente

let arrayDati = [
  {
    nome: "pino",
    cognome: "pellegrino",
    dataNascita: "12/04/1987",
    email: "davide@hotmail.it",
  },
  {
    nome: "mario",
    cognome: "rossi",
    dataNascita: "14/12/1990",
    email: "davide@hotmail.it",
  },
  {
    nome: "francesco",
    cognome: "costa",
    dataNascita: "20/10/2000",
    email: "davide@hotmail.it",
  },
];

let buttonAdd = document.querySelector(".button-add");
let table = document.getElementById("table");

render();

function aggiungi() {
  let nome = prompt("inserisci il tuo nome");
  let cognome = prompt("inserisci il tuo cognome");
  let data = prompt("inserisci il tuo data di nascita");
  let email = prompt("inserisci il tuo e-mail");

  arrayDati.push({
    nome: nome,
    cognome: cognome,
    dataNascita: data,
    email: email,
  });
  render();
}

function render() {
    table.innerHTML = `<tr>
    <th>#</th>
    <th>Nome</th>
    <th>Cognome</th>
    <th>Data di Nascita</th>
    <th>E-mail</th>
    <th>Action</th>
  </tr>`;
  for (let i = 0; i < arrayDati.length; i++) {
    const element = arrayDati[i];
    let row = ` <tr>
          <td>${i +1}</td>
          <td>${arrayDati[i].nome}</td>
          <td>${arrayDati[i].cognome}</td>
          <td>${arrayDati[i].dataNascita}</td>
          <td>${arrayDati[i].email}</td>
          <td><span onclick="modifica(${i})" class="material-symbols-outlined">
            edit
            </span><span onclick="cancella(${i})" class="material-symbols-outlined ">
                delete
                </span></td>
          </tr>`;
    table.innerHTML += row;
  
  }
}

function cancella(i) {
    arrayDati.splice(i, 1); 
    console.log(i);
    render();
}
function modifica(i) {
    let nome = prompt("inserisci il tuo nome");
    let cognome = prompt("inserisci il tuo cognome");
    let data = prompt("inserisci il tuo data di nascita");
    let email = prompt("inserisci il tuo e-mail");

    let newDati =   {
        nome: nome,
        cognome: cognome,
        dataNascita: data,
        email: email
      }

    arrayDati[i] = newDati
    console.log(arrayDati[i]);
    render();
}