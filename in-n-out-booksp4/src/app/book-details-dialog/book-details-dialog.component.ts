//Danielle Taplin
//book-list.component.ts
//11/18/23
//book-details-dialog component for in n out books p3

//import IBook, component, material dialog reference and data, and inject
import { IBook } from '../../../book.interface';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

//create and export book details dialog component
@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {
  //create book variable of type IBook
  book: IBook;

  //define constructor with dialog ref and data parameters
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    //set book variable equal to current book data
    this.book = data.book;
  }

  ngOnInit(): void {
  }
}
