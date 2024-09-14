import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
   
    this.isLoggedIn = localStorage.getItem('login') === 'true';
  }

  logout(): void {

    localStorage.removeItem('login');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}