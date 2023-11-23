import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent {

  categories: Category[] = [];
  model: any = {
    categoryId: ''
  };
  
  
    constructor(private categoryService: CategoryService,
                private movieService: MovieService,
                private router: Router,
                private alertify:AlertifyService) { 
      
    }

  
    ngOnInit(): void {
      this.categoryService.getCategories().subscribe(data => {
        this.categories = data;
      }); 
    }
    movieForm = new FormGroup({
    title: new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    description: new FormControl(""),
    imageUrl: new FormControl(""),
    categoryId: new FormControl("")
  });

    clearForm() {
      this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: ''
      });
    }
    createMovie() {
      console.log(this.movieForm.value.title);

      // createMovie(title:any, description:any, imageUrl:any, categories:any) {
      // if (title.value === '' || description.value === '' || imageUrl.value === '' || categories.value === '-1') {
      //   this.alertify.error('Lütfen bütün boşlukları doldurunuz.');
      //   return;
      // }

      // if(title.value.length < 5 || title.value.length > 20){
      //   this.alertify.error('Başlık 5 ile 20 karakter arasında olmalıdır.');
      //   return;
      // }

      // if(description.value.length < 10 || description.value.length > 50){
      //   this.alertify.error('Açıklama 10 ile 50 karakter arasında olmalıdır.');
      //   return;
      // }

      // const extentions = ['jpg', 'png', 'jpeg'];
      // const fileExtention = imageUrl.value.split('.').pop();

      // if(extentions.indexOf(fileExtention) === -1){
      //   this.alertify.error('Dosya uzantısı jpg, png veya jpeg olmalıdır.');
      //   return;
      // }

      // const movie = { 
      //   id: 0,
      //   title: this.model.title,
      //   description: this.model.description,
      //   imageUrl: this.model.imageUrl,
      //   isPopular: false,
      //   datePublished: new Date().getTime(),
      //   categoryId: this.model.categories
      // };

      // this.movieService.createMovie(movie).subscribe(data =>
      //   this.router.navigate(['/movies', data.id])
      // );

    }

    log(value: any){
      console.log(value);
    }

}
