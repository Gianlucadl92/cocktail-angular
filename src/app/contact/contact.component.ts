import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  formSubmitted: false | any;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  // Usa l'accesso tramite indice per accedere ai controlli
  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      this.contactForm.reset(); // Svuota tutti i campi
      console.log('Form submitted:', this.contactForm.value);

      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000);
    } else {
      this.formSubmitted = false;
      this.contactForm.markAllAsTouched(); // Segna i campi non validi
      console.log('Form is invalid');
    }
  }
}
