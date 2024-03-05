//Errado
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

createMenu('Foo', 'Bar', 'Baz', true);

//Correto
function createMenu2({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu2({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});

//----------------------------------------------//
//Errado
function email(client) {}
const database = {
  lookup: (client) => client
};

function emailClientes(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

//Correto

function ativarEmailClientes(clients) {
  clients
    .filter(clienteEstaAtivado)
    .forEach(email);
}

function clienteEstaAtivado(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

//----------------------------------------------//
function AdicionarNaData(date, month) {
  // ...
}

const date = new Date();

AdicionarNaData(date, 1);

//Correto
function AdicionarMesNaData(month, date) {
  // ...
}

AdicionarMesNaData(1, date);

//----------------------------------------------//
//Errado
//Correto