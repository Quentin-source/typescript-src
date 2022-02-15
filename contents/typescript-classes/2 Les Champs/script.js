"use strict";
class Book {
    //Syntaxe raccourcie
    constructor(title, price, dateOfParution, author, theme) {
        this.title = title;
        this.price = price;
        this.dateOfParution = dateOfParution;
        this.author = author;
        this.theme = theme;
        this.bookID = 88;
        this.librayName = 'thee book shelf';
    }
    promo() {
        console.log(this.bookID);
        this.librayName = 'Truc'; //Readonly
        return this.price * 0.5;
    }
}
const book1 = new Book('The Great Gatsby', 20, '11/04/1955', 'Tom Joe');
const book2 = new Book('Nana', 5, '12/07/1955', 'Emile Zola', [
    'Roman Historique',
    'Roman',
]);
book1.promo();
console.log(book1.bookID); //private pas accessible
console.log(book1.librayName); //private pas accessible
