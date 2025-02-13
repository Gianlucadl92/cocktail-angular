import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../service/cocktail.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clienti',
  imports: [CommonModule],
  templateUrl: './clienti.component.html',
  styleUrl: './clienti.component.css'
})
export class ClientiComponent implements OnInit {
  eventi: any[] = [];
  isLoggedIn: boolean = true;

  constructor(private cocktailService: CocktailService, private router: Router) {}

  ngOnInit(): void {
    this.eventi = this.cocktailService.getEventi();
  }

  // logout
  logout() {
    this.cocktailService.logout(); // Esegue il logout
    this.router.navigate(['/']); // Torna alla home
  }
}
