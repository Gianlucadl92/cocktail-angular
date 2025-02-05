import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from '../service/cocktail.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cocktails: any[] = [];
  searchQuery: string = '';

  constructor(private cocktailService: CocktailService) {}

  searchCocktails(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;

    if (this.searchQuery.trim() === '') {
      this.cocktails = [];
      return;
    }

    this.cocktailService.getCocktails(this.searchQuery).subscribe((data) => {
      this.cocktails = data.drinks || [];
    });
  }
}
