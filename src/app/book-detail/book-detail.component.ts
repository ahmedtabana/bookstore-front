import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  book = {
    title: "dummy title",
    description: "dummy description",
    unitCost: "123",
    isbn: "123-3456-567",
    nbOfPages: "456",
    language: "English"
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete(){
    // invoke rest API delete
    this.router.navigate(['/book-list']);
  }

}
