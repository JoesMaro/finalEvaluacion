import { Component } from '@angular/core';
import { FormularioregistroComponent } from "../../components/formularioregistro/formularioregistro.component";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormularioregistroComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
