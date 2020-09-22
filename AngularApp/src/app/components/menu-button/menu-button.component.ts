import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output()
  buttonSelected = new EventEmitter<string>();
  
  constructor(private changeService: ChangeMainContentService) { }

  ngOnInit(): void {
  }

  GoToPage()
  {
    this.changeService.NavigateTo(this.item.navigateTo);
    
    this.buttonSelected.emit(this.item.backgroundColor);
  }
}
