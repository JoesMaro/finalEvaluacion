import { Component, Inject, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccesoService } from '../../services/acceso.service';

@Component({
  selector: 'app-formulariologin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulariologin.component.html',
  styleUrl: './formulariologin.component.css'
})
export class FormulariologinComponent {
email: any=""
password: any=""
servicio= inject(AccesoService)
usuarios=[]
ngOnInit(): void {
this.servicio.getUsuarios().subscribe(u => {
  this.usuarios=u
}

)
  
}

login(form: NgForm){
  console.log(form.value)
this.servicio.postUsuarios(form.value).subscribe(m =>{
  if(m.accessToken !=""){
   localStorage.setItem('login',"true")
   window.location.href = 'home'
  }
})

}
}
