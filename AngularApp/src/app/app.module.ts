import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { ChangeMainContentService } from './services/change-main-content.service';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { NgForExampleComponent } from './components/ng-for-example/ng-for-example.component';
import { BookComponent } from './components/book/book.component';
import { NgIfExampleComponent } from './components/ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './components/ng-switch-example/ng-switch-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuButtonComponent,
    TestComponent,
    Test2Component,
    NgForExampleComponent,
    BookComponent,
    NgIfExampleComponent,
    NgSwitchExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChangeMainContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
