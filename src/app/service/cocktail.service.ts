import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
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
    title: 'Scopri il Mondo dei Cocktail 🍹',
    description:
      "Benvenuto su Cocktail DB, il luogo perfetto per esplorare l'arte della mixology! Qui troverai ricette classiche e innovative, consigli su ingredienti e tecniche di preparazione, oltre a curiosità sulla storia dei cocktail.",
  };

  // Storia dei cocktail
  history = {
    title: '🍸 La Storia dei Cocktail',
    description: `L’arte di miscelare bevande ha origini antiche, ma il termine cocktail appare per la prima volta nel 1806 negli Stati Uniti. Da allora, bartender di tutto il mondo hanno sperimentato nuove combinazioni, creando bevande iconiche come il Martini, il Mojito e il Negroni.
                  Le prime miscele alcoliche risalgono addirittura all’epoca romana e medievale, quando si aromatizzavano vini e liquori con spezie ed erbe per migliorarne il gusto e la conservazione. Tuttavia, il vero sviluppo dei cocktail avvenne tra il XVIII e il XIX secolo, quando gli alcolici vennero combinati con zucchero, acqua e bitter per creare drink raffinati.
                  Nel periodo del Proibizionismo negli anni ‘20, la necessità di mascherare il sapore dei liquori di contrabbando diede vita a nuove ricette, molte delle quali oggi sono tra i cocktail più famosi. Dagli anni ‘50 in poi, con l’esplosione della cultura Tiki e il glamour degli hotel di lusso, la mixology divenne un’arte riconosciuta in tutto il mondo.
                  Oggi, i cocktail continuano a evolversi, con mix innovativi che combinano ingredienti esotici, tecniche moderne e un’estetica sempre più curata.`,
    image:
      'https://images.pexels.com/photos/1189257/pexels-photo-1189257.jpeg?auto=compress&cs=tinysrgb&w=550',
  };

  // Missione
  mission = {
    title: '🎯 La Nostra Missione',
    description:
      'Abbiamo creato Cocktail DB con un obiettivo chiaro: rendere il mondo dei cocktail accessibile a tutti!',
    points: [
      '✅ Ricette dettagliate e facili da seguire',
      '✅ Suggerimenti sugli ingredienti e alternative creative',
      '✅ Tecniche di miscelazione per drink perfetti',
      '✅ Una community appassionata di cocktail lovers',
    ],
  };

  // Chi Siamo
  team = {
    title: '🏆 Chi Siamo',
    description:
      'Mario Rossi, appassionato di mixology e sperimentazione, ha creato questo sito per condividere la passione per i cocktail.',
    background: 'bg-dark text-white p-4 rounded shadow',
  };

  // Cocktail popolari
  cocktails = [
    {
      name: 'Martini',
      description: 'Elegante e intramontabile',
      image:
        'https://images.pexels.com/photos/2531186/pexels-photo-2531186.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Mojito',
      description: 'Fresco e perfetto per l’estate',
      image:
        'https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Negroni',
      description: 'Intenso e sofisticato',
      image:
        'https://media.istockphoto.com/id/1174793849/it/foto/cocktail-alcolico-negroni-in-due-bicchieri-decorati-con-buccia-darancia-con-cubetti-di.jpg?b=1&s=612x612&w=0&k=20&c=wzTIqnnqlPs_C3DDcxatSjj_0PiM6rKSQkyardakla0=',
    },
    {
      name: 'Margarita',
      description: 'Un mix esotico di tequila e lime',
      image:
        'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  // Contatti
  contacts = {
    email: 'tuo@email.com',
    social: [
      { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
      { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    ],
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

  // clienti
  private eventi = [
    { titolo: 'Masterclass Gin Tonic', data: '15 Marzo 2025', descrizione: 'Scopri i segreti per creare il Gin Tonic perfetto con esperti mixologist.' },
    { titolo: 'Cocktail Esotici', data: '28 Marzo 2025', descrizione: 'Un viaggio tra i migliori cocktail tropicali e come prepararli.' },
    { titolo: 'Whisky Tasting Night', data: '10 Aprile 2025', descrizione: 'Degustazione di whisky premium guidata da un esperto.' },
    { titolo: 'Mojito & Daiquiri Workshop', data: '22 Aprile 2025', descrizione: 'Impara a preparare i classici cocktail cubani con tecniche professionali.' },
    { titolo: 'Spritz & Aperitivo Italiano', data: '5 Maggio 2025', descrizione: 'Scopri i segreti dell’aperitivo perfetto con un focus sugli Spritz.' },
    { titolo: 'Bartender Pro Training', data: '20 Maggio 2025', descrizione: 'Corso avanzato per migliorare le tecniche di bartending e flair.' }
  ];

  getEventi() {
    return this.eventi;
  }
}
