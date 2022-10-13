class User {
    constructor(name, lastname, books, pets) {
      this.name = name;
      this.lastname = lastname;
      this.books = books;
      this.pets = pets;
    }
    getFullName() {
      return `${this.name} ${this.lastname}`;
    }
    addPet(petNew) {
      this.pets.push(petNew);
    }
    countPets() {
      return this.pets.length;
    }
    addBook(book, author) {
      this.books.push({ name: book, author: author });
    }
    getBookNames() {
      return this.books.map((e) => {
        const names = e.name;
        return names;
      });
    }
  }
  

  const userTest = new User(
    "Ignacio",
    "Argüello",
    [{ name: "Rebelión en la granja", author: "George Orwell" }],
    ["Gato", "Perro"]
  );
  

  console.log("Me llamo:", userTest.getFullName());
  console.log("¿Cuantas mascotas tengo? :", userTest.countPets(), "por el momento");
  userTest.addPet("Tortuga");
  console.log("Se sumo un nuevo integrante, ahora tengo:", userTest.countPets(), "y son:", userTest.pets);
  console.log("Compré un nuevo libro");
  userTest.addBook("Cien años de soledad", "Gabriel García Márquez");
  console.log("Ahora tengo estos dos libros:", userTest.getBookNames());