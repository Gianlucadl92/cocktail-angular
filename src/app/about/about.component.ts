import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../service/cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  aboutText: any;
  history: any;
  mission: any;
  team: any;
  cocktails: any[] = [];
  contacts: any;

  constructor(private cocktaiService: CocktailService) {}

  ngOnInit(): void {
    this.aboutText = this.cocktaiService.getAboutText();
    this.history = this.cocktaiService.getHistory();
    this.mission = this.cocktaiService.getMission();
    this.team = this.cocktaiService.getTeam();
    this.cocktails = this.cocktaiService.getCocktails();
    this.contacts = this.cocktaiService.getContacts();
  }
}
