import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccesoService2 } from '../../services/acceso2.service';

@Component({
  selector: 'app-formularioregistro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {
  servicio = inject(AccesoService2);

  usuarios: any[] = [];
  id: any;
  email: any;
  password: any;
  phone: any;
  name: any;
  surname: any;

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.servicio.getProductos().subscribe(
      response => {
        this.usuarios = response;
      },
      error => {
        console.error('Error al cargar los usuarios', error);
      }
    );
  }

  guardar(form: any) {
    const usuarioData = { 
      id: this.id, 
      email: this.email, 
      password: this.password, 
      phone: this.phone, 
      name: this.name, 
      surname: this.surname 
    };

    if (this.id) {
      this.servicio.updateUsuario(usuarioData).subscribe(
        response => {
          console.log('Usuario actualizado con éxito', response);
          this.loadUsuarios();
          this.resetForm();
        },
        error => {
          console.error('Error al actualizar el usuario', error);
        }
      );
    } else {
      this.servicio.postProducto(usuarioData).subscribe(
        response => {
          console.log('Usuario guardado con éxito', response);
          this.loadUsuarios();
          this.resetForm();
        },
        error => {
          console.error('Error al guardar el usuario', error);
        }
      );
    }
  }

  eliminar(id: string) {
    this.servicio.deleteProducto(id).subscribe(
      response => {
        console.log('Usuario eliminado con éxito', response);
        this.loadUsuarios();
      },
      error => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }

  editar(usuario: any) {
    this.id = usuario.id;
    this.email = usuario.email;
    this.password = usuario.password;
    this.phone = usuario.phone;
    this.name = usuario.name;
    this.surname = usuario.surname;
  }

  resetForm() {
    this.id = null;
    this.email = '';
    this.password = '';
    this.phone = '';
    this.name = '';
    this.surname = '';
  }
}