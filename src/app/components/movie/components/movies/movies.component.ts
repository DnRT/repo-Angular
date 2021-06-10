import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from '../../../core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  array: Movie[]|undefined;
  constructor(
    private route:ActivatedRoute,
    private moviesService:MoviesService
  ) { }

  ngOnInit(): void {
    this.fetchMovie();
  }
  clickAux(id: string){
    console.log("ID: "+id)
  }
  fetchMovie(){
    this.moviesService.getAll().subscribe((movies) => {
      console.log(movies);
    });
  }

}
