import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable() 
// global servis oluşturmak için provides root yazarsın
// yada app module kısmındaki providers a eklersin. 
//Bu şekilde sadece class ın içinde kullanırsın.
export class MovieService {
    url='http://localhost:3000/movies';
    constructor(private http: HttpClient) { }
    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.url);
    }
}