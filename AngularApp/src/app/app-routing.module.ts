import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NgForExampleComponent } from './components/ng-for-example/ng-for-example.component';
import { NgIfExampleComponent } from './components/ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './components/ng-switch-example/ng-switch-example.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';

const routes: Routes = 
[
  { path: 'menu', component: MenuComponent },
  { path: 'test', component: TestComponent },
  { path: 'test2', component: Test2Component },
  { path: 'ngForComponent', component: NgForExampleComponent },
  { path: 'ngIfComponent', component: NgIfExampleComponent },
  { path: 'ngSwitchComponent', component: NgSwitchExampleComponent },
  { path: 'pipes', component: PipesExampleComponent },
  { path: '', redirectTo: './test', pathMatch: 'full'},
  { path: '**', component: TestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
