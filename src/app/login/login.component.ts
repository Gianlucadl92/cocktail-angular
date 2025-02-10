import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // Crea il form con validazioni
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Campo email, obbligatorio e valido come email
      password: ['', [Validators.required, Validators.minLength(12)]],  // Campo password, obbligatorio e almeno 6 caratteri
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login success:', this.loginForm.value);
      // Aggiungi qui logica per login (come una chiamata al backend, che non stiamo usando in questo esempio)
    } else {
      console.log('Form is invalid');
    }
  }

  goToPage(page: string, event: Event) {
    event.preventDefault();
    this.router.navigate([page]);
  }

}
