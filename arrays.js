const faker = require('faker');

faker.locate = 'pt_BR';

class Person {
  constructor(name, birthday, genre, lastpurchase, countpurchase) {
    this.name = name;
    this.birthday = birthday;
    this.genre = genre;
    this.lastpurchase = lastpurchase;
    this.countpurchase = countpurchase;
  }
}

const clients = [];

for (let index = 0; index < 1000; index += 1) {
  const birthday = faker.date.past(110, 2020);
  const minPrice = faker.commerce.price();

  const ppl = new Person(
    faker.name.findName(),
    birthday,
    faker.random.arrayElement(['male', 'female']),
    faker.date.past(2, 2020),
    faker.random.number(70),
    // faker.commerce.price(minPrice),
  );

  clients.push(ppl);
}


// Funções Auxiliares
function getFirstName(clientArray) {
  return clientArray.map((client) => client.name.split(' ')[0]);
}

function getClientAge(client) {
  const today = new Date();
  const bornAt = new Date(client.birthday);

  let age = today.getFullYear() - bornAt.getFullYear();

  if (today.getMonth() < (bornAt.getMonth() - 1)) {
    age -= 1;
  }
  if (((bornAt.getMonth() - 1) === today.getMonth()) && (today.getDate() < bornAt.getDate())) {
    age -= 1;
  }
  return age;
}
// Fim Funções Auxiliares

// Desenvolva, utilizando filter, uma função que, dado um caractere de entrada, retorne todos os registros de clientes cujo o nome inicia com o caractere.
// Retorne o array de clientes
function clientNameStartedWithCharacter(character) {
  return clients.filter((client) => {
    if (client.name[0].toLowerCase() === character.toLowerCase()) {
      return client;
    }
    return false;
  });
}

// Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número com o total de registros encontrados.
function countClientNameStartedWithCharacter(character) {
  return clientNameStartedWithCharacter(character).length;
}

// Desenvolva uma função que retorne apenas os nomes dos clientes.
function getClientsNames() {
  return clients.map((client) => client.name);
}

// Desenvolva uma função que retorne apenas o primeiro nome dos clientes.
function getClientsFirstName(clientArray) {
  if (!clientArray) {
    return getFirstName(clients);
  }

  return getFirstName(clientArray);
}

// Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.
function getClientsFirstNameByCharacter(character) {
  return getClientsFirstName(clientNameStartedWithCharacter(character));
}

// Desenvolva uma função que retorne todos os usuários que são maiores de idade.
function clientsWithLegalAge(legalAge) {
  return clients.filter((client) => {
    if (getClientAge(client) >= legalAge) {
      return client;
    }
    return false;
  });
}

// Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.
function isClient(name) {
  return clients.find((client) => client.name === name);
}

// Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.
function totalSells() {
  let total = 0;
  clients.map((client) => {
    total += Number(client.countpurchase);
    return false;
  });

  return total;
}

// Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.
function clientsWithoutPurchaseAtLeast(months) {
  const date = new Date();
  const maxDate = date.setMonth(date.getMonth() - months);
  return clients.filter(client => client.lastpurchase < maxDate)
}

// Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.
function clientWithPurchases(number) {
  return clients.filter(client => client.countpurchase > number)
}

// console.log(clients);
// console.log(clientNameStartedWithCharacter('j'));
// console.log(countClientNameStartedWithCharacter('q'));
// console.log(getClientsNames());
// console.log(getClientsFirstName());
// console.log(getClientsFirstNameByCharacter('p'));
// console.log(clientsWithLegalAge(21));
// console.log('Retorna undefined, se não encontrar');
// console.log(isClient('Kasandra Hamill'));
// console.log(' ');
// console.log('Aqui é pra forçar um retorno existente');
// console.log(isClient(clients[0].name));
// console.log(totalSells());
// console.log(clientsWithoutPurchaseAtLeast(12));
// console.log(clientWithPurchases(15));



