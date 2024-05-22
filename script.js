//1

const musicCollection = {
  albums: [
    {
      title: "Abbey Road",
      artist: "The Beatles",
      year: 1969,
    },
    {
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      year: 1973,
    },
    {
      title: "Thriller",
      artist: "Michael Jackson",
      year: 1982,
    },
  ],
  [Symbol.iterator]() {
    let index = 0;
    const albums = this.albums;
    return {
      next() {
        return index < albums.length
          ? { value: albums[index++], done: false }
          : { done: true };
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`Название: ${album.title} - ${album.artist} (${album.year})`);
}
console.log('-----------------------------------------------------------');
// 2


const chefs = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);



const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

const orders = new Map();

function addOrder(client, dish) {
    if (orders.has(client)) {
        orders.get(client).push(dish);
    } else {
        orders.set(client, [dish]);
    }
}

addOrder({name: 'Иван'}, ['Пицца "Пепперони"и Тирамису']);
addOrder({name: 'Галя'}, ['Суши "Калифорния"и Пицца "Маргарита"']);
addOrder({name: 'Наташа'}, 'Чизкейк');

orders.forEach((dishes, client) => {
    console.log(`${client.name} заказал: ${dishes}`);
});

dishes.forEach((chef, dish) => {
 console.log(`Повар: ${chef} - готовит : ${dish}`);
});
