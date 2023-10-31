import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';

const routs: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies/category/:categoryId', component: MoviesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routs)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
