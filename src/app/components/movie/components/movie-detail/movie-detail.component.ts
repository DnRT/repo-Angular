import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';

import { MoviesService } from '../../../core/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie|undefined;
 constructor(
    private activatedRoute:ActivatedRoute,
    private moviesService:MoviesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      const id=params.id;
    });
    console.log(this.movie);
  }

}
