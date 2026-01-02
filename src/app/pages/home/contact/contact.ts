import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LucideIconsModule } from '../../../lucide.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [
    ReactiveFormsModule,
    LucideIconsModule
  ]
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''], 
      message: ['', Validators.required],
      botField: [''] // Honeypot field
    });
  }

  formSubmitted = false;

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default Angular handling

    if (this.contactForm.valid) {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          alert("Form successfully submitted!");
          this.formSubmitted = true;
          this.contactForm.reset();
        })
        .catch((error) => alert("Error submitting form: " + error));
    }
  }
}
