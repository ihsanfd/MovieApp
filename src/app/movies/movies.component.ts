import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent{

  title = 'Film Listesi';
  movies: Movie[]= [];
  FilteredMovies: Movie[]=[];

  filterText:string = "";
  error:any = "";

  constructor(private alertify: AlertifyService, 
              private movieService: MovieService,
              private activatedRoute: ActivatedRoute){
    //constructor içine yazdığın parametreleri inject edersin.
    //classın içerisinde movie service bu şekilde erişebilirsin.
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMovies(params["categoryId"]).subscribe(data => {
        this.movies = data;
        this.FilteredMovies = this.movies;
        //gelen datayı al nereye eklemene gerektiği yere ekle.
        // async olduğu için subscribe kullanmamız gerek
  
      }, error => {
        this.error = error;
      });
    });
  }


  onInputChange() {
    this.FilteredMovies = this.filterText?
      this.movies.filter(m=> m.title.indexOf(this.filterText) !== -1 ||
                         m.description.indexOf(this.filterText) !== -1): this.movies
  }

  addToList($event: any, movie: Movie) {
    if($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      this.alertify.success(movie.title + ' listene eklendi');
    } else {
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      this.alertify.error(movie.title + ' listeden çıkarıldı.')
    }
  }
}
