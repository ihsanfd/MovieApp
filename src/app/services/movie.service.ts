import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.url).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
            // tap ile gelen datayı console a yazdırabilirsin.
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