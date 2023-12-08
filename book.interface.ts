//Danielle Taplin
//book.interface.ts
//11/18/23
//book interface for in n out books p1

//create book interface with isbn, title, description, page number, and authors values
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
