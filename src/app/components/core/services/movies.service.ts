import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http:HttpClient
  ) { }
  getAll(){
    return this.http.get('http://platzi-store.herokuapp.com/products');
  }
  getMovieIndex(id: string){
    return this.http.get(`http://localhost:3000/pelicula/${id}`);
  }
}
