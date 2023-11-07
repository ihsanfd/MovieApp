import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
  providers: [MovieService]
})
export class MoviesDetailsComponent {

  movie!: Movie;
  
  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
               }
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.movieService.getMovieById(params["movieId"]).subscribe(data => {
          this.movie = data;
      })
    })
  }  

}
