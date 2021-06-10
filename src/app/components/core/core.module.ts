import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesService } from './services/movies.service';
import { TokenService } from './services/token.service';
import { MovieFormComponent } from './admin/components/movie-form/movie-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovieFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [
    MoviesService,
    TokenService
  ]
})
export class CoreModule { }
