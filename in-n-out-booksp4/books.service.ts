//Danielle Taplin
//books.service.ts
//11/18/23
//book service for in n out books p2

//Import Injectable, Observable, map, of, and the IBook interface
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { of } from "rxjs"
import { IBook } from './book.interface';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

//create books service
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //add array of isbn numbers
  isbns: Array<string> = [
    '0345339681','0261103571', '9780593099322',
    '9780261102361','9780261102378','9780590302715',
    '9780316769532', '9780743273565', '9780590405959'
  ]

  //add constructor accepting httpClient as param
  constructor(private http: HttpClient) {

   }

   //create function returning array of books
   getBooks() {

    let params = new HttpParams();

    //adding param appends
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`)
    params = params.append('format', 'json')
    params = params.append('jscmd', 'details')

    //return open api book info w params
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}
