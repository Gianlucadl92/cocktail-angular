import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from '../service/cocktail.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cocktails: any[] = [];
  searchQuery: string = '';

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    //Carica i cocktail automaticamente all'avvio
    this.cocktailService.getAllCocktails().subscribe((data: any) => {
      this.cocktails = data.drinks || []; // Se "drinks" è undefined, usa un array vuoto
    });
  }

  searchCocktails(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;

    if (this.searchQuery.trim() === '') {
      //Se il campo di ricerca è vuoto, ricarica tutti i cocktail
      this.ngOnInit();
    } else {
      //Altrimenti, esegui la ricerca
      this.cocktailService.searchCocktails(this.searchQuery).subscribe((data: any) => {
        this.cocktails = data.drinks || [];
      });
    }
  }
}
