import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/Books';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {

  books = Books;
  
  constructor() { }

  ngOnInit(): void {
  }

}
