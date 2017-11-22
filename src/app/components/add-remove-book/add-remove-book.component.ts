import { Component, OnInit } from '@angular/core';
import 'sweetalert';

@Component({
  selector: 'app-add-remove-book',
  templateUrl: './add-remove-book.component.html',
  styleUrls: ['./add-remove-book.component.css']
})
export class AddRemoveBookComponent implements OnInit {
  tempBookObject: Book;
  bookName: string;
  bookISBN: string;
  bookDescription: string;
  bookCategory: string;
  bookMRP: number;
  bookAuthor: string;

  constructor() {
    this.tempBookObject.Name = 'sonu';
    this.tempBookObject.ISBN = 'sonu';
    this.tempBookObject.Description = 'sonu';
    this.tempBookObject.Category = 'sonu';
    this.tempBookObject.MRP = 12;
    this.tempBookObject.Author = 'sonu';
  }

  ngOnInit() {
    this.tempBookObject.Name = "sonu";
    this.tempBookObject.ISBN = "sonu";
    this.tempBookObject.Description = "sonu";
    this.tempBookObject.Category = "sonu";
    this.tempBookObject.MRP = 12;
    this.tempBookObject.Author = "sonu";
  }

  addBook() {

    this.tempBookObject.Name = this.bookName;
    this.tempBookObject.ISBN = this.bookISBN;
    this.tempBookObject.Description = this.bookDescription;
    this.tempBookObject.Category = this.bookCategory;
    this.tempBookObject.MRP = this.bookMRP;
    this.tempBookObject.Author = this.bookAuthor;

    swal('Congrates!!', this.bookName + ' ' + 'Successfully added!!', 'success');
  }
}

interface Book {
  Name: string;
  ISBN: string;
  Description: string;
  Category: string;
  MRP: number;
  Author: string;
}
