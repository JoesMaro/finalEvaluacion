import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoService2 {
  private API_USUARIOS = 'http://localhost:3000/users';
  private API_LIBROS = 'http://localhost:3001/libros';

  constructor(private http: HttpClient) {}

  // Métodos para usuarios
  postProducto(item: any): Observable<any> {
    return this.http.post(this.API_USUARIOS, item);
  }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_USUARIOS);
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.API_USUARIOS}/${id}`);
  }

  updateUsuario(item: any): Observable<any> {
    return this.http.put(`${this.API_USUARIOS}/${item.id}`, item);
  }

  // Métodos para libros
  postLibro(item: any): Observable<any> {
    return this.http.post(this.API_LIBROS, item);
  }

  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(this.API_LIBROS);
  }

  deleteLibro(id: string): Observable<any> {
    return this.http.delete(`${this.API_LIBROS}/${id}`);
  }

  updateLibro(item: any): Observable<any> {
    return this.http.put(`${this.API_LIBROS}/${item.id}`, item);
  }
}
