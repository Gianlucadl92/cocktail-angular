import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail';
  // router
  constructor(private router: Router) {}

  goToPage(page: string, event: Event) {
    event.preventDefault();
    this.router.navigate([page]);
  }

}
