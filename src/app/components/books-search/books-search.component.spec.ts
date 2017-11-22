import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BooksSearchComponent } from "./books-search.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BooksSearchComponent", () => {

  let fixture: ComponentFixture<BooksSearchComponent>;
  let component: BooksSearchComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BooksSearchComponent]
    });

    fixture = TestBed.createComponent(BooksSearchComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
