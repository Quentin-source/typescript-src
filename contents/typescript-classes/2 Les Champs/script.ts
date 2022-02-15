class Book {
  private bookID = 88;
  readonly librayName = 'thee book shelf';

  //Syntaxe raccourcie
  constructor(
    public title: string,
    public price: number,
    public dateOfParution: string,
    public author: string,
    public theme?: string[]
  ) {}

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
