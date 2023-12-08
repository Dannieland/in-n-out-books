//Danielle Taplin
//book-list.component.ts
//11/18/23
//book-list component for in n out books p2

//import Component, IBook, Observable, BookService, and dialog components
import { Component, OnInit } from '@angular/core';
import { IBook } from '../../../book.interface';
import { Observable } from 'rxjs'
import { BooksService } from '../../../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';



//create and export book list component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  //create regular array of IBooks
  books: Array<IBook> = [];

  //create book variable of type IBook
  book: IBook;

 //add constructor to find book info and output that info to console
 constructor(private booksService: BooksService, private dialog: MatDialog) {
  this.booksService.getBooks().subscribe(res => {
    console.log(res)

    for (let key in res){
      if (res.hasOwnProperty(key)){

        //set author to empty array, find details for author, return author info
        let authors = []
        if (res[key].details.authors){
          authors = res[key].details.authors.map(function(author) {
            return author.name
          })
        }

        //push info to books array
        this.books.push({
          isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
          title: res[key].details.title,
          description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
          numOfPages: res[key].details.number_of_pages,
          authors: authors
        })
      }
    }
  })
}

ngOnInit(): void {
}


showBookDetails(isbn: string){
  this.book = this.books.find(book => book.isbn === isbn);

  //dialog ref creation
  const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
    data: {
      book: this.book
    },
    disableClose: true,
    width: '800px'
  })

  //output all book data
  console.log(this.book)

  //reset values on page close
  dialogRef.afterClosed().subscribe(result => {
    if (result === 'confirm') {
      this.book = null;
    }
  });
}
}
