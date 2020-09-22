import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/Books';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

  books = Books;
  
  constructor() { }

  ngOnInit(): void {
  }

}
