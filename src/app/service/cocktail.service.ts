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
}
