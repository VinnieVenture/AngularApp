import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/models/menuItems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  backgroundColor: string;
  menuItems = MenuItems;
  
  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = "#faebd7";
  }

  buttonSelected(color: string)
  {
    this.backgroundColor = color;
  }

}
