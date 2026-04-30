import { Component } from '@angular/core';


interface Lugar {
  nombre: string;
  imagen: string;
}

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.html',
  styleUrl: './map.scss',
})
export class Map {
   busqueda: string = '';

  recientes: Lugar[] = [
    { nombre: 'Rectoría', imagen: 'assets/img/rectoria.jpg' },
    { nombre: 'Auditorio', imagen: 'assets/img/auditorio.jpg' },
    { nombre: 'Biblioteca', imagen: 'assets/img/biblioteca.jpg' },
    { nombre: 'Edificio B', imagen: 'assets/img/edificio.jpg' }
  ];

  guardados: Lugar[] = [
    { nombre: 'Fútbol', imagen: 'assets/img/futbol.jpg' },
    { nombre: 'Basquetbol', imagen: 'assets/img/basquet.jpg' }
  ];
}
