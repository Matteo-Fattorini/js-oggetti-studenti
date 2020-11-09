// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var student = {
  Nome: "Matteo",
  Cognome: "Fattorini",
  Età: 30,
};

for (key in student) {
  document.getElementById("print").innerHTML +=
    key + " è " + student[key] + "<br>";
}

var classe = [
  {
    Nome: "Luca",
    Cognome: "Bianchi",
    Età: 30,
  },
  {
    Nome: "Marco",
    Cognome: "Paoletti",
    Età: 20,
  },
  {
    Nome: "Giulia",
    Cognome: "Rossi",
    Età: 40,
  },
];

$("#add").click(function () {
  var newStud = {};
  var newName = prompt("Inserisci il nome dello studente");
  newStud.Nome = newName;
  var newSurname = prompt("Inserisci il cognome dello studente");
  newStud["Cognome"] = newSurname;
  var newAge = prompt("Inserisci età dello studente");
  while (isNaN(newAge)) {
    newAge = prompt("Non hai inserito un numero");
  }
  newStud["Età"] = newAge;
  classe.push(newStud);
});

var toggle = false;

$("#show-class").click(function () {
  if (!toggle) {
    for (var i = 0; i < classe.length; i++) {
      $("#second-print").append(
        "Il nome dello studente è " +
          "<br>" +
          classe[i].Nome +
          "<br>" +
          "il cognome è " +
          "<br>" +
          classe[i].Cognome +
          "<br>" +
          "<br>"
      );
      toggle = true;
    }
  }
});
