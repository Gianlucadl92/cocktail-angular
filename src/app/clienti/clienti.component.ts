import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../service/cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clienti',
  imports: [CommonModule],
  templateUrl: './clienti.component.html',
  styleUrl: './clienti.component.css'
})
export class ClientiComponent implements OnInit {
  eventi: any[] = [];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.eventi = this.cocktailService.getEventi();
  }
}
