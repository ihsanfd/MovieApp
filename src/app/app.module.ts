import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [    //components
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MoviesDetailsComponent,
    FooterComponent
  ],
  imports: [   //modules
    BrowserModule
  ],
  providers: [],   //services
  bootstrap: [AppComponent]  //starter component
})
export class AppModule { }
