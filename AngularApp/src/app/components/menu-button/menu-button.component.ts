import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItems';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Input()
  item: MenuItem;
  
  constructor() { }

  ngOnInit(): void {
  }

  GoToPage()
  {
    alert("sfasdfasdf");
  }
}
