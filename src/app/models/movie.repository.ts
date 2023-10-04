import { Movie } from './movie';

export class MovieRepository {
    private movies: Movie[];
    constructor() {
        this.movies =[
            {id: 1, title: 'film 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imageUrl: '1.jpeg', isPopular: false, datePublished: new Date('1999-01-01')},
            {id: 2, title: 'film 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imageUrl: '2.jpeg', isPopular: true, datePublished: new Date('1999-01-01')},
            {id: 3, title: 'film 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imageUrl: '3.jpeg', isPopular: false, datePublished: new Date('1999-01-01')},
            {id: 4, title: 'film 4', description: 'film 4 açıklama', imageUrl: '4.jpeg', isPopular: true, datePublished: new Date('1999-01-01')},
            {id: 4, title: 'film 4', description: 'film 4 açıklama', imageUrl: '4.jpeg', isPopular: true, datePublished: new Date('1999-01-01')}
          ];
    }

    getMovies(): Movie[] {
        return this.movies;
    }
    getPopularMovies(): Movie[] {
        return this.movies.filter(i => i.isPopular);
    }

    getMovieById(id: number): Movie | undefined {
        return this.movies.find(i =>i.id == id);
    }
}
