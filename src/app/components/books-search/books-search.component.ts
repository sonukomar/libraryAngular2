import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: "app-books-search",
  templateUrl: "./books-search.component.html",
  styleUrls: ["./books-search.component.css"]
})
export class BooksSearchComponent implements OnInit {
  name: string;
  ISBN: string;
  author: string;
  description: string;
  image: string;
  category: string;
  books = [];
  filterModel: string;
  filterArgs: Object;
  temp = [
    {
      name: "Introduction to Angular",
      ISBN: "ASDF1234ASD",
      author: "Ramesh Shippy",
      description: "This is angular js book which is very good book",
      image: "../../../assets/books/angular.svg",
      category: "Technology"
    },
    {
      name: "HTML 5",
      ISBN: "SD112ASDAS",
      author: "Mike Tension",
      description: "This is angular js book which is very good book",
      image: "../../../assets/books/html.png",
      category: "Technology"
    },
    {
      name: "Python",
      ISBN: "SD112ASDAS",
      author: "Mike Tension",
      description: "This is angular js book which is very good book",
      image: "../../../assets/books/python.png",
      category: "Technology"
    },
    {
      name: "Django",
      ISBN: "SD112ASDAS",
      author: "Mike Tension",
      description: "This is angular js book which is very good book",
      image: "../../../assets/books/django.png",
      category: "Technology"
    },
    {
      name: "Node Js",
      ISBN: "SD112ASDAS",
      author: "Mike Tension",
      description: "This is angular js book which is very good book",
      image: "../../../assets/books/node.png",
      category: "Technology"
    },
    {
      name: "Javascript",
      ISBN: "SD112ASDAS",
      author: "Mike Tension",
      description: "This is angular js book which is very good book",
      image: "../../../assets/books/js.png",
      category: "Technology"
    },
    {
      name: "CSS 3",
      ISBN: "SD112ASDAS",
      author: "Mike Tension",
      description: "This is angular js book which is very good book",
      image: "../../../assets/books/css.png",
      category: "Technology"
    }
  ];
  showBorrowButton = [];
  constructor(private router: Router) {}

  public updateFilter(event) {
    this.filterArgs = { name: this.filterModel };
  }

  public showBookHolder(index) {
    console.log("index", index);
    this.showBorrowButton[index] = true;
  }

  public hideBookHolder(index) {
    this.showBorrowButton[index] = false;
  }

  public borrowBook(evet, bookObject){
    swal('Book titled' + ' ' + (bookObject.name) + ' ' + 'Successfully borrowed.', ' ' , 'success');
  };

  ngOnInit() {
    this.books = this.temp;

    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (!loggedIn || loggedIn === "false") {
      this.router.navigate(["/login"]);
    }
  }
}
