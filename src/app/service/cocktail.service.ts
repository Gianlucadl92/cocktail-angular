import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) {}

  //Metodo per caricare tutti i cocktail (ad esempio mostrando quelli con "a" iniziale)
  getAllCocktails(): Observable<any> {
    return this.http.get(this.apiURL + 'a'); // Prende tutti i cocktail che contengono "a"
  }

  //Metodo per cercare cocktail specifici
  searchCocktails(query: string): Observable<any> {
    return this.http.get(this.apiURL + query);
  }

  // Testo principale
  aboutText = {
    title: "About - Scopri il Mondo dei Cocktail 🍹",
    description: "Benvenuto su [Nome del Sito], il luogo perfetto per esplorare l'arte della mixology! Qui troverai ricette classiche e innovative, consigli su ingredienti e tecniche di preparazione, oltre a curiosità sulla storia dei cocktail."
  };

  // Storia dei cocktail
  history = {
    title: "🍸 La Storia dei Cocktail",
    description: "L’arte di miscelare bevande ha origini antiche, ma il termine 'cocktail' appare per la prima volta nel 1806 negli Stati Uniti. Da allora, bartender di tutto il mondo hanno sperimentato nuove combinazioni, creando bevande iconiche come il Martini, il Mojito e il Negroni.",
    image: "https://source.unsplash.com/600x400/?cocktail"
  };

  // Missione
  mission = {
    title: "🎯 La Nostra Missione",
    description: "Abbiamo creato [Nome del Sito] con un obiettivo chiaro: rendere il mondo dei cocktail accessibile a tutti!",
    points: [
      "✅ Ricette dettagliate e facili da seguire",
      "✅ Suggerimenti sugli ingredienti e alternative creative",
      "✅ Tecniche di miscelazione per drink perfetti",
      "✅ Una community appassionata di cocktail lovers"
    ]
  };

  // Chi Siamo
  team = {
    title: "🏆 Chi Siamo",
    description: "[Il tuo nome o il nome del team], appassionato di mixology e sperimentazione, ha creato questo sito per condividere la passione per i cocktail.",
    background: "bg-dark text-white p-4 rounded shadow"
  };

  // Cocktail popolari
  cocktails = [
    { name: "Martini", description: "Elegante e intramontabile", image: "https://source.unsplash.com/200x200/?martini" },
    { name: "Mojito", description: "Fresco e perfetto per l’estate", image: "https://source.unsplash.com/200x200/?mojito" },
    { name: "Negroni", description: "Intenso e sofisticato", image: "https://source.unsplash.com/200x200/?negroni" },
    { name: "Margarita", description: "Un mix esotico di tequila e lime", image: "https://source.unsplash.com/200x200/?margarita" }
  ];

  // Contatti
  contacts = {
    email: "tuo@email.com",
    social: [
      { name: "Instagram", url: "https://instagram.com", icon: "📷" },
      { name: "Facebook", url: "https://facebook.com", icon: "📘" }
    ]
  };

  // Metodi per ottenere i dati
  getAboutText() {
    return this.aboutText;
  }

  getHistory() {
    return this.history;
  }

  getMission() {
    return this.mission;
  }

  getTeam() {
    return this.team;
  }

  getCocktails() {
    return this.cocktails;
  }

  getContacts() {
    return this.contacts;
  }
}

