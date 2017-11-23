import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchBookComponent } from "./search-book.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SearchBookComponent", () => {

  let fixture: ComponentFixture<SearchBookComponent>;
  let component: SearchBookComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SearchBookComponent]
    });

    fixture = TestBed.createComponent(SearchBookComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
