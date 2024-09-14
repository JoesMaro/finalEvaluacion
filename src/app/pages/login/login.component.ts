import { Component } from '@angular/core';
import { FormulariologinComponent } from "../../components/formulariologin/formulariologin.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormulariologinComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
