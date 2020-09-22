import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  birthday = new Date(1998, 1, 1); 
  toggle = true; 


  constructor() { }

  ngOnInit(): void {
  }

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  
  changeFormat() { this.toggle = !this.toggle; }

}
