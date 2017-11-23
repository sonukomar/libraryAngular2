import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  filterAuthorModel: string;
   filterArgs: Object;
  constructor() {}

  public updateFilter(event) {
    this.filterArgs = {name: this.filterAuthorModel};
  }
  ngOnInit() {}

}
