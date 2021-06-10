import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie={
    Nombre: 'string',
    Genero: 'string',
    Dir_img: 'string',
    Sinopsis: 'string',
    ID_pag: '0'
  };
  @Output() exit: EventEmitter<any>= new EventEmitter<any>();
  constructor() {
   }

  ngOnInit(): void {
  }

  clickExit(){
    this.exit.emit(this.movie.ID_pag);
  }
}
