import { Component, OnInit } from '@angular/core';
import 'sweetalert';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from 'selenium-webdriver';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-remove-book',
  templateUrl: './add-remove-book.component.html',
  styleUrls: ['./add-remove-book.component.css']
})
export class AddRemoveBookComponent implements OnInit {
  bookName: string;
  bookISBN: string;
  bookDescription: string;
  bookCategory: string;
  bookMRP: number;
  bookAuthor: string;


  bookCreation: Book;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  addBook() {
    swal('Congrates!!', (this.bookName).toUpperCase() + ' ' + 'Successfully added!!', 'success');
    // this.router.navigate(['/']);
  }
}

export interface Book {
  Name: string;
  ISBN: string;
  Description: string;
  Category: string;
  MRP: number;
  Author: string;
}
