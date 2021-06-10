import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesRoutingModule } from './movie-routing.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
    declarations: [
        MovieComponent,
        MoviesComponent,
        MovieDetailComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        MaterialModule
    ],
    exports: [
        MoviesRoutingModule
    ],
    bootstrap: [MovieComponent]
})
export class MovieModule{}