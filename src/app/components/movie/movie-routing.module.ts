import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesComponent
    },
    {
        path: ':id',
        component: MovieDetailComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MoviesRoutingModule {}