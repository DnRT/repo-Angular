import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  movies: Movie[] = [
    {
      Nombre: 'Jhon Wick 1',
      Genero: 'Accion',
      Dir_img: '../../assets/JW1.jpg',
      Sinopsis: 'El inicio de la venganza',
      ID_pag: '1'
    },
    {
      Nombre: 'Jhon Wick 2',
      Genero: 'Accion',
      Dir_img: '../../assets/JW2.jpg',
      Sinopsis: 'Concecuencias de acciones pasadas',
      ID_pag: '2'
    },
    {
      Nombre: 'Jhon Wick 3',
      Genero: 'Accion',
      Dir_img: '../../assets/JW3.jpg',
      Sinopsis: 'El reotorno de una legenda',
      ID_pag: '3'
    }
  ];

}
