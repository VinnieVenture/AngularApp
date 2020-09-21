import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NgForExampleComponent } from './components/ng-for-example/ng-for-example.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';

const routes: Routes = 
[
  { path: 'menu', component: MenuComponent },
  { path: 'test', component: TestComponent },
  { path: 'test2', component: Test2Component },
  { path: 'ngForComponent', component: NgForExampleComponent },
  { path: '', redirectTo: './test', pathMatch: 'full'},
  { path: '**', component: TestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
