import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeMainContentService } from './services/change-main-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router, private changeServie: ChangeMainContentService ) { }

  ngOnInit(): void {
    this.changeServie.GetNameToNavigate().subscribe(data => 
      {
        this.router.navigate([data]);
      });
  }
}
