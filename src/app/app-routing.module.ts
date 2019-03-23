import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'board/new', component: BoardComponent },
  { path: 'board/:guid:', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
