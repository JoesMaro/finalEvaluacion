import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoService2 } from '../../services/acceso2.service';


@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  libros: any[] = []; // Variable para almacenar el array de libros

  constructor(private accesoService: AccesoService2) {}

  ngOnInit(): void {
    this.accesoService.getLibros().subscribe((data) => {
      console.log(data); 
      this.libros = data; 
    }, (error) => {
      console.error("Error al obtener los libros:", error); 
    });
  }
}
