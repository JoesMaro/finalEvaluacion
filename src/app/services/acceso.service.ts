import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  private apiUrl = 'http://localhost:3000/login'; // URL para login (esto puedes dejarlo así)
  private librosUrl = 'http://localhost:3001/libros'; // URL de la API de libros

  constructor(private http: HttpClient) {}

  // Método para obtener usuarios (ya existente)
  getUsuarios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Método para obtener libros desde la API
  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(this.librosUrl);
  }
  

  // Método para enviar datos del formulario (crear usuario o login)
  postUsuarios(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, usuario);
  }
}
