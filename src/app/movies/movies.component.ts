import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{

  title = 'Film Listesi';
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;

  filterText:string = 'deneme';

  constructor(){
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }
  addToList($event:any, movie:Movie){
    if($event.target.classList.contains('btn-primary')){
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      $event.target.innerText = 'Listede';
    } else {
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      $event.target.innerText = 'Listeye Ekle';
    }
  }
}
