import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable() 
// global servis oluşturmak için provides root yazarsın
// yada app module kısmındaki providers a eklersin. 
//Bu şekilde sadece class ın içinde kullanırsın.
export class MovieService {
    url='http://localhost:3000/movies';
    constructor(private http: HttpClient) { }
    getMovies(categoryId:number): Observable<Movie[]> {
        let newUrl = this.url;
        if(categoryId) {
            newUrl += "?categoryId=" + categoryId;
        }
        return this.http.get<Movie[]>(newUrl).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
            // tap ile gelen datayı console a yazdırabilirsin.
        );
    }


    getMovieById(movieId:number): Observable<Movie> {
        return this.http.get<Movie>(this.url + "/" + movieId).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    } 

    createMovie(movie:Movie): Observable<Movie> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': 'Token'
            })
        }
        return this.http.post<Movie>(this.url, movie).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }
    private handleError(error: HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
            //client yada network tarafında oluşan hatalar
            console.log("bir hata oluştu" + error.error.message);
        } else {
            //backend tarafında oluşan hatalar
            switch(error.status) {
                case 404:
                    console.log("not found");
                    break;
                case 500:
                    console.log("server error");
                    break;
                case 403:
                    console.log("access denied");
                    break;
                default:
                    console.log("bir hata oluştu");
            }
        }
        return throwError("bir hata oluştu");
    }
}