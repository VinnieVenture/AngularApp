import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItems';
import { ChangeMainContentService } from 'src/app/services/change-main-content.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Input()
  item: MenuItem;
  
  constructor(private changeService: ChangeMainContentService) { }

  ngOnInit(): void {
  }

  GoToPage()
  {
    this.changeService.NavigateTo(this.item.navigateTo);
  }
}
