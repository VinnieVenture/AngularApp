import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';
import { Books } from 'src/app/models/Books';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {

  books = Books;

  constructor() { }

  ngOnInit(): void {
  }

}
