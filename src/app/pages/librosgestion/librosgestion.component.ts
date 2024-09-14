import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccesoService2 } from '../../services/acceso2.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-librosgestion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './librosgestion.component.html',
  styleUrls: ['./librosgestion.component.css']
})
export class LibrosgestionComponent implements OnInit {
  libros: any[] = [];
  id: any;
  titulo: any;
  imagen_portada: any;

  constructor(private accesoService2: AccesoService2) {}

  ngOnInit(): void {
    this.loadLibros();
  }

  loadLibros() {
    this.accesoService2.getLibros().subscribe(
      response => {
        this.libros = response;
      },
      error => {
        console.error('Error al cargar los libros', error);
      }
    );
  }


  guardar(form: any) {
    const libroData = { id: this.id, titulo: this.titulo, imagen_portada: this.imagen_portada };
    
    if (this.id) {
      this.accesoService2.updateLibro(libroData).subscribe(
        response => {
          console.log('Libro actualizado con éxito', response);
          this.loadLibros();
          this.resetForm();
        },
        error => {
          console.error('Error al actualizar el libro', error);
        }
      );
    } else {
      this.accesoService2.postLibro(libroData).subscribe(
        response => {
          console.log('Libro guardado con éxito', response);
          this.loadLibros();
          this.resetForm();
        },
        error => {
          console.error('Error al guardar el libro', error);
        }
      );
    }
  }

  eliminar(id: string) {
    this.accesoService2.deleteLibro(id).subscribe(
      response => {
        console.log('Libro eliminado con éxito', response);
        this.loadLibros();
      },
      error => {
        console.error('Error al eliminar el libro', error);
      }
    );
  }

  editar(libro: any) {
    this.id = libro.id;
    this.titulo = libro.titulo;
    this.imagen_portada = libro.imagen_portada;
  }

  resetForm() {
    this.id = null;
    this.titulo = '';
    this.imagen_portada = '';
  }
}
