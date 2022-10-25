const Manager = require("./manager.js");
const manager = new Manager();

const product1 = {
    title: "The Dark Side of the Moon",
    price: 499.99,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/1024px-The_Dark_Side_of_the_Moon_Cover.svg.png",
  };
  const product2 = {
    title: "In Rainbows",
    price: 599.99,
    thumbnail: "https://canchageneral.com/wp-content/uploads/2017/10/rainbows.jpg",
  };
  const product3 = {
    title: "Abbey Road",
    price: 699.99,
    thumbnail: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg.webp",
  };

//manager.save(product1).then((result) => console.log(result)).catch((err)=>console.log(err))
//manager.save(product2).then((result) => console.log(result)).catch((err)=>console.log(err))
//manager.save(product3).then((result) => console.log(result)).catch((err)=>console.log(err))
//manager.getAll().then((result) => console.log(result)).catch((err)=>console.log(err))
//manager.getById(number).then((result) => console.log(result)).catch((err)=>console.log(err))
//manager.deleteById(number).then((result) => console.log(result)).catch((err)=>console.log(err))
//manager.deleteAll().then((result) => console.log(result)).catch((err)=>console.log(err))
  