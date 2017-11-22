import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/book.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BookComponent implements OnInit {

  name: string;
  author: string;
  price: number;
  category: string;
  image: string;
  posts: Post[];

  constructor(private booksService: BooksService, private router: Router) {
    this.name = 'Playing with javascript';
    this.author = 'Sonu Kumar';
    this.price = 1234;
    this.category = 'Technichal';
    this.image = 'https://www.google.in';

    this.booksService.getBooks().subscribe(posts => {
      this.posts = posts;
    });
  }
  ngOnInit() {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (!loggedIn || loggedIn === 'false') {
      this.router.navigate(['/login']);
    }
  }
}

interface Post{
  id: number;
  name: string;
  owner: string;
  image: string;
}


